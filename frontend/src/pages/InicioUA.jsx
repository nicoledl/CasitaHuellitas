import Sidebar from "../components/commons/Sidebar";
import Cargando from "../components/commons/Cargando";
import BannerBienvenida from "../components/usuarioAvanzado/BannerBienvenida";
import { useSelector } from "react-redux";

const InicioUA = () => {
  const user = useSelector((state) => state.user);

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
