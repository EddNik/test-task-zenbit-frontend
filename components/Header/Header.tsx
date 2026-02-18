import css from "./Header.module.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

function Header() {
  return (
    <header className={css.header}>
      <nav aria-label="Main Navigation">
        <AuthNavigation />
      </nav>
    </header>
  );
}

export default Header;
