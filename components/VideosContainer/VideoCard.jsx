import React from "react";

const VideoCard = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-color-gray">
      <img
        src="https://i.ytimg.com/vi/9kjwMTj8ZD0/hqdefault.jpg"
        alt="Stream 1"
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">
          Fallout Shelter PC - Ep. 1 - Fallout Shelter Vault #314
        </p>
        <p className="text-sm text-gray-400">Blitz</p>
      </div>
    </div>
  );
};

export default VideoCard;
