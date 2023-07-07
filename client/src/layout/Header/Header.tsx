import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container py-[4rem]">
        <h1 className="mt-0 text-4xl sm:text-6xl">Dostępna lista transakcji</h1>
      </div>
    </header>
  );
};

export default Header;
