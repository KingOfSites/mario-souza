import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
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
          <img src="/hamburguerMario.svg" className={styles.hamburguerMario} />
        </div>
      </section>
    </>
  );
}
