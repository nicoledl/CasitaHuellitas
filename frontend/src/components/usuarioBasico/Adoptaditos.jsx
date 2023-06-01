import { Container } from "react-grid-system";
import photos from "./photos.json";

const Adoptaditos = () => {
  return (
    <div id="mural-adoptados">
      <Container
        className="mural-adoptados h-100"
        style={{ textAlign: "center" }}
      >
        <hr />
        <h1 className="m-5" style={{ color: "#292929" }}>
          Mural Huellitas adoptadas
        </h1>
        <main className="container mt-5" style={{ maxWidth: "1200px" }}>
          {photos.map((elem, i) => (
            <img
              className="m-1"
              key={i}
              src={elem.src}
              alt="Foto Mascota Adoptada"
            />
          ))}
        </main>
      </Container>
    </div>
  );
};

export default Adoptaditos;
