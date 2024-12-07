const data = {
  videos: () => import("@/public/videos.json").then((module) => module.default),
};

export const getData = async (path) => data[path]();
