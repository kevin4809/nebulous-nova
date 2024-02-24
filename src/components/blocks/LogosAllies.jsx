import React from "react";
// import info from "./InfoLogosAllies.json";
import AnimScroll from "../../hooks/AnimScroll";
const LogosAllies = ({ infoLogosAliies }) => {
  return (
    <div className="bg-black">
      <div className="container_all  ">
        <h1 className="text-grey_white text-center pt-10 md:pt-20">Nuestros aliados</h1>
        <AnimScroll anim="animate__fadeInRight">
          <div className="md:flex justify-center items-center ">
            {infoLogosAliies?.map((item, i) => (
              <div
                className=" md:-top-9 w-[40%] m-auto flex justify-center items-center md:w-[15%] md:mt-10 "
                key={i}
              >
                <img
                  className="w-full object-contain hover:scale-110 transition-all duration-200 "
                  src={item.url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </AnimScroll>

    
      </div>
    </div>
  );
};

export default LogosAllies;
