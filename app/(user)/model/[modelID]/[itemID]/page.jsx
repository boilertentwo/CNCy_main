'use client'
import { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CldImage } from "next-cloudinary";
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { useAuthStore } from '@/lib/zustand/store';
import { cookier } from '@/app/test';
import { makeOrder, userNameNPhone } from '@/lib/appwrite.config';
import { toast } from 'sonner';

import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import ItemIdBread from './_lib/Bread';

export default function ImageForm({ params }) {
  const { handleSubmit, control, watch,reset, formState: { errors } } = useForm();
  const [user, setUser] = useState();
  const [price, setPrice] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [noOfSheets, setNoOfSheets] = useState(1);
  const [materialType, setMaterialType] = useState("");
  const [userOrder, setUserOrder] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const formValues = watch();
  const [contact, setContact] = useState({})
  const [withMaterial, setWithMaterial] = useState(false);

  const handleCheckboxChange = (e) => {
    setWithMaterial(e.target.checked);
  };
  const calculatePrice = useCallback(()=>{
    
      let basePrice = 0;
    
      if (formValues.height && formValues.width) {
        const heightInMM = formValues.height;
        const widthInMM = formValues.width;
    
        
        const areaInSqMM = heightInMM * widthInMM;
        const areaInSqFT = areaInSqMM / 92900; // 144 square inches = 1 square foot
    
       
        basePrice = areaInSqFT * 150 * noOfSheets;
      }
    
      if (formValues.materialThickness) {
        basePrice += formValues.materialThickness * 10;
      }
    
      
      if (basePrice < 150) {
        basePrice = 150;
      }
      
      setPrice(basePrice);
    },[formValues,noOfSheets])
  
  const getUser = async () => {
    try {
      const result = await cookier(); // Fetch the user details
      setIsLoggedIn(Boolean(result));
      if(result){
        userNameNPhone().then((result)=>{
          setContact(result)
        }).catch((error)=> null)
      }
    } catch (error) {
      return
    }
  };

  useEffect(() => {
    // Fetch user once on component mount
    getUser();
  }, []);

  

  useEffect(() => {
    calculatePrice();
    if (Object.keys(errors).length > 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [formValues, errors, calculatePrice]);

  const onSubmit = (data) => {
    console.log(contact)
    const orderObj = {
      
      user: user,
      imageid: `${params.modelID}/${params.itemID}`,
      height: formValues.height,
      width: formValues.width,
      border: formValues.border,
      thickness: formValues.materialThickness,
      cost: price.toFixed(2),
      orderedat: Date.now(),
      sheets: noOfSheets,
      material: materialType
    };
    setUserOrder(orderObj);
  };

  const handlePlaceOrder = () => {
    const timeStamp = new Date().toISOString();
    const orderObj = {
      username: contact.username,
      userphone: contact.userphone,
      user: contact.user,
      imageid: `${params.modelID}/${params.itemID}`,
      height: parseFloat(formValues.height),
      width: parseFloat(formValues.width),
      border: parseFloat(formValues.border),
      thickness: parseFloat(formValues.materialThickness),
      "with-material": withMaterial,
      cost: parseFloat(price.toFixed(2)),
      orderedat: timeStamp,
      sheets: noOfSheets,
      material: formValues.materialType
    };
    makeOrder(orderObj)
    .then((result)=>toast('Hurray! Your order is placed',{description:'We will get back to you in 24 hours'}))
    .catch((error)=>toast('Try again',{description:'Error occured while placing order'}))
    reset()
    
  };

  return (
    <>
      
      <div className='w-full px-3 pt-2'>
      <Accordion collapsible className='w-full px-4 text-transparent border-2 border-amber-300 bg-gradient-to-r from-amber-300 to-amber-700 bg-clip-text rounded-lg px-4'>
          <AccordionItem value='item-1'>
                  <AccordionTrigger className='h-10'>
                    <span className='font-extrabold text-center'>Enter measurement in MM ...  </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='p-4 bg-transparent '>
                    <ol className='flex flex-col justify-around'>
                      <li>1. Enter height, width and border required of your material.</li>
                      <li>2. Press on the quotation to confirm measurements.</li>
                      <li>3. Choose no of sheets required and the material type.</li>
                      <li>4. Place order once satisfied with the entries.</li>
                    </ol>

                    </div>
                    
                  </AccordionContent>
          </AccordionItem>
          
        </Accordion>

      </div>
            <main className='h-full w-full p-3 space-y-5 md:flex md:gap-10'>
        <div className="relative max-h-[600px] md:w-4/5 border-2 border-amber-300 rounded-lg p-6 flex lg:mr-28 lg:px-28 lg:mt-4">
          {/* Image */}
          <div className="h-full absolute inset-0 p-3 flex-grow flex flex-row justify-center">
            <CldImage
              alt="crafted image"
              src={`${params.modelID}/${params.itemID}`}
              width="150"
              height="150"
              className="rounded-lg object-contain min-w-full min-h-full"
            />
          </div>

          {/* Form Overlay */}
          <div className="w-full h-full z-0  flex flex-grow flex-col justify-around items-end pt-10 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="w-full flex flex-col gap-10 hover:bg-emerald-900 opacity-35 hover:opacity-90 rounded-xl transition-all duration-300 ease-in-out hover:p-3  hover:p-2 justify-around items-end space-y-2">
                <Controller
                  name="height"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className='flex flex-row w-full justify-end'>
                      <input 
                        {...field} 
                        type="number" 
                        placeholder="Height" 
                        className={`text-right bg-transparent ${errors.height ? 'border-red-500' : ''} border-b border-gray-300 focus:outline-none focus:border-blue-500 w-1/3`} 
                        min={25}
                        step={0.01}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="width"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className='flex flex-row w-full justify-end'>
                      <input 
                        {...field} 
                        type="number" 
                        placeholder="Width" 
                        className={`text-right bg-transparent ${errors.width ? 'border-red-500' : ''} border-b border-gray-300 focus:outline-none focus:border-blue-500 w-1/3`} 
                        min={25}
                        step={0.01}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="border"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className='flex flex-row w-full justify-end'>
                      <input 
                        {...field} 
                        type="number" 
                        placeholder="Border" 
                        className={`text-right bg-transparent ${errors.border ? 'border-red-500' : ''} border-b border-gray-300 focus:outline-none focus:border-blue-500 w-1/3`} 
                        min={6}
                        step={0.1}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="materialThickness"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className='flex flex-row w-full justify-end'>
                      <input 
                        {...field} 
                        type="number" 
                        placeholder="Thickness" 
                        className={`text-right bg-transparent text-amber-400 ${errors.materialThickness ? 'border-red-500' : ''} border-b border-gray-300 focus:outline-none focus:border-blue-500 w-1/2`} 
                        min={6}
                        step={0.1}
                      />
                    </div>
                  )}
                />
                  <Controller
                    name="materialType"
                    control={control}
                    defaultValue=""
                    rules={{ 
                      required: "Please select a material type",
                      validate: value => value !== "" || "Material type cannot be empty"
                    }}
                    render={({ field }) => (
                      <div className='w-full h-10 flex justify-end items-start'>
                    
                        <select
                          {...field}
                          className={`w-1/2 h-8 text-right bg-amber-400 rounded-lg text-black border-b border-gray-300 focus:outline-none focus:border-blue-500  ${errors.materialType ? 'border-red-500' : ''}`}
                        >
                          <option value="">Material</option>
                          <option value="MDF">MDF</option>
                          <option value="WPC">WPC</option>
                          <option value="WOOD">WOOD</option>
                          <option value="MS" disabled>MS (upcoming)</option>
                        </select>
                      </div>
                    )}
                  />


              </div>

              {/* Dynamic Pricing */}
              <div >
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button type="submit" variant={price ? '' : 'ghost'} className="btn-primary float-right min-w-1/3 text-xl">
                      {price ? <h1>₹{price.toFixed(2)}</h1> : <h1>₹ 0</h1>}
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>
                        {hasError ? (
                          <span className='text-red-400'>Please fill all measurement fields</span>
                        ) : isLoggedIn ? (
                          <span>Your order is almost done!</span>
                        ) : (
                          <span>Please login to proceed with the order!</span>
                        )}
                      </DrawerTitle>
                      <DrawerDescription>
                        {hasError ? null : isLoggedIn ? (
                          <span>Just provide some more info on your order.</span>
                        ) : null}
                      </DrawerDescription>
                    </DrawerHeader>
                    {!hasError && isLoggedIn && (
                      <div className="h-36 flex flex-col justify-around space-y-4 px-6">
                        <div className='flex justify-between'>
                          <span>No of sheets:</span>
                          <div className="flex items-center justify-around space-x-3">
                            <button
                              type="button"
                              onClick={() => setNoOfSheets(prev => Math.max(1, prev - 1))} // Ensure it doesn't go below 1
                              className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 focus:outline-none"
                            >
                              <span className='text-black text-2xl'>-</span>
                            </button>
                            <span className="text-lg">{noOfSheets}</span> {/* Display the number of sheets */}
                            <button
                              type="button"
                              onClick={() => setNoOfSheets(prev => prev + 1)}
                              className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 focus:outline-none"
                            >
                              <span className='text-black text-2xl'>+</span>
                            </button>
                          </div>
                        </div>
                        <div className='flex justify-between'>
                              <label className="text-amber-200">With Material</label>
                              <input
                                  type="checkbox"
                                  checked={withMaterial}
                                  onChange={handleCheckboxChange}
                                  className="form-checkbox h-5 w-5 text-amber-200 border-gray-300 focus:ring-blue-500"
                                />
                        </div>
                      </div>
                    )}
                    <DrawerFooter>
                      {!hasError && isLoggedIn && (
                        <DrawerClose asChild>
                          <Button className='text-xl text-white bg-emerald-600' onClick={handlePlaceOrder}>
                            Place order: ₹{price.toFixed(2)}
                          </Button>
                        </DrawerClose>
                      )}
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </form>
          </div>
        </div>
        <div className="max-h-[400px] w-full p-6 border-2 rounded-lg shadow-lg">
          <ul className="list-disc w-auto flex flex-col p-3 gap-4 text-sky-200">
            <li>We are finalizing the crafting cost to offer you the best deal.</li>
            <li>As an inaugural offer, no delivery charges will be added, but soon costs will be included based on your location.</li>
            <li>Only registered users can place orders for the models shown.</li>
            <li>We may call your registered phone number to confirm your delivery location.</li>
          </ul>
        </div>
      </main>
    </>
  );
}
