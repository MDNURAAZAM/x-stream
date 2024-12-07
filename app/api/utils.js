import fs from "fs";
import path from "path";

// Get the path to the videos.json file
const filePath = path.join(process.cwd(), "public", "data", "videos.json");

// Helper function to read the JSON file
const readVideosFromFile = () => {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading videos.json:", error);
    return [];
  }
};

// Helper function to write to the JSON file
const writeVideosToFile = (videos) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(videos, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to videos.json:", error);
  }
};

// Get all videos
export const getAllVideos = () => {
  return readVideosFromFile();
};

// Get a single video by ID
export const getVideo = (id) => {
  const videos = readVideosFromFile();
  return videos?.find((video) => video?.videoId === id);
};

// Delete a video by ID
export const deleteVideo = (id) => {
  const videos = readVideosFromFile();
  const index = videos?.findIndex((video) => video?.videoId === id);

  if (index >= 0) {
    videos.splice(index, 1);
    writeVideosToFile(videos);
  }
};

// Update a video by ID
export const updateVideo = (id, body) => {
  const videos = readVideosFromFile();
  const index = videos.findIndex((video) => video?.videoId === id);

  if (index >= 0) {
    Object.keys(body).forEach((property) => {
      videos[index][property] = body[property];
    });
    writeVideosToFile(videos);
    return videos[index];
  }

  return null; // Return null if the video is not found
};

// Get the index of a video by ID
export const getVideoIndex = (id) => {
  const videos = readVideosFromFile();
  return videos.findIndex((video) => video?.videoId === id);
};
