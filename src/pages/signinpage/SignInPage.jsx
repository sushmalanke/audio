import React from "react";
import style from "./SignInPage.module.scss";
import logo from "../../assets/Paisabazaar-logo.png";
import SignIn from "../../components/signin/SignIn";
import { Link, NavLink } from "react-router-dom";
function SignInPage() {
  return (
    <>
      <div className={style["logo"]}>
        <img src={logo} alt="" />
      </div>
      <div className={style["signinpage"]}>
        <SignIn></SignIn>
        <div className={style["register-container"]}>
          <div className={style["registration-data"]}>
            <h1>Developer Quality Index</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <div className={style["signup-button"]}>
              <button type="submit" className={style["btn btn-primary"]}>
                <Link to="/signup" className={style["signup-link"]}>
                  SIGN UP
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignInPage;
