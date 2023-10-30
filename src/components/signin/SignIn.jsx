import React from "react";
import style from "./SignIn.module.scss";
import BrandInfo from "../brand/BrandInfo";
import { Link, NavLink } from "react-router-dom";
function SignIn() {
  return (
    <form className={style["signin-container"]}>
      <div className={style["backgroundoverlay"]}></div>
      <div className={style["sigin-data"]}>
        <BrandInfo></BrandInfo>
        <div className={style["input-form"]}>
          <div className={style["input"]}>
            <input
              type="email"
              className={style["email-form"]}
              placeholder="Email"
            />
          </div>
          <div className={style["input"]}>
            <input
              type="password"
              className={style["password-form"]}
              placeholder="Password"
              id="password"
            />
          </div>
        </div>
        <div className={style["forgotpass"]}>
          <a href="#" className={style["forgotpass-link"]}>
            forgot password
          </a>
        </div>
        <div className={style["signup"]}>
          <button type="submit" className={style["btn btn-primary"]}>
            Sign In
          </button>
        </div>
        <p>
          Didn't have any account?
          <Link to="./signup" className={style["signup-link"]}>
            Sign Up here
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignIn;
