import axios from "axios";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const TOKEN_KEYS = {
  accessToken: "access_token",
  refreshToken: "refresh_token",
} as const;

// Routes that do NOT require authentication
const PUBLIC_ROUTES = ["/sign-in", "/sign-up","/forgot-password"];

/**
 * Clears authentication tokens from cookies.
 * @param response - The NextResponse object to modify.
 */
const clearTokens = (response: NextResponse) => {
  response.cookies.delete(TOKEN_KEYS.accessToken);
  response.cookies.delete(TOKEN_KEYS.refreshToken);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(TOKEN_KEYS.accessToken)?.value;
  const refreshToken = request.cookies.get(TOKEN_KEYS.refreshToken)?.value;

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const nextRedirect = (path: string) =>
    NextResponse.redirect(new URL(path, request.url));

  // Handle authenticated users on public routes
  if (isPublicRoute && accessToken) {
    return nextRedirect("/user/profile");
  }

  // Allow access to public routes for unauthenticated users
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For private routes, require a token
  if (!accessToken) {
    return nextRedirect("/sign-in");
  }

  // --- Verify Access Token ---
  try {
    // This initial check validates the active access token
    await axios.post("http://localhost:3000/api/check", { accessToken });
    // If the check succeeds, proceed with the original request
    return NextResponse.next();
  } catch (error) {
    // --- Handle Token Expiration (401 Unauthorized) ---
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 401 &&
      refreshToken
    ) {
      try {
        // Attempt to refresh the tokens
        const refreshResponse = await axios.post(
          "http://localhost:8000/api/v1/refresh-token",
          {
            refreshToken,
          },
        );

        console.log(refreshResponse.data);

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          refreshResponse.data;

        if (!newAccessToken || !newRefreshToken) {
          throw new Error("Invalid tokens received from refresh endpoint");
        }

        // Token refresh was successful, allow the user to continue their action
        const response = NextResponse.next();

        // Set the new tokens in cookies
        response.cookies.set({
          name: TOKEN_KEYS.accessToken,
          value: newAccessToken,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: 24 * 60 * 60, // 1 day
        });

        response.cookies.set({
          name: TOKEN_KEYS.refreshToken,
          value: newRefreshToken,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: 7 * 24 * 60 * 60, // 7 days
        });

        return response;
      } catch (refreshError) {
        // --- Handle Refresh Failure ---
        console.error("Token refresh failed:", refreshError);
        // If refresh fails, redirect to sign-in and clear corrupted tokens
        const response = nextRedirect("/sign-in");
        clearTokens(response);
        return response;
      }
    }

    // --- Handle Other Auth Check Errors ---
    console.error("Auth check failed with a non-401 error:", error);
    const response = nextRedirect("/sign-in");
    clearTokens(response);
    return response;
  }
}

export const config = {
  // Match all routes except for API, Next.js internal paths, and static files (including /assets and all files in /public)
  matcher: [
    "/((?!api|_next|favicon.ico|assets).*)",
  ],
};
