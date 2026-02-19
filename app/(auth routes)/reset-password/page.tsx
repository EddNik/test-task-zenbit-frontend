"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import css from "./ResetPasswordPage.module.css";
import { Button } from "@/components/Button/Button";
import { resetPassword } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useSearchParams();
  const initialToken = useMemo(() => params.get("token") ?? "", [params]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    try {
      setError("");
      setSuccess(false);
      const token = String(formData.get("token") ?? "");
      const password = String(formData.get("password") ?? "");
      await resetPassword({ token, password });
      setSuccess(true);
      router.push("/sign-in");
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
          <h1 className={css.formTitle}>Reset password</h1>

          <div className={css.formGroup}>
            <label htmlFor="token">Reset token (JWT)</label>
            <textarea
              id="token"
              name="token"
              className={css.textarea}
              defaultValue={initialToken}
              required
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">New password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={css.input}
              required
              minLength={6}
            />
          </div>

          <Button type="submit" className={css.submitButton}>
            Set new password
          </Button>

          <p className={css.backLink}>
            <Link href="/sign-in">Back to Sign in</Link>
          </p>

          {success && <p className={css.success}>Password updated.</p>}
          {error && <p className={css.error}>{error}</p>}
        </form>
      </div>
    </main>
  );
}

