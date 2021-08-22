import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.horizontal} onClick={() => setOpen(false)}>
        <Link href="/">
          <a className={styles.name}>Sebastián Núñez</a>
        </Link>
        <div className={open ? styles.vertical : styles.links}>
        <Link href="#about">
            <a onClick={() => setOpen(false)} className={styles.about}>About</a>
          </Link>
          <Link href="#proyects">
            <a onClick={() => setOpen(false)}>Proyects</a>
          </Link>
          <Link href="#contact">
            <a onClick={() => setOpen(false)}>Contact</a>
          </Link>
        </div>
      </div>
      <div
        className={open ? styles.exit : styles.open}
        onClick={() => setOpen(!open)}
      ></div>
    </div>
  );
}
