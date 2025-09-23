import React, { useState } from "react";
import "./LoginPage.css";

/**
 * LoginPage - Updated to match new Figma design with glassmorphism effect
 *
 * Props:
 * - onSubmit: (email, password) => void | Promise<void>
 * - onForgotPassword: () => void
 * - onSignUp: () => void
 * - onGoogleSignIn: () => void
 */
export default function LoginPage({
  onSubmit,
  onForgotPassword,
  onSignUp,
  onGoogleSignIn,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting || !email || !password) return;
    
    try {
      setSubmitting(true);
      if (onSubmit) {
        await onSubmit(email, password);
      } else {
        console.log("Login submitted:", { email, password });
        alert("Login submitted (demo)");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (onForgotPassword) {
      onForgotPassword();
    } else {
      alert("Forgot Password clicked (demo)");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (onSignUp) {
      onSignUp();
    } else {
      alert("Sign Up clicked (demo)");
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    if (onGoogleSignIn) {
      onGoogleSignIn();
    } else {
      alert("Google Sign In clicked (demo)");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div data-layer="Login" className="Login">
      {/* Login Area with Glassmorphism Effect */}
      <div data-layer="login area" className="LoginArea">
        {/* Header Frame */}
        <img 
          data-layer="Frame 625 (1) 1" 
          className="Frame62511" 
          src="https://i.postimg.cc/XNZwMs6C/Frame_625_(1).png" 
          alt="Header"
        />
        
        {/* Input Fields Container */}
        <div data-layer="Frame 626" className="Frame626">
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div data-layer="login-div" className="LoginDiv">
              <div data-layer="input area" className="InputArea">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div data-layer="email text" className="EmailText">Email</div>
            </div>

            {/* Password Field */}
            <div data-layer="login-div" className="LoginDiv">
              <div data-layer="input area" className="InputArea">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  data-layer="hide-svgrepo-com 2"
                  className="PasswordHideAndShowButton"
                  src="https://i.postimg.cc/2yPQJZSM/hide-svgrepo-com-1.png"
                  alt="Toggle password visibility"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div data-layer="email text" className="EmailText">Password</div>
            </div>
          </form>
        </div>

        {/* Forgot Password Link */}
        <a
          href="#"
          data-layer="Forgot Password ?"
          className="ForgotPassword"
          onClick={handleForgotPassword}
        >
          Forgot Password ?
        </a>

        {/* Login Button */}
        <button
          type="submit"
          data-layer="login button"
          className="LoginButton"
          onClick={handleSubmit}
          disabled={submitting || !email || !password}
        >
          <div data-layer="Login" className="Login">
            {submitting ? "Loading..." : "Login"}
          </div>
        </button>

        {/* Or Text */}
        <div data-layer="or" className="Or">or</div>

        {/* Google Sign-in Button */}
        <button
          type="button"
          data-layer="login button"
          className="GoogleSigninButton"
          onClick={handleGoogleSignIn}
        >
          <img
            data-layer="google-svgrepo-com 1"
            className="GoogleIcon"
            src="https://i.postimg.cc/0rRkhkRc/google-svgrepo-com.png"
            alt="Google"
          />
          <div data-layer="Continue With Google" className="GoogleText">
            Continue With Google
          </div>
        </button>

        {/* Sign Up Text */}
        <div data-layer="Dont Have an account ! Sign Up" className="SignUpText">
          <span className="normal-text">Dont Have an account !</span>
          <span className="signup-link" onClick={handleSignUp}> Sign Up</span>
        </div>
      </div>
    </div>
  );
}