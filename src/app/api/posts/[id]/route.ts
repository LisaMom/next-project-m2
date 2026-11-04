import { posts } from "@/lib/posts";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return Response.json(
      { message: "Post not found" },
      { status: 404 }
    );
  }

  return Response.json(post);
}