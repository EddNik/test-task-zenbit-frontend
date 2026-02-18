"use client";

import Link from "next/link";
import css from "./AuthNavigation.module.css";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../../lib/store/hooks";
import { clearIsAuthenticated } from "../../lib/store/authSlice";
import { logout } from "@/lib/api/clientApi";
import { Button } from "../Button/Button";

function AuthNavigation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(state => state.auth);

  const handleLogout = async () => {
    await logout();
    dispatch(clearIsAuthenticated());
    router.replace("/");
  };

  return isAuthenticated ? (
    <ul className={css.navigation}>
      <Button className={css.logoutButton} onClick={handleLogout} type="button">
        Sign out
      </Button>
    </ul>
  ) : (
    <ul className={css.navigation}>
      <li className={css.navigationItem}>
        <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
          Login
        </Link>
      </li>
      <li className={css.navigationItem}>
        <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
          Sign up
        </Link>
      </li>
    </ul>
  );
}

export default AuthNavigation;
