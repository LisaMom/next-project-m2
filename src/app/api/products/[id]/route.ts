
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/${id}`);

    if (!res.ok) {
        return NextResponse.json(
            { error: "Failed to fetch product from the upstream API." },
            { status: res.status }
        );
    }

    const product = await res.json();
    return NextResponse.json(product);
}