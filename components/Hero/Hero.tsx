import Link from "next/link";
import { clsx } from "clsx";
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={css.section}>
      <div className={clsx(css.heroContainer, "layoutContainer")}>
        <div className={css.titleWrapper}>
          <h1 className={css.title}>The chemical negatively charged</h1>
          <p className={css.text}>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
        </div>
        <Link href={"/deals"} className={css.heroBtn}>
          Get Started
        </Link>
      </div>
    </section>
  );
};
