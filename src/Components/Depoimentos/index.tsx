import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export default function Depoiments() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.depoimentosText}>DEPOIMENTOS</div>
        <div className={styles.leftSide}>
          <div className={styles.titleBlock}>
            <h4>serviços</h4>
            <h2>Alguns depoimentos de clientes</h2>
          </div>
          <p>Alguns depoimentos de empresas que já representamos.</p>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          grabCursor={true}
          pagination={{ clickable: true }}
          className={styles.mySwiper}
          initialSlide={1}
        >
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.topCard}>
                <img src="/stars.svg" alt="Stars" />
                <h6>eupatrickpereira</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla est nec
                  imperdiet arcu tellus lorem enim egestas. Diam dis et
                  vulputate pellentesque consectetur tellus.
                </p>
              </div>
              <div className={styles.footerCard}>
                <img
                  src="/depoimentPerson.png"
                  className={styles.depoimentPhoto}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.topCard}>
                <img src="/stars.svg" alt="Stars" />
                <h6>eupatrickpereira</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla est nec
                  imperdiet arcu tellus lorem enim egestas. Diam dis et
                  vulputate pellentesque consectetur tellus.
                </p>
              </div>
              <div className={styles.footerCard}>
                <img
                  src="/depoimentPerson.png"
                  className={styles.depoimentPhoto}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.topCard}>
                <img src="/stars.svg" alt="Stars" />
                <h6>eupatrickpereira</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla est nec
                  imperdiet arcu tellus lorem enim egestas. Diam dis et
                  vulputate pellentesque consectetur tellus.
                </p>
              </div>
              <div className={styles.footerCard}>
                <img
                  src="/depoimentPerson.png"
                  className={styles.depoimentPhoto}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.topCard}>
                <img src="/stars.svg" alt="Stars" />
                <h6>eupatrickpereira</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla est nec
                  imperdiet arcu tellus lorem enim egestas. Diam dis et
                  vulputate pellentesque consectetur tellus.
                </p>
              </div>
              <div className={styles.footerCard}>
                <img
                  src="/depoimentPerson.png"
                  className={styles.depoimentPhoto}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.topCard}>
                <img src="/stars.svg" alt="Stars" />
                <h6>eupatrickpereira</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla est nec
                  imperdiet arcu tellus lorem enim egestas. Diam dis et
                  vulputate pellentesque consectetur tellus.
                </p>
              </div>
              <div className={styles.footerCard}>
                <img
                  src="/depoimentPerson.png"
                  className={styles.depoimentPhoto}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.topCard}>
                <img src="/stars.svg" alt="Stars" />
                <h6>eupatrickpereira</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nulla est nec
                  imperdiet arcu tellus lorem enim egestas. Diam dis et
                  vulputate pellentesque consectetur tellus.
                </p>
              </div>
              <div className={styles.footerCard}>
                <img
                  src="/depoimentPerson.png"
                  className={styles.depoimentPhoto}
                />
              </div>
            </div>
          </SwiperSlide>
          {/* Repeat for other slides */}
        </Swiper>
      </section>
    </>
  );
}
