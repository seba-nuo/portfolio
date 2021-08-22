import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.horizontal} onClick={() => setOpen(false)}>
        <div className={styles.nameContainer}>
          <Link href="/">
            <a className={styles.name}>Sebastián Núñez</a>
          </Link>
        </div>
        <div className={open ? styles.vertical : styles.links}>
          <Link href="#about">
            <a onClick={() => setOpen(false)} className={styles.about}>
              About
            </a>
          </Link>
          <Link href="#proyects">
            <a onClick={() => setOpen(false)}>Proyects</a>
          </Link>
          <Link href="#contact">
            <a className={styles.contact} onClick={() => setOpen(false)}>
              Contact
            </a>
          </Link>
        </div>
      </div>
      <div
        className={open ? styles.exit : styles.open}
        onClick={() => setOpen(!open)}
      >

      <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
      </svg>
      
      </div>
    </div>
  );
}
