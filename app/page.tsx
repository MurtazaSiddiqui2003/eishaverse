import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { Entrance } from "./ui/entrance";
import { Universe } from "./ui/universe";

export const dynamic = "force-dynamic";

async function hasAccess() {
  const secret = process.env.EISHAVERSE_PASSWORD;
  if (!secret) return false;

  const jar = await cookies();
  const supplied = jar.get("eishaverse_access")?.value ?? "";
  const expected = createHmac("sha256", secret).update("eishaverse-access").digest("hex");
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export default async function Home() {
  const configured = Boolean(process.env.EISHAVERSE_PASSWORD);
  const unlocked = configured && await hasAccess();

  if (!unlocked) return <Entrance configured={configured} />;
  return <Universe />;
}