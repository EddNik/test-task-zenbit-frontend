"use client";

import css from "./SignInPage.module.css";
import { login, LoginRequest } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiError } from "@/app/api/api";
import { useAppDispatch } from "@/lib/store/hooks";
import { setUser } from "@/lib/store/authSlice";
import Link from "next/link";
import { Button } from "@/components/Button/Button";

function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  async function handleSubmit(formData: FormData) {
    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;
      const response = await login(formValues);
      if (response) {
        dispatch(setUser(response));
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Oops... some error"
      );
    }
  }

  return (
    <>
      <main className={css.mainContent}>
        <div className={css.leftSide}></div>
        <div className={css.rightSide}>
          <form className={css.form} action={handleSubmit}>
            <h1 className={css.formTitle}>Login</h1>
            <div className={css.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className={css.input}
                placeholder="Email"
                required
              />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className={css.input}
                required
              />
            </div>
            <Link href="/forgot-password" className={css.linkForgot}>
              Forgot password?
            </Link>

            <Button type="submit" className={css.submitButton}>
              Sign in
            </Button>

            <div className={css.signUpBlock}>
              <p>
                Don’t have account?
                <Link href="/sign-up" className={css.linkForgot}>
                  Sign Up
                </Link>
              </p>
            </div>
            {error && <p className={css.error}>{error}</p>}
          </form>
        </div>
      </main>
    </>
  );
}

export default SignInPage;
