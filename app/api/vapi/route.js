import { NextResponse } from "next/server";

// Server-side API route for VAPI
export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch("https://api.vapi.ai/call/web", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY_HERE", // <-- put your VAPI key here
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("VAPI call failed:", err);
    return NextResponse.json({ error: "VAPI call failed" }, { status: 500 });
  }
}
