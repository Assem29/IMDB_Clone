import React from "react";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { FiHome } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItems title="HOME" address="/" Icon={FiHome} />
        <MenuItems title="ABOUT" address="/about" Icon={AiOutlineInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
