'use client';

import { Servemodelimage } from "@/lib/cloudinary.config";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Modelimages({ tag }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null); 
    const router = useRouter();

    useEffect(() => {
        if (!tag) return; 

        Servemodelimage(tag)
            .then((res) => setImages(res))
            .catch((error) => {
                console.error("Error fetching images:", error);
                setError("Failed to load images.");
            });
    }, [tag]);

    return (
        <section className="h-full w-full flex flex-row flex-wrap justify-around scroll-smooth snap-mandatory snap-y overflow-y-auto gap-4">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : images.length > 0 ? (
                images.map((obj, index) => (
                    <CldImage
                        key={index}
                        className="snap-center snap-always scroll-smooth cursor-pointer"
                        src={obj.public_id}
                        width={100}
                        height={100}
                        alt={`image-${index + 1}`}
                        onClick={() => router.push(`/model/${obj.public_id}`)}
                    />
                ))
            ) : (
                <div>Loading images...</div>
            )}
        </section>
    );
}
