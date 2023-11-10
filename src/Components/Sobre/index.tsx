import styles from "./styles.module.scss";

export default function Sobre() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.leftSide}>
          <img src="/sobrefoto.webp" />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.title}>
            <h4>sobre</h4>
            <h2>Nossa história</h2>
          </div>
          <p>
            Na Mario Souza Advogados, compreendemos as complexidades que os
            empresários enfrentam diariamente. Com 20 anos de experiência no
            mercado, nossa equipe se dedica à advocacia artesanal e meticulosa,
            resolvendo os problemas que impactam seu negócio. Nossa missão é
            simplificar a jornada legal para você, proporcionando soluções
            sólidas que garantem a segurança e o crescimento de sua empresa.
          </p>
          <p>
            Somos uma equipe de advogados apaixonados pela lei e comprometidos
            com o sucesso dos empresários. Fundamos a Mario Souza Advogados com
            a missão de fornecer orientação jurídica meticulosa para simplificar
            sua jornada nos negócios. Nossa experiência e dedicação garantem que
            sua empresa esteja sempre um passo à frente no mundo jurídico.
          </p>
          <button>fale conosco</button>
        </div>
      </section>
    </>
  );
}
