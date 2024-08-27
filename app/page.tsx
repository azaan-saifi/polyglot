import Banner from "@/components/Banner";
import FormContainer from "@/components/FormContainer";
import React from "react";

const Home = () => {
  return (
    <main className="flex h-screen items-center justify-center overflow-x-hidden max-sm:h-full sm:bg-[#0D182E]">
      <div className="flex size-full flex-col items-center justify-center max-sm:gap-4 sm:flex-row lg:w-[70%]">
        <Banner />
        <FormContainer />
      </div>
    </main>
  );
};

export default Home;
