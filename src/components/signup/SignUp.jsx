import React from "react";
import style from "./SignUp.module.scss";
import BrandInfo from "../brand/BrandInfo";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/icons/google.svg";
import apple from "../../assets/icons/apple (2).svg";
import facebook from "../../assets/icons/fbook.svg";
import { useForm } from "react-hook-form";
function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(values.email + " " + values.password);

  return (
    <form
      className={style["signup-container"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={style["backgroundoverlay"]}></div>
      <div className={style["sigup-data"]}>
        <BrandInfo></BrandInfo>
        <div className={style["input-form"]}>
          <div className={style["input"]}>
            <input
              type="email"
              className={style["email-form"]}
              placeholder="Email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
           <p> {errors.email && errors.email.message}</p>
          </div>

          <div className={style["input"]}>
            <input
              type="password"
              className={style["password-form"]}
              placeholder="Password"
              {...register("password", {
                required: "Required",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/,
                  message:
                    "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
                },
              })}
            />
           <p> {errors.password && errors.password.message}</p>
          </div>
        </div>
        <div className={style["signup"]}>
          <button type="submit" className={style["btn btn-primary"]}>
            Sign Up
          </button>
        </div>
        <div className={style["applogin"]}>
          <img src={apple} alt="apple" />
          <img src={facebook} alt="facebook" />
          <img src={google} alt="google" />
        </div>
        <p>
          If you have an account?
          <Link to="/" className={style["signin-link"]}>
            Sign In here
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
