import SidebarItem from "@/components/dashboard/sidebar/sidebar-item/sidebar-item";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#1B181E] text-white h-screen w-1/6 xl:w-[14%] space-y-4  hidden lg:block">
      <div className="flex items-center justify-between border-b-2 py-4 border-gray-400 px-4 ">
        <p className="text-base font-medium capitalize">Logo</p>
        <svg
          className="w-6 h-6 bg-gray-800 p-1 rounded text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
          />
        </svg>
      </div>
      <div>
        <div className="py-5 px-4  overflow-y-scroll no-scrollbar">
          <SidebarItem />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
