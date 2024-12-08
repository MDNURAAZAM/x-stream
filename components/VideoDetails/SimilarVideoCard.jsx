"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { bypassInterceptingRoute } from "../LanguageSwitcher/utils";

const SimilarVideoCard = ({ video }) => {
  const { title, thumbnail, channelTitle, videoId } = video || {};
  const pathname = usePathname();

  const handleClick = () => {
    const path = pathname?.split("/").slice(0, -1).join("/");
    bypassInterceptingRoute(`${path}/${videoId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-start justify-center space-x-4  w-full cursor-pointer"
    >
      <div className="w-5/12">
        <Image
          src={thumbnail}
          alt={title}
          className="w-30 h-20 rounded object-cover"
          width={250}
          height={150}
        />
      </div>
      <div className="w-7/12">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{channelTitle}</p>
        <p className="text-sm text-gray-400">7,694M View now</p>
      </div>
    </div>
  );
};

export default SimilarVideoCard;
