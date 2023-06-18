// app/api/route.js

import { mockPosts } from "../../mockData";
import { NextResponse } from "next/server";

export async function GET(Request) {
  return NextResponse.json(mockPosts);
}
