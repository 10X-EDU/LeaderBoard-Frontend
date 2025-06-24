"use server";
import { cookies } from "next/headers";

export async function setTokensToCookies({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  try {
    const cookieStore = await cookies();
    cookieStore.set("access_token", accessToken);
    cookieStore.set("refresh_token", refreshToken);
  } catch (error) {
    console.log(error);
  }
}

export async function getTokens() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;
  return { accessToken, refreshToken };
}

export async function Logout() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
}
