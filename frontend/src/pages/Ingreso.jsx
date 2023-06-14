import { useSelector } from "react-redux";
import BotonParaAdoptantes from "../components/sesion/BotonParaAdoptantes";
import Login from "../components/sesion/Login";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const styleDiv = {
  marginLeft: "5%",
  marginRight: "5%",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  height: "fit-content",
};
const styleDivisor = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "fit-content",
};

const Ingreso = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name) {
      return navigate("/administracion");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="ingreso"
    >
      <div style={styleDiv}>
        <BotonParaAdoptantes />
        <div className="mt-4" style={styleDivisor}>
          <span id="divisor-l" />
          <p>O</p> <span id="divisor-r" />
        </div>
        <Login />
      </div>
    </motion.div>
  );
};

export default Ingreso;
