export const runtime = "edge";

export async function POST(request) {
  try {
    // 1. Get the FCM token from the request body
    const { token } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({ error: "FCM token required" }), {
        status: 400,
      });
    }

    // 2. Get the authentication token from the Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Authorization header required" }),
        {
          status: 401,
        }
      );
    }
    const idToken = authHeader.split("Bearer ")[1];

    // 3. Forward the request to your actual backend Cloud Function
    const response = await fetch(
      "https://us-central1-bash-website-backend.cloudfunctions.net/signupFcm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Use the idToken we just extracted from the header
          Authorization: `Bearer ${idToken}`,
        },
        // The body now correctly matches what the Cloud Function expects
        body: JSON.stringify({ data: { token } }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Cloud Function call failed");
    }
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to register FCM token: " + error.message,
      }),
      { status: 500 }
    );
  }
}
