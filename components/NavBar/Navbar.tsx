import styles from "./Navbar.module.scss";
import logoWhite from "@public/images/logo-white.svg";
import Image from "next/legacy/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <div className={styles.navbarIcon}>
          <Image src={logoWhite} alt="ImageFlow" layout="responsive" />
        </div>
      </div>
      <div className={styles.navbarCenter}>
        <Link href="/">imageflow</Link>
        </div>
      <div className={styles.navbarRight}>
        <Link href="/editor" legacyBehavior>

          <div className={styles.navbarItem}>Try it out</div>

        </Link>
        <Link href="/signin" legacyBehavior>

          <div className={styles.navbarItem}>Sign In</div>

        </Link>
        <Link href="/signup" legacyBehavior>

          <div className={styles.navbarItem}>Sign Up</div>

        </Link>
      </div>
    </div>
  );
};
export default Navbar;