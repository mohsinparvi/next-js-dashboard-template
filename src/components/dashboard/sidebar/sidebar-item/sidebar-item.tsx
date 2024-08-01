"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SidebarLinkGroup from "../sidebar-link-group/sidebar-link-group";
import { HomeIcon, TruckIcon, UserGroupIcon } from "@heroicons/react/16/solid";
// import {
//   ChartBarIcon,
//   CheckBadgeIcon,
//   ClipboardDocumentListIcon,
//   Cog6ToothIcon,
//   HomeIcon,
//   SparklesIcon,
//   Squares2X2Icon,
//   TruckIcon,
//   UsersIcon,
// } from "@heroicons/react/16/solid";
const SidebarItem = () => {
  const pathname = usePathname();
  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  return (
    <aside className="space-y-4">
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="">
          <ul className="mb-6 flex flex-col gap-1.5">
            <li>
              <Link
                href="/dashboard"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                  pathname === "/dashboard" &&
                  "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                }`}
              >
                <HomeIcon className="w-5 h-5" />
                Dashboard
              </Link>
            </li>
            <SidebarLinkGroup
              activeCondition={
                pathname === "/dashboard/users" || pathname.includes("users")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                        (pathname === "/dashboard/users" ||
                          pathname === "/dashboard/admin-users" ||
                          pathname.includes("users")) &&
                        "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <UserGroupIcon className="w-5 h-5" />
                      Users
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && "rotate-180"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "/dashboard/users" && "text-white"
                            }`}
                          >
                            All users
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className={`group relative flex items-center gap-2.5 rounded-md px-4 text-sm font-medium text-dashboard-bodydark2 duration-300 ease-in-out hover:text-white ${
                              pathname === "dashboar/admin-users" &&
                              "text-white"
                            }`}
                          >
                            Admin
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            <li>
              <Link
                href="dashboard/setting"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 text-sm font-medium text-dashboard-bodydark1 duration-300 ease-in-out hover:bg-dashboard-graydark dark:hover:bg-dashboard-meta-4 ${
                  pathname === "/dashboard/setting" &&
                  "bg-dashboard-graydark dark:bg-dashboard-meta-4"
                }`}
              >
                <TruckIcon className="w-5 h-5" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarItem;
