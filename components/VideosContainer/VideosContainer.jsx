import React from "react";
import VideoCard from "./VideoCard";
import Link from "next/link";
import { getData } from "../utils";

const VideosContainer = async () => {
  const videos = await getData("videos");
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Streams of the day</h2>
        <Link
          href="#"
          className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos?.map((video) => (
          <Link key={video?.videoId} href={`/videos/${video?.videoId}`}>
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideosContainer;
