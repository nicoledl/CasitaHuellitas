import BotonParaAdoptantes from "../components/sesion/BotonParaAdoptantes";
import Login from "../components/sesion/Login";

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
  return (
    <div className="ingreso">
      <div style={styleDiv}>
        <BotonParaAdoptantes />
        <div className="mt-4" style={styleDivisor}>
          <span id="divisor-l" />
          <p>O</p> <span id="divisor-r" />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Ingreso;
