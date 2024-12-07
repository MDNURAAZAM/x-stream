import Image from "next/image";
import React from "react";

const VideoCard = ({ video }) => {
  const { title, channelTitle, thumbnail } = video || {};
  return (
    <div className="rounded-lg overflow-hidden bg-color-gray h-full">
      <Image
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover"
        width={1000}
        height={1000}
      />
      <div className="p-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
