import { NextResponse } from "next/server";
import { getAllVideos } from "../utils";

export async function GET() {
  return NextResponse.json(getAllVideos());
}
