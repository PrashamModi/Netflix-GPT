import { BACKGROUND_IMG } from "../constants/constant";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img
          className="-z-10 block overflow-hidden"
          src={BACKGROUND_IMG}
          alt="background-image"
          srcset=""
        />
      </div>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{
          backgroundImage: "url(https://example.com/background-image.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-80 text-white rounded-lg p-8 sm:w-96 w-11/12 absolute">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="p-3 rounded bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded border border-white bg-transparent  text-white  focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded">
              Sign In
            </button>
            <div className="flex justify-center items-center">
              <span className="text-gray-400">OR</span>
            </div>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded">
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
            New to Netflix?{" "}
            <a href="#" className="text-white font-semibold hover:underline">
              Sign up now.
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
      {/* <form className="bg-black text-white absolute top-32 left-[40%] py-12 px-16 flex flex-col justify-around items-center bg-opacity-80 w-[450px] h-3/4">
        <h1 className='font-bold text-2xl top-0'>Sign In</h1>
        <input type="email" className='p-3 bg-gray-900 m-2' placeholder='Email or mobile number'/>
        <input type="password"  className='p-2 m-2' placeholder='Password'/>
        <button>Sign In</button>
        <span>OR</span>
        <button>Use a sign-in code</button>
        <a href="">Forgot password?</a>
      </form> */}
    </div>
  );
};

export default Login;
