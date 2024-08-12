import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileSidebar from "../sidebar/mobile-sidebar";
import ProfileSetting from "@/components/dashboard/header/user-profile";

const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none border-b-2">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <MobileSidebar />
        </div>

        <div className="hidden sm:flex justify-between items-center w-full">
          <form action="#" method="POST">
            <div className="relative border rounded">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent  text-sm  pl-9 pr-4 focus:outline-none xl:w-125"
              />
            </div>
          </form>
          <ProfileSetting />
        </div>
      </div>
    </header>
  );
};

export default Header;
