import { useNavigate } from "react-router-dom";

const BotonParaAdoptantes = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="mt-4" style={{ display: "grid", justifyItems: "center" }}>
      <h1 className="mb-3">
        <span style={{ transform: "scaleX(-1)", display: "inline-block" }}>
          🐈
        </span>
        Refugio huellitas🐕
      </h1>
      <button
        className="btn btn-success btn-hover p-2 pl-5 pr-5 m-2 mt-4"
        style={{ fontSize: "1.5rem" }}
        onClick={handleClick}
      >
        ¡Conocenos!
      </button>
    </div>
  );
};

export default BotonParaAdoptantes;
