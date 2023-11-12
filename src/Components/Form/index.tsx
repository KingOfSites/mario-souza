import styles from "./styles.module.scss";

export default function Form() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.titleBlock}>
            <h4>contato</h4>
            <h2>Entre em contato conosco</h2>
          </div>

          <form>
            <div className={styles.inputBlock}>
              <label>Nome completo*</label>
              <input type="text" placeholder="Jonan Moraes Lira" required />
            </div>
            <div className={styles.inputBlock}>
              <label>Email*</label>
              <input type="email" placeholder="exemplo@gmail.com" required />
            </div>
            <div className={styles.inputBlock}>
              <label>Telefone*</label>
              <input type="text" placeholder="61 99999-9999" required />
            </div>
            <div className={styles.inputBlock}>
              <label>Mensagem*</label>
              <input
                type="text"
                placeholder="Descreva um pouco o que precisa..."
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
