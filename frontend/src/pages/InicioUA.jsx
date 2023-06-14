import Sidebar from "../components/commons/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import Cargando from "../components/commons/Cargando";
import { useNavigate } from "react-router-dom";
import BannerBienvenida from "../components/usuarioAvanzado/BannerBienvenida";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userSlice";

const InicioUA = () => {
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function obtenerIdUsuario() {
  //     try {
  //       const response = await axios
  //         .get("http://localhost:3001/api/usuarios/me", {
  //           withCredentials: true,
  //         })
  //         .then((res) => res.data)
  //         .then((res) => {
  //           const { _id, email, name } = res;
  //           console.log(res);
  //           dispatch(loginUser({ id: _id, email: email, name: name }));
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   obtenerIdUsuario();
  //   // eslint-disable-next-line
  // }, []);

  if (!user.name) {
    return <Cargando />;
  }
  return (
    <>
      <Sidebar />
      <div style={{ paddingTop: 50, paddingLeft: "70px" }}>
        <BannerBienvenida usuario={user.name} />
      </div>
    </>
  );
};

export default InicioUA;
