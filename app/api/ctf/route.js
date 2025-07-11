// app/api/ctf/route.js
export const runtime = "edge";
import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://ctftime.org/api/v1/events/?limit=15";
  const headers = {
    "User-Agent": "BASH-WEBSITEv1.0 bashcyberclub.org",
  };

  try {
    const response = await fetch(url, {
      headers: headers,
      next: { revalidate: 3600 }, // Cache data for 1 hour on the server
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CTF data: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in CTF API route:", error);
    // Returns a structured error response
    return new NextResponse(
      JSON.stringify({ message: "Failed to fetch CTF events." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
