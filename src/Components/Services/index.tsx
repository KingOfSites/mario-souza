import styles from "./styles.module.scss";

export default function Services() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleBlock}>
            <h4>serviços</h4>
            <h2>Como podemos ajudar sua empresa?</h2>
          </div>
          <div className={styles.mosaicoServices}>
            <div className={styles.card}>
              <div className={styles.numberCard}>
                <p>01</p>
              </div>
              <h6>Consultoria Jurídica</h6>
              <p>
                Fornecer orientação legal e análise de casos para clientes,
                ajudando-os a entender suas opções e tomar decisões informadas.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.numberCard}>
                <p>02</p>
              </div>
              <h6>Litígios Cíveis</h6>
              <p>
                Representar clientes em processos judiciais relacionados a
                disputas civis, como ações de indenização, disputas contratuais
                e litígios de propriedade.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.numberCard}>
                <p>03</p>
              </div>
              <h6>Direito das Obrigações e Contratos</h6>
              <p>
                Auxiliar na elaboração, revisão e execução de contratos, além de
                resolver disputas contratuais
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.numberCard}>
                <p>04</p>
              </div>
              <h6>Direito Imobiliário</h6>
              <p>
                Prestar serviços relacionados a propriedades, como compra e
                venda de imóveis, locações, despejos e questões de propriedade
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.numberCard}>
                <p>05</p>
              </div>
              <h6>Direito da Família</h6>
              <p>
                Lidar com questões familiares, como divórcio, pensão
                alimentícia, guarda de crianças e adoção.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.numberCard}>
                <p>06</p>
              </div>
              <h6>Sucessões e Heranças</h6>
              <p>
                Ajudar os clientes a planejar a sucessão de bens e
                representá-los em casos de heranças, testamentos e questões
                relacionadas à propriedade
              </p>
            </div>
            <div className={styles.lastCard}>
              <h5>Quero um atendimento personalizado para minha empresa</h5>
              <div className={styles.buttonCTA}>
                <p>Entrar em contato</p>
                <img src="/arrowRight.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
