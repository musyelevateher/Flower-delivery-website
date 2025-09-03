import "./Signin.css";
import { useState } from "react";
import GoogleLogo from "../assets/Google-icon.svg";
import AppleLogo from "../assets/Apple.svg";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const navigate = useNavigate();

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleSignIn = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        showPopup("Sign In successful", "success");
        const redirectPath = localStorage.getItem("redirectAfterLogin");
        setTimeout(() => {
          if (redirectPath) {
            localStorage.removeItem("redirectAfterLogin");
            navigate(redirectPath);
          } else {
            navigate("/home");
          }
        }, 3000);
      } else {
        showPopup(data.error || "Sign In failed", "error");
      }
    } catch (err) {
      console.error(err);
      showPopup("An error occurred", "error");
    }
  };

  return (
    <div className="signin-container">
      {popup.show && <div className={`popup-message ${popup.type}`}>{popup.message}</div>}

      <div className="signin-box">
        <h2 className="signin-title">
          Greetings!Welcome to luxury gift shop.
        </h2>
        <h6>Use your email to sign up or log in</h6>

        <div className="signin-form">
      <input
        type="email"
        className="signin-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="signin-input"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    {/* Continue button */}
    <button className="signin-continue" onClick={handleSignIn}>
      CONTINUE
    </button>

        <h6>Instantly login or sign up via Google</h6>

        <div className="social-buttons">
          <button className="social-button">
            <img src={GoogleLogo} alt="Google" className="icon" />
            CONTINUE WITH GOOGLE
          </button>

          <button className="social-button">
            <img src={AppleLogo} alt="Apple" className="icon" />
            CONTINUE WITH APPLE
          </button>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-a">
            Sign Up
          </Link>
        </p>
<div className="privacy-terms-section">
        <div className="privacy-terms-links">
          <a href="/privacy">Privacy Policy</a>
          <br />
          <div className="divider"></div>
          <a href="/terms">Terms and Conditions</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Signin;
