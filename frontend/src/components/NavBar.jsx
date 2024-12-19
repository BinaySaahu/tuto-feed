"use client"
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";
import MobileSearchModal from "./MobileSearchModal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const showSearchModal = ()=>{
    setShowModal(true);
  }
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full bg-[#2A2F5B] text-[#3A3A3C]">
      <ul className="navItems flex itmes-center justify-between w-full p-2">
        <li className="flex items-center gap-5">
          <div>
            <Image src={logo} alt="logo" />
          </div>
        </li>
        <li className="lg:flex hidden items-stretch w-full justify-center">
          <input
            placeholder="Search"
            className="w-1/2 p-2 rounded-l-full border border-l-gray-200/[20%] border-b-gray-200/[20%] border-t-gray-200/[20%] border-r-0 bg-transparent focus:border-0 text-white/[80%]"
          />
          <button className="bg-gray-200/[20%] p-4 rounded-r-full flex items-center">
            <IoSearchSharp color="white"/>
          </button>
        </li>
        <li className="flex items-center gap-5">
          <div>
            <RiVideoAddLine  size={20} color="white" className="cursor-pointer lg:block hidden"/>
          </div>
          <div>
            <RiAccountCircleLine size={20}  color="white" className="cursor-pointer lg:block hidden"/>
          </div>
          <div>
            <IoSearchSharp size={20}  color="white" className="cursor-pointer lg:hidden block" onClick={showSearchModal}/>
            {showModal && <MobileSearchModal setShowModal = {setShowModal}/>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
