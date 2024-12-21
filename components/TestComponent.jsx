// Client Component
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import { Skeleton } from '@/components/ui/skeleton'; // Import your skeleton component if needed
import { Badge } from './ui/badge';

export default function ClientImageGallery({ images,folder }) {
  const router = useRouter();
  const Tag = folder.charAt(0).toUpperCase() + folder.slice(1);
  return (
    <>
    <section className='w-full flex flex-col justify-around items-center gap-5'>
    <div className="h-full w-full text-xl font-bold flex flex-row lg:text-2xl justify-between items-center mt-1 px-4">
          <span className='bg-gradient-to-r from-amber-300 to-amber-900 bg-clip-text text-transparent'>{Tag}</span>
          <Badge onClick={()=>router.push("/model/panels?type=mdf")} className='flex bg-amber-500'><strong>{'more >'}</strong></Badge>
    </div> 
    <div className="relative h-auto w-full flex flex-row justify-around  items-start p-2 scroll-smooth snap-mandatory snap-x overflow-x-auto gap-6">
      {
        images.map((obj, index) => (
          <CldImage
            key={index}
            src={obj.public_id}
            width="120"
            height="120"
            alt={`Image ${index + 1}`}
            className="snap-center snap-always scroll-smooth z-40"
            onClick={() => router.push(`/model/${obj.public_id}`)}
          />
        ))
      }
    
    </div>
    
    {/* <Badge onClick={()=>router.push(`/model/${folder}`)} className='lg:hidden w-full bg-amber-500 rounded-xl text-center'><strong className='w-full text-center'>{'More >'}</strong></Badge> */}
    </section>
    </>
   
  );
}