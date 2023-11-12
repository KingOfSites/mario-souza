import styles from "./styles.module.scss";

export default function Numbers() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleBlock}>
            <h4>confiança</h4>
            <h2>Nosso compromisso em números</h2>
          </div>
          <div className={styles.numbersBlock}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <h3>20</h3>
                <h6>anos</h6>
              </div>
              <p>
                Há mais de duas décadas de experiência sólida, sempre ao lado de
                empresas de sucesso.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <h3>500</h3>
              </div>
              <p>Já foram mais de 500 empresas protegidas e bem sucedidas.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <h3>100</h3>
                <h6>%</h6>
              </div>
              <p>
                De dedicação à Proteção dos Negócios de Nossos Clientes,nossa
                prioridade é seu sucesso e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
