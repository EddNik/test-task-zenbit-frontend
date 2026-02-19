"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import css from "./ForgotPasswordPage.module.css";
import { Button } from "@/components/Button/Button";
import { forgotPassword, ForgotPasswordResponse } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [result, setResult] = useState<ForgotPasswordResponse | null>(null);

  async function handleSubmit(formData: FormData) {
    try {
      setError("");
      setResult(null);
      const email = String(formData.get("email") ?? "");
      const res = await forgotPassword({ email });
      setResult(res);
    } catch (e) {
      setError(
        (e as ApiError).response?.data?.error ??
          (e as ApiError).message ??
          "Oops... some error"
      );
    }
  }

  return (
    <main className={css.mainContent}>
      <div className={css.rightSide}>
        <form className={css.form} action={handleSubmit}>
          <h1 className={css.formTitle}>Forgot password</h1>
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

          <Button type="submit" className={css.submitButton}>
            Get reset password
          </Button>

          {result?.token && (
            <div className={css.tokenBox}>
              <p className={css.tokenTitle}>Reset token (JWT)</p>
              <code className={css.token}>{result.token}</code>
              <Button
                type="button"
                className={css.submitButton}
                onClick={() =>
                  router.push(
                    `/reset-password?token=${encodeURIComponent(result.token!)}`
                  )
                }
              >
                Continue to reset
              </Button>
            </div>
          )}

          {error && <p className={css.error}>{error}</p>}
        </form>
      </div>
    </main>
  );
}
