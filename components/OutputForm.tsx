import React from "react";
interface OutputFormProps {
  result: string;
  setIsTranslated: (value: boolean) => void;
  prompt: string;
  setPrompt: (value: string) => void;
  setLanguage: (value: string) => void;
}

const OutputForm = ({
  setIsTranslated,
  prompt,
  result,
  setPrompt,
  setLanguage,
}: OutputFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTranslated(false);
    setPrompt("");
    setLanguage("french");
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
            Original Text 👇
          </label>
          <textarea
            disabled
            value={prompt}
            id="textToTranslate"
            className="h-28 rounded-lg bg-gray-200 p-2 font-inter font-medium outline-none"
          ></textarea>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <label
            htmlFor="textToTranslate"
            className="text-center font-inter text-xl text-[#035A9D]"
          >
            Your translation 👇
          </label>
          <textarea
            value={result}
            disabled
            id="textToTranslate"
            className="h-28 rounded-lg bg-gray-200 p-2 font-inter font-medium outline-none"
          ></textarea>
        </div>
        <button className="mt-3 rounded-lg bg-[#035A9D] py-2 font-inter text-2xl text-white">
          Start Over
        </button>
      </form>
    </div>
  );
};

export default OutputForm;
