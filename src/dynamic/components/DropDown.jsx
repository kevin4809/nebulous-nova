import React, { useState } from "react";
import SvgDropdown from "../../svg/SvgDropdown";

const DropDown = ({ parent_name, children_name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
        <p className="hover:text-gold">{parent_name}</p>
        <div className="w-[20px]">
          <SvgDropdown />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[30px] p-4 bg-grey w-[400px] right-1/2 translate-x-1/2 border-2 border-white">
          {Array.isArray(children_name) ? (
            children_name.map((child, index) => (
              <p className="my-[5px] cursor-pointer text-[16px] hover:scale-105 transition-transform duration-500" key={index}>
                {child}
              </p>
            ))
          ) : (
            <div className="">{children_name}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
