import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div id="contact" className="container-shadow [ w-full lg:w-4/5 mx-auto lg:mt-48 mt-20 px-8 py-32 ] [ rounded-3xl border border-gray ] [ flex flex-col gap-2 ]">
      <h1 className="text-4xl lg:text-5xl font-medium divide-y">
        Let&apos;s create intuitive and impactful <br /> interfaces that resonate
        with <br /> your audience✨
      </h1>
      <hr className="my-12 h-0.5 border-t-0 bg-gray" />

      <p className="text-dark-gray text-lg">Connect</p>
      <p className="font-normal text-lg">amaliakivansa34@gmail.com</p>
    </div>
  );
};

export default Footer;
