import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  return (
    <div className="bg-white w-[550px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-bold">Welcome {isSignInPage && "Back"}</div>
      <div className="text-xl font-light mb-10">
        {isSignInPage ? "Sign in to get explored" : "Sign up  to get started"}{" "}
      </div>
      {!isSignInPage && (
        <Input
          label="Full name"
          name="name"
          placeholder="Enter your full name"
          className="mb-4"
          value={data.fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
      )}
      <Input
        label="Email"
        name="email"
        placeholder="Enter Email"
        type="email"
        className="mb-4"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
        label="Password"
        name="password"
        placeholder="Enter Password"
        type="password"
        className="mb-8"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <Button
        label={isSignInPage ? "Sign In" : "Sign Up"}
        className="w-1/2 mb-2"
      />
      <div>
        {isSignInPage ? "Didn't have an account?" : "Already have an account?"}

        <span className="text-primary cursor-pointer hover:underline">
          {isSignInPage ? " Sign Up" : " Sign In"}
        </span>
      </div>
    </div>
  );
};

export default Form;
