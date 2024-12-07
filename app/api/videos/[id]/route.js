import { NextResponse } from "next/server";
import { deleteVideo, getVideo, getVideoIndex, updateVideo } from "../../utils";

export async function GET(_request, { params }) {
  try {
    const videoId = params?.id;
    const video = getVideo(videoId);
    if (video?.videoId?.length > 0) {
      return NextResponse.json(video, { status: 200 });
    }
    return NextResponse.json(
      { error: `Item with ID ${videoId} not found` },
      { status: 404 }
    );
  } catch (_error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const body = await request?.json();
    const videoId = params?.id;
    const index = getVideoIndex(videoId);

    //check if properties and id are valid
    const hasValidProperties =
      Object?.keys(body).includes("title") ||
      Object?.keys(body).includes("description");

    if (index < 0) {
      return NextResponse.json(
        { error: `Item with ID ${videoId} not found` },
        { status: 404 }
      );
    }

    if (!hasValidProperties) {
      return NextResponse.json(
        { error: "Invalid property in request body" },
        { status: 400 }
      );
    }
    const updatedVideo = updateVideo(videoId, body);

    return NextResponse.json(updatedVideo, { status: 200 });
  } catch (_error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request, { params }) {
  try {
    const videoId = params?.id;
    const video = getVideo(videoId);

    if (video?.videoId?.length > 0) {
      deleteVideo(videoId);
      return NextResponse.json(
        {
          message: `Item with ID ${videoId} deleted successfully`,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: `Item with ID ${videoId} not found` },
      { status: 404 }
    );
  } catch (_error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
