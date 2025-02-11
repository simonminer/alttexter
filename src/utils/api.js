export const fetchAltText = async (imageUrl, apiKey, altTextType) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4-vision-preview",
        messages: [{ role: "user", content: `Describe this image in a ${altTextType} way: ${imageUrl}` }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    return data.choices[0]?.message?.content + " - AI-generated alt text" || "No description available";
  } catch (error) {
    console.error("Error fetching alt text:", error);
    throw new Error("Failed to fetch alt text");
  }
};

