import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-crema">
      <div className="container_all flex justify-center items-center  w-full h-[100vh] flex-col ">
        <h1 className="mb-2">GRACIAS</h1>
        <h2 className="text-center">
          TU FORMULARIO SE ENVIO DE <br /> FORMA EXITOSA
        </h2>

        <div className="button_one pt-10">
          <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
