"use client";

import css from "./Header.module.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/sign-in";
  const isDealsPage = pathname === "/deals";

  return (
    <header className={css.header}>
      {!isLoginPage && (
        <nav aria-label="Main Navigation">
          <AuthNavigation />
        </nav>
      )}

      {isDealsPage && (
        <nav className={css.navigation}>
          <li className={css.navigationItem}>
            <Link href="/" prefetch={false} className={css.navigationLink}>
              Home
            </Link>
          </li>
        </nav>
      )}
    </header>
  );
}

export default Header;
