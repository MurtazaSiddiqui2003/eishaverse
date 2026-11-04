import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const secret = process.env.EISHAVERSE_PASSWORD;
  if (!secret) {
    return NextResponse.json({ error: "The entrance hasn't been configured yet." }, { status: 503 });
  }

  let submitted = "";
  try {
    const body = await request.json();
    submitted = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Please enter the password." }, { status: 400 });
  }

  const expected = Buffer.from(secret);
  const actual = Buffer.from(submitted);
  const valid = expected.length === actual.length && timingSafeEqual(expected, actual);

  if (!valid) {
    return NextResponse.json({ error: "That isn't quite right. Try again, lovely." }, { status: 401 });
  }

  const ticket = createHmac("sha256", secret).update("eishaverse-access").digest("hex");
  const response = NextResponse.json({ ok: true });
  response.cookies.set("eishaverse_access", ticket, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return response;
}