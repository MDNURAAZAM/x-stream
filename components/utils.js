const data = {
  videos: () => import("@/public/videos.json").then((module) => module.default),
};

export const getData = async (path) => data[path]();

export const getRandomIndexArray = (arraySize) => {
  const indices = new Set();

  while (indices.size < 4) {
    const randomIndex = Math.floor(Math.random() * arraySize);
    indices.add(randomIndex); // Set ensures uniqueness
  }

  return Array.from(indices);
};
