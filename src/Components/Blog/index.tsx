import styles from "./styles.module.scss";

export default function Blog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleBlock}>
            <h4>blog</h4>
            <h2>Notícias recentes</h2>
          </div>
          <div className={styles.blogWrap}>
            <div className={styles.leftSide}>
              <img src="/defaultblog.png" />
              <span>Leia em 5 minutos</span>
              <h3>Lorem ipsum dolor sit amet consectetur?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Fermentum id lectus
                rutrum vestibulum risus metus. Non aliquam massa mi ipsum
                scelerisque et. Volutpat aenean interdum fermentum malesuada
                aliquet scelerisque. At accumsan amet mi velit vitae nullam sed.
                Lobortis ullamcorper egestas ridiculus tincidunt consequat
                faucibus tellus.
              </p>
              <text>Por: DR.MARIO - 14/09/2023</text>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.rowBlog}>
                <div className={styles.rowLeftSide}>
                  <img src="/defaultblog.png" />
                </div>
                <div className={styles.rowRightSide}>
                  <span>leia em 5 minutos</span>
                  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
                  <text>Por: DR.MARIO - 14/09/2023</text>
                </div>
              </div>
              <div className={styles.rowBlog}>
                <div className={styles.rowLeftSide}>
                  <img src="/defaultblog.png" />
                </div>
                <div className={styles.rowRightSide}>
                  <span>leia em 5 minutos</span>
                  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
                  <text>Por: DR.MARIO - 14/09/2023</text>
                </div>
              </div>
              <div className={styles.rowBlog}>
                <div className={styles.rowLeftSide}>
                  <img src="/defaultblog.png" />
                </div>
                <div className={styles.rowRightSide}>
                  <span>leia em 5 minutos</span>
                  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
                  <text>Por: DR.MARIO - 14/09/2023</text>
                </div>
              </div>
              <div className={styles.rowBlog}>
                <div className={styles.rowLeftSide}>
                  <img src="/defaultblog.png" />
                </div>
                <div className={styles.rowRightSide}>
                  <span>leia em 5 minutos</span>
                  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
                  <text>Por: DR.MARIO - 14/09/2023</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
