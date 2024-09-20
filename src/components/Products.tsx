import React from "react";

const Products = () => {
  const products = [
    {
      name: "Qwizy",
      description: "A mobile quiz application",
      icon: "qwizy-icon.png",
      framework: "ionic-icon.png",
      width: 50,
    },
    {
      name: "99% Usahaku",
      description: "An Ecommerce website for small and medium enterprises",
      icon: "99usahaku-icon.png",
      framework: "react-icon.png",
      width: 80,
    },
    {
      name: "Timaps",
      description: "Telkom map for internal purposes to be used by technicians",
      icon: "timaps-icon.png",
      framework: "react-icon.png",
      width: 100,
    },
    {
      name: "Trade In Online iBox",
      description: "An Ecommerce website for small and medium enterprises",
      icon: "tradein-icon.png",
      framework: "react-icon.png",
      width: 45,
    },
    {
      name: "Ekonoservice",
      description: "An Ecommerce website for small and medium enterprises",
      icon: "ekono-icon.png",
      framework: "react-icon.png",
      width: 70,
    },
    {
      name: "Easy Survey",
      description: "An Ecommerce website for small and medium enterprises",
      icon: "easy-icon.png",
      framework: "react-icon.png",
      width: 70,
    },
  ];

  return (
    <div id="works" className="lg:mt-48 mt-20">
      <p className="text-dark-gray text-center">
        So far the products I have contributed to
      </p>
      <div className="flex flex-wrap lg:flex-row flex-col w-4/5 mx-auto mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative lg:w-1/3 h-56 basis-1/3 border border-gray p-4 [ flex flex-col justify-between lg:gap-0 gap-6 ] [ hover:text-white hover:scale-105 hover:ease-in-out hover:transition-transform hover:duration-500 hover:z-20 ] overflow-hidden group"
          >
            {/* Expanding circle from the top-right corner, hidden initially */}
            <div className="absolute -top-20 -right-20 w-full h-full bg-black rounded-full scale-0 group-hover:scale-150 transform origin-top-right transition-all duration-500 ease-in-out"></div>

            {/* Content inside the card */}
            <div className="relative z-10">
              <img
                src={`/assets/images/icon/${product.icon}`}
                alt="icon"
                width={product.width || 80}
              />
            </div>
            <div className="relative z-10">
              <h6 className="font-medium">{product.name}</h6>
              <p className="font-light">{product.description}</p>
            </div>
            <img
              className="relative z-10"
              src={`/assets/images/icon/${product.framework}`}
              alt="ionic icon"
              width={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
