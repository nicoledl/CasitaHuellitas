import Navbar from "../components/commons/Navbar";
import Banner from "../components/usuarioBasico/Banner";
import Adoptaditos from "../components/usuarioBasico/Adoptaditos";
import Mision from "../components/usuarioBasico/Mision";
import BotoneraDeAcciones from "../components/usuarioBasico/BotoneraDeAcciones";
import Footer from "../components/commons/Footer";

const Inicio = () => {

  return (
    <>
      <Navbar />
      <Banner />
      <Mision />
      <Adoptaditos />
      <BotoneraDeAcciones />
      <Footer />
    </>
  );
};

export default Inicio;
