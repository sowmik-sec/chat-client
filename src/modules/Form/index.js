import React from "react";
import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white w-[550px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-bold">Welcome</div>
      <div className="text-xl font-light mb-10">Sign up now to get started</div>
      <Input
        label="Full name"
        name="name"
        placeholder="Enter your full name"
        className="mb-4"
      />
      <Input
        label="Email"
        name="email"
        placeholder="Enter Email"
        type="email"
        className="mb-4"
      />
      <Input
        label="Password"
        name="password"
        placeholder="Enter Password"
        type="password"
        className="mb-4"
      />
    </div>
  );
};

export default Form;
