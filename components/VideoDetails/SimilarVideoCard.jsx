import React from "react";

const SimilarVideoCard = () => {
  return (
    <div className="flex items-start space-x-4">
      <img
        src="https://i.ytimg.com/vi/F8BactAXOH4/hqdefault.jpg"
        alt="Open World Games Thumbnail"
        className="w-30 h-20 rounded object-cover"
      />
      <div>
        <h3 className="font-semibold">Top 10 BIGGEST OPEN WORLD Games</h3>
        <p className="text-sm text-gray-400">Lazy Assassin</p>
        <p className="text-sm text-gray-400">7,694M View now</p>
      </div>
    </div>
  );
};

export default SimilarVideoCard;
