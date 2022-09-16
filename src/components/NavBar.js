import React from "react";
import styles from "./NavBarStyles.module.css";
function NavBar() {
  return (
    <nav>
      <a href="#">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="udemy logo"
        />
      </a>
      <a className={styles.item} href="">
        Categories
      </a>

      <form className={styles.searchBar}>
        <button
          type="button"
          className="fa fa-search"
          style={{ fontSize: "20px" }}
        ></button>
        <input type="text" placeholder="Search for anything" />
      </form>

      <a className={styles.item} href="#">
        Udemy Business
      </a>
      <a className={styles.item} href="#">
        Teach on Udemy
      </a>
      <a className={styles.cart} href="#">
        <span
          className="fa fa-shopping-cart"
          style={{ fontSize: "24px" }}
        ></span>
      </a>

      <span>
        <button type="submit" className={styles.logIn}>
          Log in
        </button>
        <button type="submit" className={styles.signUp}>
          Sign up
        </button>
      </span>

      <button type="submit" className={styles.language}>
        <span className="bi bi-globe" style={{ fontSize: "24px" }}></span>
      </button>
      <a className={styles.menu}>
        <span className="fa fa-bars" style={{ fontSize: "24px" }}></span>
      </a>
    </nav>
  );
}

export default NavBar;
