import React, { useState } from "react";
import "./LoginPage.css";

/**
 * LoginPage - Updated structure from Figma with corrected positioning
 *
 * Props:
 * - onSubmit: (email, password) => void | Promise<void>
 * - onForgotPassword: () => void
 * - onRegister: () => void
 * - cloudSmallSrc: URL for small cloud images
 * - cloudMainSrc: URL for main cloud background image
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
  cloudMainSrc = "https://i.postimg.cc/MXk9QHh7/white-cloud_1.png",
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

  const handleRegister = (e) => {
    e.preventDefault();
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
      {/* Logo and Main Cloud - NO DROP SHADOW */}
      <div data-layer="log and main cloud" className="LogAndMainCloud">
        <div 
          data-layer="background cloud inside logo" 
          className="BackgroundCloudInsideLogo"
          style={{
            backgroundImage: `url(${cloudMainSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <img data-layer="logo" className="Logo" src={logoSrc} alt="Logo" />
        </div>
      </div>

      {/* Cloud Section 2 */}
      <div data-layer="cloud section 2" className="CloudSection2">
        <img data-layer="white-cloud 1" className="WhiteCloud1" src={cloudSmallSrc} alt="" />
      </div>

      {/* Cloud Section 3 */}
      <div data-layer="cloud section 3" className="CloudSection3">
        <img data-layer="white-cloud 1" className="WhiteCloud1" src={cloudSmallSrc} alt="" />
      </div>

      {/* Updated Login Area with new dimensions and positioning */}
      <div data-layer="login area" className="LoginArea w-96 h-96 relative overflow-hidden">
        
        {/* Login Title and Cat - Repositioned */}
        <div data-layer="login title and cat" className="LoginTitleAndCat w-96 h-24 px-20 py-[3px] left-0 top-[47px] absolute inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div data-layer="login title and cat 2" className="LoginTitleAndCat2 self-stretch h-20 inline-flex justify-center items-start overflow-hidden">
            <div data-layer="emty div" className="EmtyDiv w-16 h-20 origin-top-left rotate-180"></div>
            <div data-layer="login text" className="LoginText justify-start text-white text-5xl font-normal font-['Jersey_10']">Login</div>
            <img data-layer="cat image" className="CatImage w-16 h-20" src={catSrc} alt="" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field - Updated positioning and class names */}
          <div data-layer="login-div" className="LoginDiv w-80 h-20 left-[38px] top-[109px] absolute overflow-hidden">
            <div data-layer="input area" className="InputArea w-80 h-10 left-[5px] top-[29px] absolute bg-white rounded-[5px] outline outline-2 outline-offset-[-2px] outline-black overflow-hidden">
              <input
                type="email"
                className="form-input"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div data-layer="email text" className="EmailText left-[5px] top-[10px] absolute justify-start text-black text-xs font-medium font-['Inter']">Email</div>
          </div>

          {/* Password Field - Updated positioning and class names */}
          <div data-layer="password-div" className="PasswordDiv w-80 h-20 left-[38px] top-[197px] absolute overflow-hidden">
            <div data-layer="password input area" className="PasswordInputArea w-80 h-10 left-[5px] top-[29px] absolute bg-white rounded-[5px] outline outline-2 outline-offset-[-2px] outline-black overflow-hidden">
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img
                data-layer="password hide and show button"
                className="PasswordHideAndShowButton w-5 h-5 left-[285px] top-[10px] absolute cursor-pointer"
                src="https://placehold.co/21x21"
                alt="Toggle password visibility"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div data-layer="passwordtext" className="Passwordtext left-[5px] top-[10px] absolute justify-start text-black text-xs font-medium font-['Inter']">Password</div>
          </div>

          {/* Forgot Password Link - Updated positioning */}
          <a
            href="#"
            data-layer="Forgot Password ?"
            className="ForgotPassword w-80 left-[43px] top-[285px] absolute justify-start text-black text-[10px] font-medium font-['Inter'] cursor-pointer hover:underline"
            onClick={handleForgotPassword}
          >
            Forgot Password ?
          </a>

          {/* Login Button - ENHANCED VISIBILITY */}
          <button
            type="submit"
            data-layer="login button"
            className="LoginButton w-80 h-10 left-[42.50px] top-[307px] absolute bg-slate-500 rounded-[5px] outline outline-2 outline-offset-[-2px] outline-white overflow-hidden cursor-pointer border-none hover:bg-slate-600 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={submitting || !email || !password}
          >
            <div data-layer="Login" className="Login left-[138px] top-[8px] absolute justify-start text-white text-2xl font-normal font-['Jersey_10']">
              {submitting ? "Loading..." : "Login"}
            </div>
          </button>
        </form>

        {/* Or Text - Updated positioning with text-center */}
        <div data-layer="or" className="Or w-96 left-0 top-[359px] absolute text-center justify-start text-black text-xl font-medium font-['Inter']">or</div>

        {/* Register Button - ENHANCED VISIBILITY */}
        <button
          type="button"
          data-layer="register button"
          className="RegisterButton w-80 h-10 left-[42.50px] top-[393px] absolute bg-stone-400 rounded-[5px] outline outline-2 outline-offset-[-2px] outline-white overflow-hidden cursor-pointer border-none hover:bg-stone-500"
          onClick={handleRegister}
        >
          <div data-layer="Register" className="Register left-[124px] top-[8px] absolute justify-start text-white text-2xl font-normal font-['Jersey_10']">Register</div>
        </button>

      </div>

      {/* Bottom Hill */}
      <img data-layer="bottom hill" className="BottomHill" src={hillsSrc} alt="" />

      {/* Ship at the Bottom */}
      <img data-layer="ship at the bottom" className="ShipAtTheBottom" src={shipSrc} alt="" />
    </div>
  );
}