"use client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Button, Drawer, IconButton, Typography } from "@/material-tailwind";
import React from "react";
import SidebarItem from "@/components/dashboard/sidebar/sidebar-item/sidebar-item";

const MobileSidebar = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <React.Fragment>
      <Button
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        variant="text"
        onClick={openDrawer}
      >
        <Bars3Icon className="w-6 h-6 " />
      </Button>
      <Drawer
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-[#1B181E]"
        overlayProps={{
          className: " min-h-screen min-w-screen ",
        }}
      >
        <div className="mb-6 flex items-center justify-end">
          <IconButton
            placeholder={""}
            onPointerEnterCapture={""}
            onPointerLeaveCapture={""}
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <SidebarItem />
      </Drawer>
    </React.Fragment>
  );
};

export default MobileSidebar;
