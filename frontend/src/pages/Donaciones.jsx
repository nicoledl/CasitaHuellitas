import { Col, Container, Row } from "react-grid-system";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

const Donaciones = () => {
  const content = [
    {
      text: "Link de $100",
      url: "https://mpago.la/1V1hgUA",
    },
    {
      text: "Link de $500",
      url: "https://mpago.la/1V2wCGK",
    },
    {
      text: "Link de $1000",
      url: "https://mpago.la/1pC5XH5",
    },
    {
      text: "Link de $2000",
      url: "https://mpago.la/25vLRfj",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="container mb-5 justify-content-center"
        style={{
          display: "flex",
          padding: "150px 0",
          alignItems: "center",
        }}
      >
        <main
          style={{
            display: "grid",
            justifyItems: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/21/21545.png"
            alt="Imagen Corazón"
            style={{ width: "200px" }}
          />
          <h1
            className="text-center pb-5"
            style={{
              fontSize: "clamp(1.8rem, 6.4vw - 1rem, 3rem)",
            }}
          >
            ¿Nos ayudás a ayudarlos?
          </h1>
          <p
            className="text-center pl-3 pr-3"
            style={{
              fontSize: "clamp(1.1rem, 1.6vw + 0.3rem, 1.3rem)",
              maxWidth: "1000px",
            }}
          >
            Al dar una donación, no solo estás ayudando a proporcionar
            alimentos, refugio y atención médica a los animales necesitados,
            sino que también estás apoyando a los esfuerzos para educar a la
            comunidad sobre la importancia de la adopción responsable y la
            esterilización de mascotas.
          </p>
          <Row className="row w-100 mt-4">
            {content.map((elem, i) => (
              <Col xs={12} sm={6} md={6} lg={3} key={i} className="mt-3">
                <a
                  className="col pt-3 pb-3 btn btn-success btn-hover m-0"
                  href={elem.url}
                >
                  <p
                    className="h3 m-0"
                    style={{
                      fontSize: "clamp(1.1rem, 1.6vw + 0.3rem, 1.3rem)",
                    }}
                  >
                    {elem.text}
                  </p>
                </a>
              </Col>
            ))}
          </Row>
        </main>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Donaciones;
