'use client'
import { useEffect, useState } from 'react';
import Scroller from './Test';
import { UserReference } from "@/components/usp1/UserReference";
import { getLoggedInUser } from "@/lib/appwrite.config";

export const HeroSlider = ({ user, title, bgImage }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-cover md:bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1
        className={`${
          user === null ? 'mt-12 text-3xl' : 'mt-24 text-4xl'
        } text-center top-48 md:h-64 lg:w-80 lg:mt-48 font-bold`}
      >
        {title}
      </h1>
    </div>
  );
};

export default function HeroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getLoggedInUser()
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.error("Error fetching logged-in user:", error);
      });
  }, []);

  return (
    <div className={`relative h-[580px] md:h-[575px] w-full rounded-xl border-2 border-amber-300 flex justify-center items-center overflow-hidden`}>
      <div className="absolute inset-0 z-0 flex">
        <Scroller>
          <HeroSlider user={user} title="PARTITION DESIGNS FOR YOUR ROOMS." bgImage={'/4.jpg'} />
          <HeroSlider user={user} title="SEE-THROUGH DESIGNS FOR YOUR MANDIRS." bgImage={'/2.jpg'} />
          <HeroSlider user={user} title="PICK-UP, CRAFTING AND DELIVERY!" bgImage={'/3.jpg'} />
        </Scroller>
      </div>

      <div className={`relative hidden z-10 w-3/4 mt-28 mx-4 md:w-80 md:right-10 md:ml-auto`}>
        <UserReference />
      </div>
    </div>
  );
}
// }
// import { HeroSlide } from "./Autoscroll";
// import { UserReference } from "@/components/usp1/UserReference";
// import Scroller from "@/components/scroller";
// import { getLoggedInUser } from "@/lib/appwrite.config";

// export default function HeroSection() {
//   let user;
//   getLoggedInUser().then((result)=>user = result).catch((error)=>{throw error})
//   return (
//     <div className={`relative ${user ? 'h-[500px]' : 'h-[580px]'} md:h-[575px] w-full rounded-xl border-2 border-amber-300 flex justify-center items-center overflow-hidden`}>
//       <div className="absolute inset-0 z-0 flex">
//         <Scroller>
//           <HeroSlide user={user} title="PARTITION DESIGNS FOR YOUR ROOMS." description="This is the first slide" bgImage={'/4.jpg'} />
//           <HeroSlide user={user} title="SEE-THROUGH DESIGNS FOR YOUR MANDIRS." description="This is the second slide" bgImage={'/2.jpg'} />
//           <HeroSlide user={user} title="PICK-UP, CRAFTING AND DELIVERY!" description="This is the third slide" bgImage={'/3.jpg'} />
//         </Scroller>
//       </div>

//       <div className={`relative ${user ? 'hidden sm:flex' : 'sm:flex'} z-10 w-3/4 mt-28 mx-4 md:w-80 md:right-10 md:ml-auto`}>
//         <UserReference/>
//       </div>
//     </div>
//   );
// }

