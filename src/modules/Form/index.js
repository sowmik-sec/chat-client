import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log("User added to database");
        }
      });
  };
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className="bg-white w-[550px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-bold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-xl font-light mb-10">
          {isSignInPage ? "Sign in to get explored" : "Sign up  to get started"}{" "}
        </div>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          {!isSignInPage && (
            <Input
              label="Full name"
              name="name"
              placeholder="Enter your full name"
              className="mb-4 w-[75%]"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email"
            name="email"
            placeholder="Enter Email"
            type="email"
            className="mb-4 w-[75%]"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter Password"
            type="password"
            className="mb-8 w-[75%]"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign In" : "Sign Up"}
            className="w-[75%] mb-2"
            type="submit"
          />
        </form>
        <div>
          {isSignInPage
            ? "Didn't have an account?"
            : "Already have an account?"}

          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() =>
              navigate(`/users/${isSignInPage ? "sign_up" : "sign_in"}`)
            }
          >
            {isSignInPage ? " Sign Up" : " Sign In"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
