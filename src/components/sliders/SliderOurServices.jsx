import react, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const SliderOurServices = ({ infoService }) => {
  const swiperRef = useRef(null);

  const [index, setIndex] = useState("");
  const [speed, setSpeed] = useState(4000);

  const info = [...infoService, ...infoService];

  useEffect(() => {
    if (index !== "") {
      handleNavigationClick();
    }
  }, [index]);

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

  return (
    <div className="bg-grey_white">
      <h1 className="text-center pt-10 pb-5 md:pt-20 mb-5 w-[80%] m-auto">Nuestros servicios</h1>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: false,
          pauseOnMouseEnter: false,
        }}
        speed={speed}
        className="slider_our_services cursor-grab"
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
          <img className="max-w-[999px] w-[23px] md:w-[30px] relative -right-6" src="/assets/r.png" alt="Flecha siguiente" />
        </div>
        <div
          className="swiper-button-prev"
          onClick={() => {
            setIndex("prev");
          }}
        >
          <img className="max-w-[999px] w-[23px] md:w-[30px] relative left-6" src="/assets/l.png" alt="Flecha anterior" />
        </div>
        {info?.map((item, i) => {
          return (
            <SwiperSlide key={`slider_${i}`}>
              <div
                // onClick={!item.es_esterno ? () => navigate(item.ruta) : () => window.open(item.ruta, "_blank")}
                className="border rounded-t-[50%] w-[250px] h-[250px] relative m-auto cursor-pointer"
              >
                <img
                  className="relative z-10 rounded-t-[50%] w-[100%] h-[100%] object-cover rounded-br-[50%] hover:rounded-br-[0px] transition-all duration-500 hover:scale-95"
                  src={item.imagen.url}
                  alt="image"
                />
                <p className="absolute right-[10%] bottom-[3%] z-0 font-bold">{i + 1}</p>
              </div>
              <p className="text-center mt-5 mb-10 text-black w-[80%] m-auto font-bold">{item.texto}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="button_two pb-10 md:pb-20 pt-10">
        <button onClick={() => navigate("/nuestros-servicios")}>Ir a servicios</button>
      </div>
    </div>
  );
};

export default SliderOurServices;
