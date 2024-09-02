import styles from "./Header.module.css";
import RocketLogo from "../assets/Logo.svg";

function Header() {
  return (
    <header className={styles.content}>
      <img src={RocketLogo} alt="logo image" />
    </header>
  );
}

export default Header;
