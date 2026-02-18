"use client";

import Link from "next/link";
import css from "./AuthNavigation.module.css";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../../lib/store/hooks";
import { clearIsAuthenticated } from "../../lib/store/authSlice";
import { logout } from "@/lib/api/clientApi";

function AuthNavigation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector(state => state.auth);

  const handleLogout = async () => {
    await logout();
    dispatch(clearIsAuthenticated());
    router.replace("/");
  };

  return isAuthenticated ? (
    <ul>
      <li className={css.navigationItem}>
        <p className={css.userEmail}>{user?.username}</p>
        <button onClick={handleLogout} className={css.logoutButton}>
          Sign out
        </button>
      </li>
    </ul>
  ) : (
    <ul>
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
