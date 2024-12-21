'use server'

import {v2 as cloudinary} from 'cloudinary'
import crypto from 'crypto'
import { redirect } from 'next/navigation';
import ClientImageGallery from '@/components/TestComponent';
import Modelimages from '@/app/(user)/model/[modelID]/_lib/ModelImages';


cloudinary.config({
    cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
})


export const uploadUserImage = async (fileBuffer) => {
    const imit = crypto.randomBytes(6).toString('hex');
    const buffer = Buffer.from(new Uint8Array(fileBuffer))
    try {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            public_id: imit,
            tags: 'next-upload',
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        ).end(buffer);
      });
  
      return imit
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error; 
    }
  };


export const getCloudImages= async(folder)=>{
  try {
    const resources = await cloudinary.search.expression(folder).sort_by('public_id','asc').max_results(7).execute()
    return resources.resources
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default async function ServeImages({ folder,tags }) {
  const asset = folder+tags
  
  try {
    const resources = await cloudinary.search
      .expression(asset)
      .sort_by('public_id')
      .max_results(7)
      .execute();
    return <ClientImageGallery folder={folder} images={resources.resources} />;
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    
    // You can return an error message or a fallback UI component
    return <div>Failed to load images. Please try again later.</div>;
  }
}
export async function Servemodelimage({tag}){
  try {
    const resources = await cloudinary
        .search
        .expression(tag)
        .execute()
    const images= resources.resources
    return images
  } catch (error) {
       throw error
  }
}