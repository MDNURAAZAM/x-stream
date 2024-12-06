import { NextResponse } from "next/server";
import { getVideo } from "../../utils";

export async function GET(request, { params }) {
  const videoId = params?.id;
  const video = getVideo(videoId);
  return NextResponse.json(video);
}
