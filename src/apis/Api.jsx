import axios from "axios";
// export const urlBase = "http://localhost:1337";
export const urlBase = "https://venues.herokuapp.com";

export const getInfoHome = async () => {
  try {
    const response = await axios.get(`${urlBase}/home/`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// export const getServices = async () => {
//   const url = `${urlBase}/servicios/`;
//   return await axios.get(url);
// };

// export const getAdministration = async () => {
//   const url = `${urlBase}/administracion-de-alimentos-y-bebidas-en-escenarios/`;
//   return await axios.get(url);
// };

// export const getSolutions = async () => {
//   const url = `${urlBase}/soluciones-de-alimentacion-masiva-en-eventos-y-festivales/`;
//   return await axios.get(url);
// };

// export const getBars = async () => {
//   const url = `${urlBase}/administracion-de-barras-y-bebidas/`;
//   return await axios.get(url);
// };

// export const getVip = async () => {
//   const url = `${urlBase}/desarrollo-de-zonas-de-experiencias-vip/`;
//   return await axios.get(url);
// };

// export const getContact = async () => {
//   const url = `${urlBase}/contacto/`;
//   return await axios.get(url);
// };
