import styles from "./styles.module.scss";

export default function Banner() {
  //
  return (
    <>
      <section className={styles.container}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/videos/meuvideo.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className={styles.videoGradient}></div>
        <div className={styles.middleContent}>
          <h4>mario souza advogados</h4>
          <h1>Resolvendo Desafios Empresariais com Expertise Jurídica</h1>
          <p>
            Bem-vindo à Mario Souza Advogados, onde sua empresa encontra
            soluções legais sob medida.
          </p>
          <button>entre em contato</button>
        </div>
      </section>
    </>
  );
}
