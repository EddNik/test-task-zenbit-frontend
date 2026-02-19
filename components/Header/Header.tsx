"use client";

import css from "./Header.module.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/sign-in";

  return (
    <header className={css.header}>
      {!isLoginPage && (
        <nav aria-label="Main Navigation">
          <AuthNavigation />
        </nav>
      )}
    </header>
  );
}

export default Header;
