import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ""}`}>
        <div className={styles.contentDrawer}>
          <div className={styles.topContentDrawer}>
            <img
              className={styles.logoMobile}
              src="/logoMario.svg"
              alt="logo"
            />
            <img
              className={styles.close}
              src="/close.svg"
              alt="logo"
              onClick={toggleDrawer}
            />
          </div>
          <div className={styles.middleContentDrawer}>
            <ul>
              <Link href={"/"}>
                <li onClick={toggleDrawer}>sobre</li>
              </Link>
              <Link href="/admin/gifts">
                <li onClick={toggleDrawer}>serviços</li>
              </Link>
              <Link href="/admin/confirmations">
                <li onClick={toggleDrawer}>contato</li>
              </Link>
              <Link href="/admin/confirmations">
                <li onClick={toggleDrawer}>blog</li>
              </Link>
            </ul>
            <button className={styles.area}>área do clientes</button>
            <button className={styles.login}>entre em contato</button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.visible : ""}`}
        onClick={toggleDrawer}
      ></div>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src="/logoMario.svg" className={styles.logo} />
          <div className={styles.rightSide}>
            <ul>
              <li>sobre</li>
              <li>serviços</li>
              <li>contato</li>
              <li>blog</li>
              <button className={styles.area}>área do clientes</button>
              <button className={styles.login}>entre em contato</button>
            </ul>
          </div>
          <img
            src="/hamburguerMario.svg"
            className={styles.hamburguerMario}
            onClick={toggleDrawer}
          />
        </div>
      </section>
    </>
  );
}
