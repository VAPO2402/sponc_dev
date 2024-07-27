import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

import "../../styles/stlogin/login.scss";

import logo from "../../assets/mainIcon.png";
import user from "../../assets/userImage.png";
import login from "../../assets/loginBg2.png";

function Label({ data }) {
  return (
    <>
      <label htmlFor={data}>
        <p>{data}:</p>
        <div className="input">
          <i class="ri-arrow-right-wide-line"></i>
          <input type="text" id={data} placeholder={data} />
        </div>
      </label>
    </>
  );
}

const Login = () => {
  return (
    <>
      <div className="main">
        {/* <img src="" alt="" /> */}
        <div className="mainWrap">
          <div className="loginMain">
            <div className="loginTop">
              <div className="loginLogo">
                <img src={logo} alt="logo" />
                <h1>Component</h1>
              </div>
              <div className="loginQue">
                <div className="content">
                  <p>Questions</p>
                  <h2>Ask Paarth</h2>
                </div>
                <img src={user} alt="" />
              </div>
            </div>
            <div className="loginForm">
              <form action="post">
                <div className="formHeader">
                  <h1 className="getStarted">Get Started</h1>
                  <p className="signIn">
                    Already have an account <span>Sign in</span>
                  </p>
                </div>
                <div className="formMain">
                  <div className="tags">
                    <Label data="Name" />
                  </div>
                  <div className="tags">
                    <Label data="Email" />
                  </div>
                  <div className="tags">
                    <Label data="Country" />
                  </div>
                  <button>
                    <Link to={"/home"}>Sign Up</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="loginImage">
            <img src={login} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
