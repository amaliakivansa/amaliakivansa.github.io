import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div id="hero" className="container-shadow [ w-full lg:w-4/5 mx-auto px-8 py-48 ] [ rounded-3xl border border-gray ] [ flex flex-col gap-2 ]">
      <p className="text-xl lg:text-2xl">
      👋 Hi, I’m Amalia, do frontend development and...
      </p>
      <h1 className="text-5xl lg:text-7xl font-medium mt-2">
      helping digital founders bring their visions to life with intuitive interfaces, <br/> seamless user experiences.
      </h1>
    </div>
  );
};

export default Hero;
