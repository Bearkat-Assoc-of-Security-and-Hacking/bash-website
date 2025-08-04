export const runtime = "edge";

export async function POST(request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({ error: "FCM token is required" }), {
        status: 400,
      });
    }
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Authorization header required" }),
        { status: 401 }
      );
    }
    const idToken = authHeader.split("Bearer ")[1];

    const response = await fetch(
      "https://us-central1-bash-website-backend.cloudfunctions.net/unsubscribeFcm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ data: { token } }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || "Cloud Function call failed");
    }
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to unsubscribe: " + error.message }),
      { status: 500 }
    );
  }
}
