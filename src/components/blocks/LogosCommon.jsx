import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import ButtonToUp from "../../components/ButtonToUp";

const LogosCommon = ({ infoHome }) => {
  const swiperRef = useRef(null);
  const swiper2Ref = useRef(null);
  const [index, setIndex] = useState("");
  const [index2, setIndex2] = useState("");
  const [speed, setSpeed] = useState(4000);

  useEffect(() => {
    if (index !== "") {
      handleNavigationClick();
    }
  }, [index]);

  useEffect(() => {
    if (index2 !== "") {
      handleNavigationClick2();
    }
  }, [index2]);
  const handleNavigationClick = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.slideTo(swiperInstance.activeIndex + (index === "next" ? 1 : -1));
      swiperInstance.autoplay.stop();
      setSpeed(2000);
      swiperInstance.params.autoplay.delay = 0;
      setTimeout(() => {
        setSpeed(4000);
        swiperInstance.autoplay.start();
      }, 6000);
      setIndex("");
    }
  };

  const handleNavigationClick2 = () => {
    if (swiper2Ref.current) {
      const swiperInstance = swiper2Ref.current.swiper;
      swiperInstance.slideTo(swiperInstance.activeIndex + (index2 === "next" ? 1 : -1));
      swiperInstance.autoplay.stop();
      setSpeed(2000);
      swiperInstance.params.autoplay.delay = 0;
      setTimeout(() => {
        setSpeed(4000);
        swiperInstance.autoplay.start();
      }, 6000);
      setIndex2("");
    }
  };
  return (
    <div className="bg-black">
      <div className="group container_all">
        <h2 className="text-white pt-10 md:pt-20">
          Administración de alimentos y bebidas en escenarios:
        </h2>
        {infoHome?.administracion_de_alimentos.map((item, i) => (
          <div key={i} className="w-[120px] h-[120px] md:h-[150px] md:w-[150px]">
            <img className="w-full" src={item.url} alt="logo" />
          </div>
        ))}
      </div>

      <h2 className="text-white container_all pt-5">
        Soluciones de alimentación masiva en eventos y festivales:
      </h2>
      {/* <img className="w-[150px] m-auto pt-10" src="/assets/desliza.png" alt="deliza" /> */}
      {infoHome ? (
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: true,
            pauseOnMouseEnter: true,
          }}
          speed={speed}
          className="slider_logos_common cursor-grab"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <div
            className="swiper-button-next"
            onClick={() => {
              setIndex("next");
            }}
          >
            <img
              className="max-w-[999px] w-[23px] md:w-[30px] relative -right-2"
              src="/assets/r.png"
              alt="Flecha siguiente"
            />
          </div>
          <div
            className="swiper-button-prev"
            onClick={() => {
              setIndex("prev");
            }}
          >
            <img
              className="max-w-[999px]  w-[23px] md:w-[30px] relative left-6"
              src="/assets/l.png"
              alt="Flecha anterior"
            />
          </div>
          {infoHome?.Soluciones_de_alimentacion.map((item, i) => (
            <SwiperSlide
              className={`flex justify-center items-center`}
              key={`slider_${i}`}
            >
              <img
                className="w-[120px] h-[120px] md:h-[150px] md:w-[150px] object-contain"
                src={item.url}
                alt="logos"
              />
            </SwiperSlide>
          ))}
          {infoHome?.Soluciones_de_alimentacion.map((item, i) => (
            <SwiperSlide
              className={`flex justify-center items-center`}
              key={`slider_duplicated_${i}`}
            >
              <img
                className="w-[120px] h-[120px] md:h-[150px] md:w-[150px] object-contain"
                src={item.url}
                alt="logos"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}

      <div className="group container_all">
        <h2 className="text-white pt-5 ">Administración de barras y bebidas:</h2>
        <div className="flex gap-x-10">
          {infoHome?.administracion_de_barras_y_bebidas.map((item, i) => (
            <div key={i} className="w-[120px] h-[120px] md:h-[150px] md:w-[150px]">
              <img className="w-full" src={item.url} alt="logo" />
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-white container_all pt-5">
        Desarrollo de zonas de experiencias VIP:
      </h2>
      {/* <img className="w-[150px] m-auto pt-10" src="/assets/desliza.png" alt="deliza" /> */}
      {infoHome ? (
        <Swiper
          ref={swiper2Ref}
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: true,
            pauseOnMouseEnter: true,
          }}
          speed={speed}
          className="slider_logos_common cursor-grab"
        >
          <div
            className="swiper-button-next"
            onClick={() => {
              setIndex2("next");
            }}
          >
            <img
              className="max-w-[999px] w-[23px] md:w-[30px] relative -right-2"
              src="/assets/r.png"
              alt="Flecha siguiente"
            />
          </div>
          <div
            className="swiper-button-prev"
            onClick={() => {
              setIndex2("prev");
            }}
          >
            <img
              className="max-w-[999px] w-[23px] md:w-[30px] relative left-6"
              src="/assets/l.png"
              alt="Flecha anterior"
            />
          </div>

          {infoHome?.desarrollo_de_zonas_de_experencias_vip.map((item, i) => (
            <SwiperSlide className="flex justify-center items-center" key={`slider_${i}`}>
              <img
                className="w-[120px] h-[120px] md:h-[150px] md:w-[150px] object-contain"
                src={item.url}
                alt="logos"
              />
            </SwiperSlide>
          ))}

          {infoHome?.desarrollo_de_zonas_de_experencias_vip.map((item, i) => (
            <SwiperSlide
              className="flex justify-center items-center"
              key={`slider_duplicate${i}`}
            >
              <img
                className="w-[120px] h-[120px] md:h-[150px] md:w-[150px] object-contain"
                src={item.url}
                alt="logos"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}

      <ButtonToUp isWhite={true} />
    </div>
  );
};

export default LogosCommon;
