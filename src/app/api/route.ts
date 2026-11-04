import { posts } from "@/lib/posts";
import { NextRequest, NextResponse } from "next/server";

// There are support HTTP methods: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
export async function GET(request: NextRequest) {
  const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  }
  return NextResponse.json(person);
}
