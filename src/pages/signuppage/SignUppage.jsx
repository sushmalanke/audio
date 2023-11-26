import React from "react";
import style from "./SignUppage.module.scss";
import logo from "../../assets/Paisabazaar-logo.png";
import { Link, NavLink } from "react-router-dom";
import SignUp from "../../components/signup/SignUp";
function SignUppage() {
  return (
    <>
      <div className={style["logo"]}>
        <img src={logo} alt="" />
      </div>
      <div className={style["signuppage"]}>
        <SignUp />
        <div className={style["register-container"]}>
          <div className={style["registration-data"]}>
            <h1>Developer Quality Index</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <div className={style["signin-button"]} >
              <button type="submit" className={style["btn btn-primary"]}>
                <Link to="/" className={style["signin-link"]}>
                  SIGN IN
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUppage;
