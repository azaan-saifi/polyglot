"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  setIsTranslated: (bold: boolean) => void;
}

const InputForm = ({ setIsTranslated }: Props) => {
  const [prompt, setPrompt] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.length < 2) {
      setErrorMessage(true);
      return;
    }

    setIsTranslated(true);
  };

  const handlePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    if (prompt.length >= 1 && errorMessage) {
      setErrorMessage(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4"
      >
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
            className=" h-28 rounded-lg bg-gray-200 p-2 outline-none"
          ></textarea>
          {errorMessage && <p className="-mb-8">Demo error</p>}
        </div>
        <div className=" mt-7 flex flex-col gap-2">
          <p className="text-center font-inter text-xl text-[#035A9D]">
            Select language 👇
          </p>

          <div className="flex justify-center">
            <div className="mr-14 mt-2">
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="french"
                  name="language"
                  value="french"
                  defaultChecked
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

              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="spanish"
                  name="language"
                  value="spanish"
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

              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="japanese"
                  name="language"
                  value="japanese"
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
        <button className="mt-3 rounded-lg bg-[#035A9D] py-2 font-inter text-2xl text-white">
          Translate
        </button>
      </form>
    </div>
  );
};

export default InputForm;
