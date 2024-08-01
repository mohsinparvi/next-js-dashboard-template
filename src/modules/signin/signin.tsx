import SigninForm from "@/components/signin/signin-form";
import React from "react";

const Signin = () => {
  return (
    <section className=" flex items-center justify-center h-screen  bg-dashboard-primary ">
      <div className="bg-white rounded-lg p-4 md:p-6 lg:p-10 space-y-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4  mx-5 lg:mx-0">
        <p className="text-4xl font-semibold text-center">Yestofy</p>
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <SigninForm />
      </div>
    </section>
  );
};

export default Signin;
