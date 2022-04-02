import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Abhiemail = () => {
  const [email, setemail] = useState("");
  
  const navigate = useNavigate();
  const otp = Math.floor(1000 + Math.random() * 9000);
  const handlechange = (e) => {
    setemail(e.target.value);
  };
  console.log(email);
  const handlesubmit = (e) => {
    axios
      .post("http://localhost:2345/mailer", { email: email, otp: otp })
      

    navigate("/otp");
  };
  return (
    <div className="abhiemail">
      <h1>What's your phone number or email?</h1>
      <div style={{ marginTop: "40px" }}></div>
      <input
        className="abhiinputbox"
        type="email"
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter your email"
      />
      <div style={{ marginTop: "40px" }}></div>
      <p>
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </p>
      <div style={{ marginTop: "40px" }}></div>
      <div>
        <button
          className="abhibtn"
          style={{ marginLeft: "300px" }}
          type="submit"
          onClick={handlesubmit}
        >
          <div>Next </div>
        </button>
      </div>

      <div style={{ marginTop: "40px" }}></div>
      <div>
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
          <a id="termsOfServiceLink" href="https://policies.google.com/terms">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};
