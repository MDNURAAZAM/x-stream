import { NextResponse } from "next/server";
import { getAllVideos } from "../utils";

export async function GET() {
  try {
    const videos = getAllVideos();
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
