"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface Props {
  setIsTranslated: (bool: boolean) => void;
  setPrompt: (str: string) => void;
  setLanguage: (str: string) => void;
  prompt: string;
  language: string;
  handleResult: (result: string) => void;
}

const InputForm = ({
  setIsTranslated,
  language,
  prompt,
  setPrompt,
  setLanguage,
  handleResult,
}: Props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.length < 2) {
      setErrorMessage(true);
      return;
    }

    setIsTranslating(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, language }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      handleResult(result.translatedText);
    } catch (error) {
      console.error("Error fetching translation:", error);
      throw error;
    }

    // after fetching
    setIsTranslating(false);
    setIsTranslated(true);
  };

  const handlePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    if (e.target.value.length >= 1 && errorMessage) {
      setErrorMessage(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="textToTranslate"
            className="text-center font-inter text-xl text-[#035A9D]"
          >
            Text to translate 👇
          </label>
          <textarea
            id="textToTranslate"
            value={prompt}
            onChange={handlePrompt}
            className="h-28 rounded-lg bg-gray-200 p-2 font-inter font-medium outline-none"
          ></textarea>
          {errorMessage && (
            <p className="-mb-8 tracking-wide text-red-500">
              Text must contain at least 2 characters.
            </p>
          )}
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <p className="text-center font-inter text-xl text-[#035A9D]">
            Select language 👇
          </p>

          <div className="flex justify-center">
            <div className="mr-14 mt-2">
              {/* French Radio Button */}
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="french"
                  name="language"
                  value="french" // Fixed value
                  checked={language === "french"} // Controlled
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor="french"
                  className="flex items-center font-inter"
                >
                  <span className="mr-2 font-bold">French</span>
                  <Image
                    src="/assets/fr-flag.png"
                    alt="French flag"
                    width={24}
                    height={16}
                  />
                </label>
              </div>

              {/* Spanish Radio Button */}
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="spanish"
                  name="language"
                  value="spanish" // Fixed value
                  checked={language === "spanish"} // Controlled
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor="spanish"
                  className="flex items-center font-inter"
                >
                  <span className="mr-2 font-bold">Spanish</span>
                  <Image
                    src="/assets/sp-flag.png"
                    alt="Spanish flag"
                    width={24}
                    height={16}
                  />
                </label>
              </div>

              {/* Japanese Radio Button */}
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="japanese"
                  name="language"
                  value="japanese" // Fixed value
                  checked={language === "japanese"} // Controlled
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor="japanese"
                  className="flex items-center font-inter"
                >
                  <span className="mr-2 font-bold">Japanese</span>
                  <Image
                    src="/assets/jpn-flag.png"
                    alt="Japanese flag"
                    width={24}
                    height={16}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={isTranslating}
          className="mt-3 rounded-lg bg-[#035A9D] py-2 font-inter text-2xl text-white"
        >
          {isTranslating ? "Translating..." : "Translate"}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
