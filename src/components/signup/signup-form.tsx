import InputLabel from "@/components/utils/input-label";
import Input from "@/components/utils/input";

import { Button } from "@/material-tailwind";
import React from "react";
import Link from "next/link";

const SignupForm = () => {
  return (
    <form className="space-y-4 ">
      <div className="space-y-2">
        <InputLabel label="Name" />
        <Input type="text" placeholder="Enter your name" />
      </div>
      <div className="space-y-2">
        <InputLabel label="Email Address" />
        <Input type="email" placeholder="Email Address" />
      </div>
      <div className="space-y-2">
        <InputLabel label="Password" />
        <Input type="text" placeholder="••••••••" />
      </div>
      <Button
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        color="blue"
        size="md"
        ripple
        className="w-full rounded text-sm capitalize font-medium"
      >
        Sign Up
      </Button>
      <p className="text-base font-medium  text-dashboard-body">
        Already a member?{" "}
        <Link href={"/"} className="text-dashboard-primary underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
