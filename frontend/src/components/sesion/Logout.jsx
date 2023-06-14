import axios from "axios";
import Cookies from "js-cookie";
import { FaDoorOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const estiloItem = { display: "flex", alignItems: "center", gap: "10px" };

const Logout = ({ collapsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3001";

  const handleLogout = async () => {
    try {
      const response = await axios
        .post(`${baseUrl}/api/usuarios/logout`, {
          withCredentials: true,
        })
        .then(() => {
          Cookies.remove("token");
          dispatch(loginUser({ id: "", email: "", name: "" }));
        })
        .then(() => navigate("/"));
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
      // Aquí puedes mostrar un mensaje de error al usuario o realizar otra acción de manejo de errores
    }
  };

  return (
    <button className="boton-logout" onClick={handleLogout}>
      {collapsed ? (
        <FaDoorOpen size={25} />
      ) : (
        <span style={estiloItem}>
          <FaDoorOpen size={25} />
          <p style={{ fontSize: "large" }}>Cerrar Sesión</p>
        </span>
      )}
    </button>
  );
};

export default Logout;
