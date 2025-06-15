import { cookies } from "next/headers";

export async function setTokens({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const cookieStore = await cookies();
  cookieStore.set("accessToken", accessToken);
  cookieStore.set("refreshToken", refreshToken);
  return { success: true, message: "Success!" };
}
