import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateAccount } from "../../redux/createAccountSlice";
import "./createAccount.css";

export default function CreateAccount() {
  const dispatch = useDispatch();
 
  const isOpen = useSelector(
  (state) => state.createAccount?.isOpen
);


  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="create-account-overlay">
      <div className="create-account-box">
        <span className="close" onClick={() => dispatch(closeCreateAccount())}>
          ✖
        </span>

        <h2>Create account</h2>
        <p className="subtitle">
          Manage all your insurance policies in one place
        </p>

        <div className="form-row">
          <input placeholder="First name" />
          <input placeholder="Last name" />
        </div>

        <div className="form-row">
          <input placeholder="DD / MM / YYYY" />
          <input placeholder="Mobile no." maxLength="10" />
        </div>

        <div className="form-group">
          <input placeholder="Email" />
        </div>

        <div className="gender-group">
          <div className="gender-label">Gender</div>
          <div className="gender-options">
            <label>
              <input
               type="radio"
                name="gender"
              checked={gender === "male"}
               onChange={() => setGender("male")}
               />

              Male
            </label>
            <label>
              <input
                type="radio"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                checked={gender === "other"}
                onChange={() => setGender("other")}
              />
              Other
            </label>
          </div>
        </div>

        <div className="terms">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <span>
            I agree to the <a href="#">Terms and Conditions</a>
          </span>
        </div>

        <button className="create-account-btn" disabled={!agree}>
          Create account
        </button>

        <div className="footer-login">
          New to ICICI Lombard? <span>Login</span>
        </div>
      </div>
    </div>
  );
}
