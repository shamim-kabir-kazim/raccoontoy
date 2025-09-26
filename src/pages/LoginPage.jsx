import React, { useState } from "react";
import "./LoginPage.css";
import BottomNavBar from "../components/BottomNavBar";

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
    <div className="log-Login">
      <div className="log-LoginArea">
        {/* TOP PART: Frame 625, Frame 626, Forgot Password */}
        <div className="top-part">
          <img 
            className="log-Frame62511" 
            src="https://i.postimg.cc/XNZwMs6C/Frame_625_(1).png" 
            alt="Header"
          />
          <div className="log-Frame626">
            <form onSubmit={handleSubmit}>
              <div className="log-LoginDiv">
                <div className="log-InputArea">
                  <input
                    type="email"
                    className="log-form-input"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="log-EmailText">Email</div>
              </div>
              <div className="log-LoginDiv">
                <div className="log-InputArea">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="log-form-input"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img
                    className="log-PasswordHideAndShowButton"
                    src="https://i.postimg.cc/2yPQJZSM/hide-svgrepo-com-1.png"
                    alt="Toggle password visibility"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div className="log-EmailText">Password</div>
              </div>
            </form>
          </div>
          <a
            href="#"
            className="log-ForgotPassword small-forgot-password"
            onClick={handleForgotPassword}
          >
            Forgot Password ?
          </a>
        </div>

        {/* BOTTOM PART: Buttons and other text */}
        <div className="bottom-part">
          <button
            type="submit"
            className="log-LoginButton"
            onClick={handleSubmit}
            disabled={submitting || !email || !password}
          >
            <div className="log-Login login-text-visible">
              {submitting ? "Loading..." : "Login"}
            </div>
          </button>
          <div className="log-Or">or</div>
          <button
            type="button"
            className="log-GoogleSigninButton"
            onClick={handleGoogleSignIn}
          >
            <img
              className="log-GoogleIcon"
              src="https://i.postimg.cc/0rRkhkRc/google-svgrepo-com.png"
              alt="Google"
            />
            <div className="log-GoogleText">
              Continue With Google
            </div>
          </button>
          <div className="log-SignUpText">
            <span className="log-normal-text">Dont Have an account !</span>
            <span className="log-signup-link" onClick={handleSignUp}> Sign Up</span>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}