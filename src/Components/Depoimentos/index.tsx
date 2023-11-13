import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

type SlideType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

export default function Depoiments() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: SlideType[] = [
    {
      id: 1,
      title: "eupatrickpereira",
      text: "Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.",
      imageUrl: "/depoimentPerson.png",
    },
    {
      id: 2,
      title: "eupatrickpereira",
      text: "Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.",
      imageUrl: "/depoimentPerson.png",
    },
    {
      id: 3,
      title: "eupatrickpereira",
      text: "Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.",
      imageUrl: "/depoimentPerson.png",
    },
    {
      id: 4,
      title: "eupatrickpereira",
      text: "Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.",
      imageUrl: "/depoimentPerson.png",
    },
    {
      id: 5,
      title: "eupatrickpereira",
      text: "Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.",
      imageUrl: "/depoimentPerson.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.depoimentosText}>DEPOIMENTOS</div>
        <div className={styles.leftSide}>
          <div className={styles.titleBlock}>
            <h4>confiança</h4>
            <h2>Alguns depoimentos de clientes</h2>
          </div>
          <p>Alguns depoimentos de empresas que já representamos.</p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          grabCursor={true}
          pagination={{ clickable: true }}
          className={styles.swiperDesktop}
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
        </Swiper>
        <div className={styles.rowButton}>
          <div onClick={prevSlide} className={styles.prevButton}>
            <img src="/leftYellow.svg" />
          </div>
          <div onClick={nextSlide} className={styles.nextButton}>
            <img src="/rightYellow.svg" />
          </div>
        </div>
        <div className={styles.carousel}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={styles.slide}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
              <div className={styles.card}>
                <div className={styles.topCard}>
                  <img src="/stars.svg" alt="Stars" />
                  <h6>{slide.title}</h6>
                  <p>{slide.text}</p>
                </div>
                <div className={styles.footerCard}>
                  <img
                    src={slide.imageUrl}
                    className={styles.depoimentPhoto}
                    alt="Depoiment"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
