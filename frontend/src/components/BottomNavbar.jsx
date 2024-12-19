import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiAccountCircleLine, RiVideoAddLine } from "react-icons/ri";

const BottomNavbar = () => {
  return (
    <div className="p-5 bg-black/[20%] lg:hidden flex items-center justify-between fixed bottom-0 left-0 w-full">
      <ul className="flex w-full items-center justify-between">
        <li>
          <AiFillHome size={20} color="white" className="cursor-pointer"/>
        </li>
        <li>
          <RiVideoAddLine size={20} color="white" className="cursor-pointer" />
        </li>
        <li>
          <RiAccountCircleLine
            size={20}
            color="white"
            className="cursor-pointer"
          />
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
