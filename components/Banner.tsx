import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex h-52 bg-cover  max-sm:w-full max-sm:bg-[url('/assets/worldmap.png')]">
        <div className="flex w-full items-center justify-center gap-3">
          <div>
            <Image
              src={"/assets/parrot.png"}
              alt="Parrot"
              width={95}
              height={85}
            />
          </div>
          <div>
            <h1 className="text-5xl text-[#32CD32]">PollyGlot</h1>
            <p className="mt-1 font-inter text-xs font-medium text-white">
              Perfect Translation Every Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
