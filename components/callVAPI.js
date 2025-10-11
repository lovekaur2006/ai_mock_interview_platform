const callVAPI = async (inputData) => {
  try {
    const response = await fetch("/api/vapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: inputData }),
    });

    if (!response.ok) throw new Error("Server error");

    const data = await response.json();
    console.log("VAPI response:", data);
  } catch (err) {
    console.error("Error calling VAPI:", err);
  }
};

// Example usage
callVAPI("Hello, test prompt");
