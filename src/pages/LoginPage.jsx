import React, { useState } from "react";
import "./LoginPage.css";

/**
 * LoginPage - Exact structure from Figma with mobile optimization
 *
 * Props:
 * - onSubmit: (email, password) => void | Promise<void>
 * - onForgotPassword: () => void
 * - onRegister: () => void
 * - cloudSmallSrc: URL for small cloud images
 * - logoSrc: URL for logo image
 * - catSrc: URL for cat image  
 * - hillsSrc: URL for bottom hills image
 * - shipSrc: URL for ship image
 */
export default function LoginPage({
  onSubmit,
  onForgotPassword,
  onRegister,
  cloudSmallSrc = "https://i.postimg.cc/MXk9QHh7/white-cloud_1.png",
  logoSrc = "https://i.postimg.cc/2SBv2Rgv/Frame-305-1-2-1-2.png",
  catSrc = "https://i.postimg.cc/Wzq9zgfp/Frame_621.png",
  hillsSrc = "https://i.postimg.cc/XJN29XQF/Airbrush-OBJECT-REMOVER-1758657315294.png",
  shipSrc = "https://i.postimg.cc/ZRjMQ6CV/ship-at-the-bottom.png",
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

  const handleRegister = () => {
    if (onRegister) {
      onRegister();
    } else {
      alert("Register clicked (demo)");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div data-layer="Login" className="Login">
      <div data-layer="login area" className="LoginArea">
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div data-layer="Frame 306" className="Frame306">
            <div data-layer="Frame 307" className="Frame307">
              <input
                type="email"
                className="form-input"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div data-layer="Email" className="Email">Email</div>
          </div>

          {/* Password Field */}
          <div data-layer="Frame 307" className="Frame307 password-container">
            <div data-layer="Frame 307" className="Frame307 password-input">
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img
                data-layer="hide-svgrepo-com 1"
                className="HideSvgrepoCom1"
                src="https://placehold.co/21x21"
                alt="Toggle password visibility"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div data-layer="Password" className="Password">Password</div>
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
            disabled={submitting || !email || !password}
          >
            <div data-layer="Login" className="Login">
              {submitting ? "Loading..." : "Login"}
            </div>
          </button>
        </form>

        {/* Or Text */}
        <div data-layer="or" className="Or">or</div>

        {/* Register Button */}
        <button
          type="button"
          data-layer="register button"
          className="RegisterButton"
          onClick={handleRegister}
        >
          <div data-layer="Register" className="Register">Register</div>
        </button>

        {/* Login Title and Cat */}
        <div data-layer="login title and cat" className="LoginTitleAndCat">
          <div data-layer="login title and cat 2" className="LoginTitleAndCat2">
            <div data-layer="emty div" className="EmtyDiv"></div>
            <div data-layer="login text" className="LoginText">Login</div>
            <img data-layer="cat image" className="CatImage" src={catSrc} alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Hill */}
      <img data-layer="bottom hill" className="BottomHill" src={hillsSrc} alt="" />

      {/* Cloud Section 2 */}
      <div data-layer="cloud section 2" className="CloudSection2">
        <img data-layer="white-cloud 1" className="WhiteCloud1" src={cloudSmallSrc} alt="" />
      </div>

      {/* Cloud Section 3 */}
      <div data-layer="cloud section 3" className="CloudSection3">
        <img data-layer="white-cloud 1" className="WhiteCloud1" src={cloudSmallSrc} alt="" />
      </div>

      {/* Logo and Main Cloud */}
      <div data-layer="log and main cloud" className="LogAndMainCloud">
        <div data-layer="background cloud inside logo" className="BackgroundCloudInsideLogo">
          <img data-layer="logo" className="Logo" src={logoSrc} alt="Logo" />
        </div>
      </div>

      {/* Ship at the Bottom */}
      <img data-layer="ship at the bottom" className="ShipAtTheBottom" src={shipSrc} alt="" />
    </div>
  );
}