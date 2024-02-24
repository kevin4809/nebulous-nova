import React from "react";
import { useNavigate } from "react-router-dom";
import Media from "react-media";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-grey_white pb-10">
      <div className="container_all">
        <div className="md:flex justify-between">
          <div className="group">
            <div className="group text-center pt-10 md:text-start font-semibold">
              <p className="py-1 mail"> Roger Casallas</p>

              <p>Ejecutivo Comercial</p>

              <a className="llamar" href="tel:+57318 3476133">
                <p className="py-1 llamar">318 3476133</p>
              </a>

              <p className="py-1">Bogotá D.C</p>

              <a className="font-bold underline cursor-pointer " href="/assets/politica.pdf" target="_blanck">
                <p>Políticas de Privacidad</p>
              </a>
            </div>

            <div className="button_one pt-10 md:pt-5 md:text-start contacto_iniciar ">
              <button className="contacto_iniciar" onClick={() => navigate("/contacto")}>
                Contáctanos
              </button>
            </div>

            <Media query="(max-width: 767px)">
              {(resolution) => {
                return resolution ? <img className="w-[150px] m-auto mt-14 pb-10" src="/assets/logotipo.png" alt="logo venues snacks " /> : "";
              }}
            </Media>
          </div>

          <div className="group">
            <Media query="(max-width: 767px)">
              {(resolution) => {
                return resolution ? (
                  ""
                ) : (
                  <div className="flex justify-center items-center">
                    <img className="w-[150px] pt-14 pb-10" src="/assets/logotipo.png" alt="logo venues snacks " />
                  </div>
                );
              }}
            </Media>

            <div className="flex m-auto group object-contain justify-evenly md:justify-evenly items-center ">
              {/* <a className="social" href="">
                <img
                  className="w-[20px] md:w-[15px] m-5 hover:scale-110 cursor-pointer transition-all"
                  src="/assets/icons_social/facebook.png"
                  alt="icono_facebook"
                />
              </a> */}

              <a className="social" target="_blank" href="https://www.instagram.com/venues_snacks/">
                <img
                  className="w-[40px] md:w-[30px] m-5 hover:scale-110 cursor-pointer transition-all"
                  src="/assets/icons_social/instagram.png"
                  alt="icono_instagram"
                />
              </a>

              {/* <img
                className="w-[40px] md:w-[30px] m-5 hover:scale-110 cursor-pointer transition-all"
                src="/assets/icons_social/twitter.png"
                alt="icono_twitter"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
