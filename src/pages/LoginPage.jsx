import React, { useState, useEffect, useRef } from "react";
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
  
  // Refs for positioning elements
  const headerRef = useRef(null);
  const inputAreaRef = useRef(null);
  const topPartRef = useRef(null);

  // Improved function to position header to touch input area
  const positionHeaderToInput = () => {
    if (headerRef.current && inputAreaRef.current && topPartRef.current) {
      const header = headerRef.current;
      const inputArea = inputAreaRef.current;
      const topPart = topPartRef.current;
      
      try {
        // Reset transform first
        header.style.transform = 'none';
        header.style.marginBottom = '0px';
        
        // Force layout recalculation
        header.offsetHeight;
        inputArea.offsetHeight;
        
        // Get parent container rect for relative positioning
        const topPartRect = topPart.getBoundingClientRect();
        const headerRect = header.getBoundingClientRect();
        const inputRect = inputArea.getBoundingClientRect();
        
        // Calculate relative positions within the container
        const headerBottom = headerRect.bottom - topPartRect.top;
        const inputTop = inputRect.top - topPartRect.top;
        
        // Calculate gap between header bottom and input top
        const gap = inputTop - headerBottom;
        
        // Apply transform to close the gap (subtract 2px for slight overlap)
        if (gap > 2) {
          header.style.transform = `translateY(${gap - 2}px)`;
        } else if (gap < -2) {
          // If overlapping too much, push apart slightly
          header.style.transform = `translateY(${gap + 2}px)`;
        }
        
        console.log(`Gap: ${gap}px, Applied transform: translateY(${gap > 2 ? gap - 2 : gap < -2 ? gap + 2 : 0}px)`);
      } catch (error) {
        console.error('Error positioning header:', error);
      }
    }
  };

  // Enhanced positioning with multiple triggers
  useEffect(() => {
    // Multiple positioning attempts for reliability
    const runPositioning = () => {
      // Run immediately
      positionHeaderToInput();
      
      // Run again after short delay for layout completion
      setTimeout(positionHeaderToInput, 50);
      setTimeout(positionHeaderToInput, 150);
      setTimeout(positionHeaderToInput, 300);
    };
    
    // Initial positioning
    runPositioning();
    
    // Create ResizeObserver for more accurate layout change detection
    let resizeObserver;
    if (window.ResizeObserver && headerRef.current && inputAreaRef.current) {
      resizeObserver = new ResizeObserver(() => {
        setTimeout(positionHeaderToInput, 10);
      });
      resizeObserver.observe(headerRef.current);
      resizeObserver.observe(inputAreaRef.current);
    }
    
    // Fallback resize listener
    const handleResize = () => {
      setTimeout(positionHeaderToInput, 10);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(positionHeaderToInput, 100);
    });
    
    // Font loading detection
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setTimeout(positionHeaderToInput, 50);
      });
    }
    
    // Image load detection
    const headerImg = headerRef.current;
    if (headerImg && headerImg.complete) {
      setTimeout(positionHeaderToInput, 10);
    } else if (headerImg) {
      headerImg.onload = () => {
        setTimeout(positionHeaderToInput, 10);
      };
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Re-position when content changes
  useEffect(() => {
    setTimeout(positionHeaderToInput, 10);
  }, [email, password, showPassword]);

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
        <div ref={topPartRef} className="top-part">
          <img 
            ref={headerRef}
            className="log-Frame62511" 
            src="https://i.postimg.cc/XNZwMs6C/Frame_625_(1).png" 
            alt="Header"
            onLoad={() => setTimeout(positionHeaderToInput, 10)}
          />
          <div className="log-Frame626">
            <form onSubmit={handleSubmit}>
              <div className="log-LoginDiv">
                <div 
                  ref={inputAreaRef}
                  className="log-InputArea"
                >
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
            className="log-ForgotPassword"
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
            {submitting ? "Loading..." : "Login"}
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