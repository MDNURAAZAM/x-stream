import videos from "@/public/data/videos.json";
export const getAllVideos = () => {
  return videos;
};

export const getVideo = (id) => {
  const video = videos?.find((video) => video?.videoId === id);

  return video ? video : videos;
};
