// import { v2 as cloudinary } from "cloudinary";
// import { useRouter } from 'next/navigation';
// import { CldImage } from 'next-cloudinary';
// import { Skeleton } from '@/components/ui/skeleton'; 

// export default function ClientImageGallery({ images, error }) {
//     const router = useRouter();
//     return (
//       <>
//       <div className="relative h-auto w-full flex flex-row justify-around  items-start p-2 scroll-smooth snap-mandatory snap-x overflow-x-auto gap-6">
//         {
//           images.map((obj, index) => (
//             <CldImage
//               key={index}
//               src={obj.public_id}
//               width="75"
//               height="75"
//               alt={`Image ${index + 1}`}
//               className="snap-center snap-always scroll-smooth z-40"
//               onClick={() => router.push(`/model/${obj.public_id}`)}
//             />
//           ))
//         }
      
//       </div>
//       </>
     
//     );
//   }

// export async function getServerSideProps(context) {
//     const { folder } = context.query; // Get the folder name from the query parameters
//     let images = [];
//     let error = false;
  
//     try {
//       const resources = await cloudinary.v2.search
//         .expression(folder)
//         .sort_by('public_id')
//         .max_results(7)
//         .execute();
  
//       images = resources.resources;
//     } catch (err) {
//       console.error("Error fetching images from Cloudinary:", err);
//       error = true;
//     }
  
//     return {
//       props: {
//         images,
//         error,
//       },
//     };
//   }