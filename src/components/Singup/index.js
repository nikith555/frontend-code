import React from 'react';
import './index.css'
import Frame from "../image/image 1.png"
import Logo from "../image/Frame 2.png"
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
const SignUp = () => {
  return (
    <div className="signup-main-container">
    <div className="signup-container">
      <div className="logo-container">
        <img src={Frame} alt="Frame" className="login-side-image" />
      </div>
      <div className="form-container">
        <img src={Logo} alt="Signup" className="signup-logo-image"/>
        <div className="form-fields-container"> 
        <div className="input-container">
          <div >
            <FaUser className="input-icon"/>
          </div>
         <div >
           <input type="text" id="fullName" placeholder="Full Name" className="input-box" />
         </div>
        </div>
        <div className="input-container">
          <div >
            <IoIosMail className="input-icon"/>
          </div>
         <div >
           <input type="email" id="emailid" placeholder="Email ID" className="input-box" />
         </div>
        </div>
        <div className="input-container">
          <div >
            <IoMdLock className="input-icon"/>
          </div>
         <div >
           <input type="password" id="password" placeholder="Password" className="input-box" />
         </div>
        </div>
        <div className="input-container">
          <div >
            <IoMdLock className="input-icon"/>
          </div>
         <div >
           <input type="password" id="password" placeholder="Confirm Password" className="input-box" />
         </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="termsCheckbox" className="i-box" />
          <p>I agree to the <a className="terms-style">terms & conditions</a> and <a className="terms-style">Privacy Policy</a></p>
        </div>
        <div className="button" >
        <button className="singup-button">Sign Up</button>
        </div>
        </div>
        <p>Already registered ? <a className="signin-style">Sign In</a></p>
      </div>
    </div>
    </div>
  );
};
export default SignUp
