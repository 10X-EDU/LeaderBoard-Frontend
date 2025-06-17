import axios from "axios";

// const BASE_URL = process.env.BASE_URL || "http://localhost:8000/api/v1";
export async function POST(req: Request) {
  const { accessToken, refreshToken } = await req.json();
  try {
    const resp = await axios.get(`http://localhost:8000/api/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (resp.status === 200) {
      return new Response(
        JSON.stringify({
          isAuthenticated: true,
          tokens: { accessToken, refreshToken },
          user: resp.data.data,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }

  return new Response(JSON.stringify({ message: "hit" }), { status: 200 });
}
