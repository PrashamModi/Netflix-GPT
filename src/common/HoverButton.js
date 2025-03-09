import React from "react";

const HoverButton = (props) => {
  return (
    <button className="relative text-transparent uppercase font-bold text-2xl tracking-wider p-0 border-none cursor-pointer bg-transparent overflow-hidden group">
      <span className="absolute inset-0 box-border text-red-600 w-0 group-hover:w-full transition-all duration-500 border-r-2 border-black overflow-hidden whitespace-nowrap" aria-hidden="true">
        {props.name}
      </span>
      <span className="relative z-10 stroke-current text-white group-hover:text-red-600 transition-all duration-500 whitespace-nowrap">
        {props.name}
      </span>
    </button>
  );
};

export default HoverButton;
