import { useRef, useState } from "react";
import { BACKGROUND_IMG } from "../constants/constant";
import HoverButton from "../common/HoverButton";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import Alert from "../common/Alert";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { alertWithTimer } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validationErrors = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm
    );

    //If there are validation errors then show a pop-up on top right
    if (validationErrors) {
      alertWithTimer(validationErrors, setAlerts);
      return;
    }

    //Perform the sign-in using firebase
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          alertWithTimer(
            [{ type: "error", message: error.message }],
            setAlerts
          );
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          console.log(error);
          alertWithTimer(
            [{ type: "error", message: error.message }],
            setAlerts
          );
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          className="-z-10 block overflow-hidden brightness-50"
          src={BACKGROUND_IMG}
          alt="background-image"
        />
      </div>

      {/* Alerts at Top-Right with Animation */}
      <div className="top-4 right-4 z-50 flex flex-col space-y-2">
        {alerts.map((alert, index) => (
          <Alert key={index} type={alert.type} message={alert.message} />
        ))}
      </div>

      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{
          backgroundImage: "url(https://example.com/background-image.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-80 text-white rounded-lg p-14 w-[30%] absolute">
          <HoverButton name={isSignInForm ? "Sign In" : "Sign Up"} />

          <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white my-3"
              />
            )}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="p-3 rounded bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white my-3"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
              ref={password}
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
              {isSignInForm ? "Sign In" : "Sign Up"}
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
            {isSignInForm ? "New to Netflix?" : "Already a user?"}{" "}
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
