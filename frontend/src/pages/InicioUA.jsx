import Sidebar from "../components/commons/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Cargando from "../components/commons/Cargando";
import { useNavigate } from "react-router-dom";
import BannerBienvenida from "../components/usuarioAvanzado/BannerBienvenida";

const InicioUA = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function obtenerIdUsuario() {
      try {
        const response = await axios.get("http://localhost:3001/api/usuarios/me", {
          withCredentials: true,
        });
        const token = response.headers['authorization']; // Lee el token del encabezado de la respuesta
        // Guarda el token para usarlo en solicitudes posteriores
        // Resto del código
      } catch (error) {
        console.error(error);
      }
    }

    obtenerIdUsuario();
    // eslint-disable-next-line
  }, []);

  if (usuario === null) {
    return <Cargando />;
  }
  return (
    <>
      <Sidebar />
      <div style={{ paddingTop: 50, paddingLeft: "70px" }}>
        <BannerBienvenida usuario={usuario} />
      </div>
    </>
  );
};

export default InicioUA;
