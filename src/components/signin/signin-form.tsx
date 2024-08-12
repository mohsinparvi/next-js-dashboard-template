"use client";
import InputLabel from "@/components/utils/input-label";
import Input from "@/components/utils/input";

import { Button } from "@/material-tailwind";
import React, { useState } from "react";
import Link from "next/link";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "mohsin@gmail.com",
    password: "mohsin$123@*",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    //TODO: Implement sign-in logic here
    // Redirect to dashboard upon successful login\
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/dashboard";
    }, 3000);
  };
  return (
    <form className="space-y-4 ">
      <div className="space-y-2">
        <InputLabel label="Email Address" />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
        />
      </div>
      <div className="space-y-2">
        <InputLabel label="Password" />
        <Input type="text" placeholder="••••••••" value={formData.password} />
      </div>
      <Button
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
        color="blue"
        size="md"
        ripple
        className="w-full rounded text-sm capitalize font-medium"
        loading={isLoading}
        onClick={handleSignIn}
      >
        Sign In
      </Button>
      <p className="text-base font-medium  text-dashboard-body">
        Don’t have an account yet?{" "}
        <Link href={"/signup"} className="text-dashboard-primary underline">
          Sign up
        </Link>{" "}
      </p>
    </form>
  );
};

export default SigninForm;
