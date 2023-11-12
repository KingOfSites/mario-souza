import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <img src="/logoMario.svg" />
            <p>
              Rua teixeira da silva, 54 - conj. 81/82 - Bela Vista São Paulo
              04002-030
            </p>
            <span>(00) 99999-9999</span>
            <div className={styles.rowSocial}>
              <div className={styles.wrapSocialImage}>
                <img src="/twittermario.svg" />
              </div>
              <div className={styles.wrapSocialImage}>
                <img src="/facebookmario.svg" />
              </div>
              <div className={styles.wrapSocialImage}>
                <img src="/linkedinmario.svg" />
              </div>
              <div className={styles.wrapSocialImage}>
                <img src="/instagrammario.svg" />
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.rightSideBlock}>
              <h4>Navegue</h4>
              <ul>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Contato</li>
              </ul>
            </div>
            <div className={styles.rightSideBlock}>
              <h4>Termos</h4>
              <ul>
                <li>Políticas de privacidade</li>
                <li>Termos de serviço</li>
                <li>Ajuda</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.lastFooter}>
        <hr />
        <p>© 2023 DR.Mario Freitas. Todos os direitos reservados</p>
      </section>
    </>
  );
}
