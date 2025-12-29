import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLogin } from "../../redux/authSlice";
import { openCreateAccount } from "../../redux/createAccountSlice";
import "./loginPopup.css";

export default function LoginPopup() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isLoginOpen);

  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSendOtp = () => {
    if (!contact) {
      setError("Mobile / Email required");
      return;
    }
    setError("");
    setStep(2);
    console.log("OTP sent: 1234");
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      dispatch(closeLogin());
      dispatch(openCreateAccount()); // ✅ IMPORTANT
      setStep(1);
      setOtp("");
      setContact("");
      setError("");
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <span
          className="close"
          onClick={() => {
            dispatch(closeLogin());
            setStep(1);
            setOtp("");
            setContact("");
            setError("");
          }}
        >
          ✖
        </span>

        <h2>Login</h2>

        {step === 1 && (
          <>
            <input
              placeholder="Mobile / Email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button className="popup-login-btn" onClick={handleSendOtp}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button className="popup-login-btn" onClick={handleVerifyOtp}>
              Verify OTP
            </button>

            <p
              className="resend"
              onClick={() => {
                setStep(1);
                setOtp("");
                setError("");
              }}
            >
              Change Mobile / Email
            </p>
          </>
        )}
      </div>
    </div>
  );
}
