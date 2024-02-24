import React from "react";

const ButtonToUp = ({ isWhite }) => {
  return (
    <div>
      {isWhite ? (
        <img
          className="w-[50px] m-auto py-10 md:w-[70px] md:pt-20 cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
          src="/assets/icons_assets/back_white.png"
          alt=""
        />
      ) : (
        <img
          className="w-[50px] m-auto py-10 md:w-[70px] md:pt-20 cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
          src="/assets/icons_assets/back_black.png"
          alt=""
        />
      )}
    </div>
  );
};

export default ButtonToUp;
