import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
const NavbarDestock = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);
  const [colorArrow, setColorArrow] = useState(false);

  const handleScrollToSection = (destination) => {
    scroller.scrollTo(destination, {
      spy: true,
      smooth: true,
      offset: -50,
      duration: 500,
    });
  };

  const handleLinkClick = (destination) => {
    setDropDown(false);
    if (location.pathname === "/") {
      handleScrollToSection(destination);
    } else {
      setTimeout(() => {
        handleScrollToSection(destination);
      }, 1000);
    }
  };

  return (
    <div className="bg-crema fixed w-full z-50 shadow">
      <div className="container_all flex justify-between items-center pt-5 pb-5">
        <img
          onClick={() => navigate("/")}
          className="w-[50px] md:w-[100px] cursor-pointer"
          src="/assets/logotipo.png"
          alt="logo venues snacks "
        />

        <div className="group navbar flex gap-x-10">
          <Link onClick={() => setDropDown(false)} to="/">
            <p className="hover:text-gold">Home</p>
          </Link>

          <Link
            onClick={() => {
              setDropDown(false);
              handleLinkClick("keysService");
            }}
            to="/"
          >
            <p className="hover:text-gold">¿Por qué elegirnos?</p>
          </Link>

          <div className="relative ">
            <Link to="nuestros-servicios">
              <p className="hover:text-gold pr-5">Servicios</p>
            </Link>

            <img
              onMouseEnter={() => setColorArrow(true)}
              onMouseLeave={() => setColorArrow(false)}
              onClick={() => setDropDown(!dropDown)}
              className={`absolute w-[20px] -right-[10%] top-[35%] cursor-pointer ${
                dropDown ? "arrow_change_direction " : "arrow"
              }`}
              src={
                !colorArrow
                  ? "/assets/icons_assets/abajo.png"
                  : "/assets/icons_assets/down.png"
              }
              alt="flecha"
            />
            <div className={dropDown ? " dropdow_destock" : "dropdow_destock_disable"}>
              <Link
                onClick={() => setDropDown(false)}
                to="/nuestros-servicios/administracion-alimentos-bebidas-escenarios"
              >
                <p className="hover:text-gold">
                  <span className="text-[25px] relative top-[3px]">&gt;</span>{" "}
                  Administración de alimentos y bebidas en escenarios
                </p>
              </Link>

              <Link onClick={() => setDropDown(false)} to="/nuestros-servicios/soluciones-alimentacion">
                <p className="hover:text-gold">
                  <span className="text-[25px] relative top-[3px]">&gt;</span> Soluciones
                  de alimentación masiva en eventos y festivales
                </p>
              </Link>

              <Link onClick={() => setDropDown(false)} to="nuestros-servicios/administracion-barras-bebidas">
                <p className="hover:text-gold">
                  <span className="text-[25px] relative top-[3px]">&gt;</span>
                  <span></span> Operación de barras y bebidas
                </p>
              </Link>

              <Link onClick={() => setDropDown(false)} to="vip">
                <p className="hover:text-gold">
                  <span className="text-[25px] relative top-[3px]">&gt;</span> Desarrollo
                  de zonas de experiencias VIP
                </p>
              </Link>
              <a target="_blank" href="https://showmeal.co/#/">
                <p className="hover:text-gold">
                  <span className="text-[25px] relative top-[3px]">&gt;</span> Catering
                  para artistas y alimentación de producción
                </p>
              </a>
            </div>
          </div>

          <Link
            onClick={() => {
              setDropDown(false);
              handleLinkClick("ourClients");
            }}
            to="/"
          >
            <p className="hover:text-gold">Nuestros Clientes</p>
          </Link>

          <Link onClick={() => setDropDown(false)} to="contacto">
            <p className="hover:text-gold">Contacto</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDestock;
