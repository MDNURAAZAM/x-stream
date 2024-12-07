import videos from "@/public/data/videos.json";
export const getAllVideos = () => {
  return videos;
};

export const getVideo = (id) => {
  const video = videos?.find((video) => video?.videoId === id);

  return video;
};

export const deleteVideo = (id) => {
  const index = videos?.findIndex((video) => video?.videoId === id);
  videos?.splice(index, 1);
};

export const updateVideo = (id, body) => {
  const index = videos?.findIndex((video) => video?.videoId === id);
  Object?.keys(body)?.map((property) => {
    videos[index][property] = body[property];
  });

  return videos[index];
};

export const getVideoIndex = (id) => {
  const index = videos?.findIndex((video) => video?.videoId === id);
  return index;
};
