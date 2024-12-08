import { getData } from "@/components/utils";
import VideoDetails from "@/components/VideoDetails/VideoDetails";
import React from "react";
import { Modal } from "./modal";

export async function generateStaticParams() {
  const videos = await getData("videos");

  return videos.map((video) => ({
    videoId: video?.videoId,
  }));
}

const VideoDetailsPage = ({ params: { videoId, lang } }) => {
  return (
    <Modal>
      <VideoDetails videoId={videoId} lang={lang} />
    </Modal>
  );
};

export default VideoDetailsPage;
