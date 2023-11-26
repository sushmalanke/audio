import React from "react";
import style from "./SignUp.module.scss"; 
function SignUp() {
  return (
    <div className={style["sigup-data"]}>
      <h1 className={style["signup-header"]}>Create Account</h1>
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
          />
        </div>
      </div>
      <div className={style["signup"]}>
        <button type="submit" className={style["btn btn-primary"]}>
          Sign Up
        </button>
      </div>
     
      {/* <p>
        If you have an account?
        <Link to="/" className={style["signin-link"]}>
          Sign In here
        </Link>
      </p> */}
    </div>
  );
}

export default SignUp;
