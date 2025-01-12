import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaSadCry, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import logo from '../assets/logo.png'
const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState<string | null>(null); // Popup message state
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null); // Success or error type
  const [showPopup, setShowPopup] = useState(false); // Controls popup visibility
  const navigate = useNavigate();

  // Hardcoded credentials
  const validEmail = "test@mail.com";
  const validPassword = "123";
  const userName = "Briley Henderson";
  const userImage = logo ; 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
    setPopupMessage(null); // Clear popups when switching forms
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setPopupMessage(`Welcome Back, ${userName}!`);
      setPopupType("success");
      setShowPopup(true); // Show success popup
      setTimeout(() => {
        setShowPopup(false); // Hide popup
        navigate("/pin"); // Navigate to the dashboard
      }, 2000); // Wait 2 seconds before navigating
    } else {
      setPopupMessage("Incorrect email or password.");
      setPopupType("error");
      setShowPopup(true); // Show error popup
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50 relative">
      <div className="bg-white  shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h1>

        <form onSubmit={isLogin ? handleLogin : undefined}>
          {/* Name Field for Sign-Up */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="flex items-center bg-orange-50 border border-orange-200 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400 "
              >
                <div className="text-orange-400 mr-2 p-3">
                <FaUser /> </div>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="flex-grow bg-transparent outline-none text-lg"
                />
              </label>
            </div>
          )}

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="flex items-center bg-orange-50 border border-orange-200 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400 "
            >
              <div className="text-orange-400 mr-2 p-3">
               <FaEnvelope  /> </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow bg-transparent outline-none text-lg"
              />
            </label>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="flex items-center bg-orange-50 border border-orange-200 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400 "
            >
                <div className="text-orange-400 mr-2 p-3">
                <FaLock  /> </div>

              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="flex-grow bg-transparent outline-none text-lg"
              />
              <span
                className="cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
          </div>

          {/* Confirm Password for Sign-Up */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="flex items-center bg-orange-50 border border-orange-200 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-orange-400"
              >
                <div className="text-orange-400 mr-2 p-3">
                <FaLock  /> </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="flex-grow bg-transparent outline-none text-lg"
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </label>
            </div>
          )}

          {/* Remember Me and Forgot Password */}
          {isLogin && (
            <div className="flex justify-between items-center text-sm mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 focus:ring-orange-400"
                />
                Remember me
              </label>
              <a href="#" className="text-orange-500">
                Lost your password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold rounded-md py-2 hover:bg-gray-800 transition text-lg mt-2"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Form Toggle */}
        <div className="text-center mt-4 ">
          <p className="text-sm ">
            {isLogin ? "No account?" : "Already have an account?"}{" "}
            <span
              onClick={handleFormToggle}
              className="text-orange-500 font-semibold cursor-pointer "
            >
              {isLogin ? "Register now" : "Sign in"}
            </span>
          </p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-md shadow-lg text-center flex flex-col items-center mb-4">
            {popupType === "success" ? (
              <>
                <img
                  src={userImage}
                  alt="User Profile"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-lg font-semibold">{popupMessage}</p>
              </>
            ) : (
              <>
              <div className="text-orange-400 text-6xl mb-8 p-4 text-center">
                <FaSadCry />  </div>
                <p className="text-2xl font-semibold text-black">
                  {popupMessage}
                </p>
             
                
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
