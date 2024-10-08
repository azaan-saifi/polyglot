"use client";
import React, { useState } from "react";
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";

const FormContainer = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("french");
  const [result, setResult] = useState("");

  const handleResult = (result: string) => {
    setResult(result);
  };

  return (
    <section className="flex size-full items-center justify-center">
      <div className="h-[calc(100vh-208px)] w-[95%] rounded-lg border border-black bg-white max-sm:size-[95%] sm:px-2 sm:py-4 ">
        {isTranslated ? (
          <OutputForm
            setIsTranslated={setIsTranslated}
            prompt={prompt}
            setPrompt={setPrompt}
            result={result}
            setLanguage={setLanguage}
          />
        ) : (
          <InputForm
            setIsTranslated={setIsTranslated}
            prompt={prompt}
            setPrompt={setPrompt}
            language={language}
            setLanguage={setLanguage}
            handleResult={handleResult}
          />
        )}
      </div>
    </section>
  );
};

export default FormContainer;
