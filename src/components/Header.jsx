import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Logo from "../assets/habot-logo.jpg";
import DropdownButton from "./NavDropDown";

const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="flex items-center gap-1">
          <img
            src={Logo}
            alt="logo"
            className="w-14 h-14 md:w-[12rem] md:h-[2rem] max-[768px]:w-40 object-cover cursor-pointer"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7">
            <a
              href="/find-suppliers"
              className="text-gray-800 hover:text-blue-400 duration-500"
            >
              Find Suppliers
            </a>
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <DropdownButton />
          </li>
          <li className="md:ml-8 md:my-0 my-7">
            <button className="btn outline outline-2 outline-green-600 text-green-500 font-semibold px-4 py-3 rounded duration-500">
              Login/Sign Up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
