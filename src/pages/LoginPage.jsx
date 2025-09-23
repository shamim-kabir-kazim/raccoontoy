import React, { useState } from "react";
import "./LoginPage.css";

/**
 * LoginPage
 *
 * Props (all optional — pass your actual asset URLs):
 * - cloudLargeSrc: hero cloud image (behind the logo)
 * - cloudSmallSrc: small cloud image (used twice decoratively)
 * - logoSrc: brand logo shown inside the hero cloud
 * - catSrc: pixel cat image shown near the "Login" title
 * - hillsSrc: wavy hills image anchored at the bottom
 * - onSubmit: (email, password) => void | Promise<void>
 * - onForgotPassword: () => void
 * - onRegister: () => void
 */
export default function LoginPage({
  cloudLargeSrc = "https://via.placeholder.com/800x400.png?text=Cloud+Large",
  cloudSmallSrc = "https://via.placeholder.com/260x160.png?text=Cloud",
  logoSrc = "https://via.placeholder.com/600x200.png?text=Logo",
  catSrc = "https://via.placeholder.com/220x260.png?text=Cat",
  hillsSrc = "https://via.placeholder.com/1200x400.png?text=Hills",
  onSubmit,
  onForgotPassword,
  onRegister,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    try {
      setSubmitting(true);
      if (onSubmit) {
        await onSubmit(email, password);
      } else {
        // Demo fallback
        console.log("Login submitted:", { email, password });
        alert("Login submitted (demo)");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="LoginPage" data-layer="login-page">
      {/* Decorative bottom hills */}
      <img className="LoginPage-hills" src={hillsSrc} alt="" aria-hidden="true" />

      {/* Small clouds */}
      <img className="LoginPage-cloud LoginPage-cloud--left" src={cloudSmallSrc} alt="" aria-hidden="true" />
      <img className="LoginPage-cloud LoginPage-cloud--right" src={cloudSmallSrc} alt="" aria-hidden="true" />

      {/* Hero cloud with centered logo */}
      <div className="LoginPage-hero">
        <img className="LoginPage-heroCloud" src={cloudLargeSrc} alt="" aria-hidden="true" />
        <img className="LoginPage-heroLogo" src={logoSrc} alt="Raccoon Toy" />
      </div>

      {/* Title with cat */}
      <div className="LoginPage-titleRow">
        <h1 className="LoginPage-title">Login</h1>
        <img className="LoginPage-cat" src={catSrc} alt="" aria-hidden="true" />
      </div>

      {/* Form */}
      <form className="LoginPage-form" onSubmit={handleSubmit}>
        <label className="LoginPage-label" htmlFor="login-email">
          Email
        </label>
        <input
          id="login-email"
          className="LoginPage-input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="LoginPage-label" htmlFor="login-password">
          Password
        </label>
        <div className="LoginPage-passwordWrap">
          <input
            id="login-password"
            className="LoginPage-input LoginPage-input--password"
            type={showPw ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="LoginPage-togglePw"
            aria-label={showPw ? "Hide password" : "Show password"}
            onClick={() => setShowPw((v) => !v)}
          >
            {/* Inline eye icon to avoid extra assets */}
            {showPw ? (
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M2 3.27L3.28 2 22 20.72 20.73 22l-3.27-3.27c-1.18.45-2.45.7-3.76.7C6.5 19.43 2.73 15 1 12c.72-1.25 2.27-3.29 4.57-4.98L2 3.27Zm9.77 5.3 1.94 1.94c.18.39.29.83.29 1.29a3 3 0 0 1-3 3c-.46 0-.9-.11-1.29-.29l-1.94-1.94A3 3 0 0 1 12 9c.46 0 .9.11 1.29.29l-.52-.72ZM12 6.57c4.31 0 8.08 3.43 9.8 5.43-.44.64-1.15 1.55-2.1 2.45l-1.42-1.43c.81-.74 1.4-1.5 1.76-2.02C18.71 9.7 15.45 7.57 12 7.57c-1.03 0-2.03.17-2.96.47L7.52 6.52A11.4 11.4 0 0 1 12 6.57Z" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 5c5.05 0 9.27 3.11 11 7-1.73 3.89-5.95 7-11 7S2.73 15.89 1 12c1.73-3.89 5.95-7 11-7Zm0 2C8.55 7 5.29 9.12 3.56 12 5.29 14.88 8.55 17 12 17s6.71-2.12 8.44-5C18.71 9.12 15.45 7 12 7Zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          className="LoginPage-forgot"
          onClick={onForgotPassword || (() => alert("Forgot Password (demo)"))}
        >
          Forgot Password ?
        </button>

        <button className="LoginPage-btn LoginPage-btn--primary" type="submit" disabled={submitting}>
          {submitting ? "Loading..." : "Login"}
        </button>

        <div className="LoginPage-or">or</div>

        <button
          className="LoginPage-btn LoginPage-btn--secondary"
          type="button"
          onClick={onRegister || (() => alert("Go to Register (demo)"))}
        >
          Register
        </button>
      </form>
    </main>
  );
}