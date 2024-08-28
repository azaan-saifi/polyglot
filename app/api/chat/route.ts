import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt, language } = await req.json();

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an expert translator, just translate the given text not any other talk.`,
          },
          {
            role: "user",
            content: `Translate the following text to ${language}: "${prompt}`,
          },
        ],
      }),
    });

    const responseData = await response.json();
    const translatedText = responseData.choices[0].message.content;
    return NextResponse.json({ translatedText });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
