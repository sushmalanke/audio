import React from "react";
import style from "./SignIn.module.scss";
import { Link, NavLink } from "react-router-dom"; 
function SignIn() {
  return (
    <div className={style["sigin-data"]}>
      <h1 className={style["signin-header"]}>Sign In</h1>
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

      <div>
        <button type="submit" className={style["btn btn-primary"]}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
