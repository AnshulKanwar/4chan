import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <a href="/">
          <div className={styles.logo}>
            <span>
              <img src="logo.svg" alt="" />
            </span>
            <h1>4chan</h1>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
