import React from "react";

type Props = {};

const Bio = (props: Props) => {
  return (
    <div id="story" className="w-full lg:mt-48 mt-20">
      <div className="flex lg:flex-row flex-col justify-center gap-16 w-4/5 mx-auto py-20 leading-normal">
        <div className="basis-1/4">
          <img
            src="/assets/images/profile-image.png"
            alt="Amalia Kivansa Anggreansi"
            className="w-4/5 mx-auto"
          />
        </div>
        <div className="basis-1/2">
          <p className="underline">Amalia Kivansa Anggreansi</p>
          <p>Frontend Developer</p>
          <p className="mt-8">
            Bio : <br />
            Born in Jakarta, with over 2 years of experience in building
            user-centered UIs using modern web technologies such as HTML5, CSS3,
            JavaScript, and frameworks like Vue.js and React. I focus on
            delivering seamless, interactive, and high-performance front-end
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
