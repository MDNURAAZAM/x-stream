import { NextResponse } from "next/server";
import { getAllVideos } from "../utils";

export async function GET() {
  const videos = getAllVideos();
  return NextResponse.json(videos);
}
