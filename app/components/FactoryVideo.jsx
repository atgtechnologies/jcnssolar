"use client";
import Image from "next/image";
import { useState } from "react";
import thunmbnail from "@/app/components/images/factory-thunmbnail.png";

const FactoryVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div>
      {!showVideo ? (
        <div className="relative w-full cursor-pointer aspect-[660/379.5]" onClick={() => setShowVideo(true)}>
          <Image src={thunmbnail} fill alt="Jcns Factory Video Thumbnail" className="w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-white bg-black/60 rounded-full p-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <video className="w-full" controls autoPlay muted loop>
          <source src="/factory-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default FactoryVideo;
