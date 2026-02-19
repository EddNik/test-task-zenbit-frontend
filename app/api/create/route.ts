export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3001";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const formData = await req.formData();

    const res = await fetch(`${BACKEND_URL}/create`, {
      method: "POST",
      headers: {
        Cookie: cookieStore.toString(),
      },
      body: formData,
    });

    const contentType = res.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const raw = await res.json();
      return NextResponse.json(raw, { status: res.status });
    }

    const text = await res.text();
    return new NextResponse(text, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message ?? "Internal Server Error" },
      { status: 500 }
    );
  }
}
