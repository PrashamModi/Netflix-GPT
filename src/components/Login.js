import { BACKGROUND_IMG } from "../constants/constant";
import HoverButton from "../utils/HoverButton";
import LogoutButton from "../utils/LogoutButton";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          className="-z-10 block overflow-hidden brightness-50"
          src={BACKGROUND_IMG}
          alt="background-image"
          srcSet=""
        />
      </div>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{
          backgroundImage: "url(https://example.com/background-image.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-80 text-white rounded-lg p-14 w-[30%] absolute">
          {isSignInForm ? (
            <HoverButton name="Sign In" />
          ) : (
            <HoverButton name="Sign Up" />
          )}

          <form className="flex flex-col space-y-4">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white my-3"
              />
            )}
            <input
              type="email"
              placeholder="Email or mobile number"
              className="p-3 rounded bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white my-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded border border-white bg-transparent  text-white  focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex justify-center items-center">
              <span className="text-gray-400">OR</span>
            </div>
            <button className="bg-[rgba(128,128,128,0.4)] hover:opacity-90 text-white font-bold py-2 rounded">
              Use a sign-in code
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-400">Remember me</span>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            {isSignInForm ? "New to Netflix?" : "Alreadt a user?"}{" "}
            <a
              href="#"
              className="text-white font-semibold hover:underline"
              onClick={toggleIsSignInForm}
            >
              {isSignInForm ? "Sign Up" : "Sign In"} now.
            </a>
          </div>
          <div className="mt-4 text-center text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
