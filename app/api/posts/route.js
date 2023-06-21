// app/api/route.js

import { mockPosts } from "../../mockData";
import { NextResponse } from "next/server";

export async function GET(Request) {
  return NextResponse.json(mockPosts);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  // Logic to delete the post from the database goes here...
  
  return NextResponse.json({ message: 'Post deleted' });
}