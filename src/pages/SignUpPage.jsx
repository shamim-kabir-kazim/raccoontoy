import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "./SignUpPage.css";
import BottomNavBar from "../components/BottomNavBar";
import googleIcon from "../assets/other/google-icon.png";
import hideEyeIcon from "../assets/other/hide-eye.png";
import showEyeIcon from "../assets/other/show-eye.png";

export default function SignUpPage({
  onSubmit,
  onLogin,
  onGoogleSignIn,
}) {
  const navigate = useNavigate(); // Add this hook
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "+880" // Pre-filled with +880
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Device detection for iOS optimizations
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(iOS);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Updated phone number validation for +880 format
    if (formData.phoneNumber && formData.phoneNumber !== "+880") {
      if (!/^\+880\d{10}$/.test(formData.phoneNumber.replace(/\s|-/g, ''))) {
        newErrors.phoneNumber = "Phone number must be in +880XXXXXXXXXX format";
      }
    }

    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the Terms of Service";
    }

    if (!agreedToPrivacy) {
      newErrors.privacy = "You must agree to the Privacy Policy";
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear specific field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handlePhoneNumberChange = (e) => {
    let value = e.target.value;
    
    // Ensure +880 is always at the beginning
    if (!value.startsWith("+880")) {
      value = "+880" + value.replace(/^\+?880?/, "");
    }
    
    // Remove any non-digit characters except + at the beginning
    value = "+880" + value.substring(4).replace(/\D/g, "");
    
    // Limit to 14 characters total (+880XXXXXXXXXX)
    if (value.length > 14) {
      value = value.substring(0, 14);
    }
    
    handleInputChange('phoneNumber', value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (submitting) return;
    
    try {
      setSubmitting(true);
      setErrors({});
      
      if (onSubmit) {
        await onSubmit({
          ...formData,
          agreedToTerms,
          agreedToPrivacy
        });
      } else {
        console.log("Sign up submitted:", { ...formData, agreedToTerms, agreedToPrivacy });
        alert("Sign up submitted (demo)");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setErrors({ submit: "Sign up failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  // Update this function to use navigate
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login"); // Navigate to login page
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
    <div className={`sup-SignUp ${isIOS ? 'ios-device' : ''}`}>
      <div className="sup-SignUpArea">
        {/* TOP PART: Sign Up Title, Form Fields */}
        <div className="top-part">
          <h1 className="sup-SignUpTitle">
            Sign Up
          </h1>
          <div className="sup-Frame626">
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="sup-InputDiv">
                <div className="sup-InputArea">
                  <input
                    type="text"
                    className="sup-form-input"
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                <div className="sup-InputLabel">Full Name</div>
                {errors.fullName && <div className="sup-error">{errors.fullName}</div>}
              </div>

              {/* Email */}
              <div className="sup-InputDiv">
                <div className="sup-InputArea">
                  <input
                    type="email"
                    className="sup-form-input"
                    placeholder="Enter Your Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="sup-InputLabel">Email</div>
                {errors.email && <div className="sup-error">{errors.email}</div>}
              </div>

              {/* Phone Number */}
              <div className="sup-InputDiv">
                <div className="sup-InputArea">
                  <input
                    type="tel"
                    className="sup-form-input"
                    placeholder="+880 1XXXXXXXXX (Optional)"
                    value={formData.phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <div className="sup-InputLabel">Phone Number</div>
                {errors.phoneNumber && <div className="sup-error">{errors.phoneNumber}</div>}
              </div>

              {/* Password */}
              <div className="sup-InputDiv">
                <div className="sup-InputArea">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="sup-form-input"
                    placeholder="Create Your Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                  <img
                    className="sup-PasswordToggleButton"
                    src={showPassword ? showEyeIcon : hideEyeIcon}
                    alt={showPassword ? "Hide password" : "Show password"}
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div className="sup-InputLabel">Password</div>
                {errors.password && <div className="sup-error">{errors.password}</div>}
              </div>

              {/* Terms and Privacy Checkboxes */}
              <div className="sup-CheckboxSection">
                <div className="sup-CheckboxDiv">
                  <input
                    type="checkbox"
                    id="terms"
                    className="sup-checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms" className="sup-CheckboxLabel">
                    I agree to the <span className="sup-link">Terms of Service</span>
                  </label>
                </div>
                {errors.terms && <div className="sup-error">{errors.terms}</div>}

                <div className="sup-CheckboxDiv">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="sup-checkbox"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    required
                  />
                  <label htmlFor="privacy" className="sup-CheckboxLabel">
                    I agree to the <span className="sup-link">Privacy Policy</span>
                  </label>
                </div>
                {errors.privacy && <div className="sup-error">{errors.privacy}</div>}
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM PART: Buttons and login text */}
        <div className="bottom-part">
          {errors.submit && <div className="sup-error sup-submit-error">{errors.submit}</div>}
          
          <button
            type="submit"
            className="sup-SignUpButton"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? "Creating Account..." : "Sign Up"}
          </button>
          
          <div className="sup-Or">or</div>
          
          <button
            type="button"
            className="sup-GoogleSigninButton"
            onClick={handleGoogleSignIn}
          >
            <img
              className="sup-GoogleIcon"
              src={googleIcon}
              alt="Google"
            />
            <div className="sup-GoogleText">
              Continue With Google
            </div>
          </button>
          
          <div className="sup-LoginText">
            <span className="sup-normal-text">Already have an account!</span>
            <span className="sup-login-link" onClick={handleLogin}> Login</span>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}