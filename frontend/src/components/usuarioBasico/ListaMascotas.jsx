import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import imagenPerro from "../../assets/perro-default.png";
import imagenGato from "../../assets/gato-default.png";
import { Oval } from "react-loader-spinner";
import FormularioDeAdopcion from "./FormularioDeAdopcion";

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [formulario, setFormulario] = useState(false);
  const [mascotaSelected, setMascotaSelected] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const baseUrl = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`${baseUrl}/api/mascotas`)
          .then((res) =>
            res.data.filter((mascota) => mascota.inAdoption === true)
          )
          .then((res) => setMascotas(res));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  setTimeout(() => {
    setShowContent(true);
  }, 3000);

  if (mascotas[0] === undefined) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {showContent ? (
          <p>Aún no hay huellitas en adopción...</p>
        ) : (
          <Oval
            height={100}
            width={100}
            color="#FFCC4E"
            wrapperStyle={{}}
            wrapperClass=""
            visible
            ariaLabel="oval-loading"
            secondaryColor="#FFCC4E"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
      </Container>
    );
  }

  return (
    <Container className="pt-5 pb-5">
      {formulario ? (
        <FormularioDeAdopcion
          mascota={mascotaSelected}
          setFormulario={setFormulario}
        />
      ) : (
        <Row className="pt-5 pb-5">
          {mascotas.map((mascota) => {
            return (
              <Col
                md={12}
                xl={6}
                xxl={4}
                className="w-100 p-3 d-flex justify-content-center "
                key={mascota._id}
              >
                <div
                  className="bg-white p-2 rounded "
                  style={{
                    height: "310px",
                    width: "500px",
                  }}
                >
                  <p className="text-bolder">
                    Nombre: <b>{mascota.name}</b>
                  </p>
                  <section className="d-flex">
                    <img
                      alt={mascota.name}
                      className="w-50 rounded"
                      style={{ objectFit: "cover" }}
                      src={
                        mascota.animal === "Perro" ? imagenPerro : imagenGato
                      }
                    />
                    <section className="p-2 text-capitalize w-50">
                      <p>Edad: {mascota.age}</p>
                      <p>Tamaño: {mascota.size}</p>
                      <p
                        style={{
                          height: "170px",
                          overflowY: "scroll",
                        }}
                      >
                        Nota: {mascota.note}
                      </p>
                    </section>
                  </section>
                  <button
                    className="btn btn-link border border-0 w-100 text-uppercase"
                    onClick={() => {
                      setMascotaSelected(mascota);
                      setFormulario(true);
                    }}
                  >
                    Solicitud de adopción
                    <i className="pl-2 bi bi-envelope-heart"></i>
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default ListaMascotas;
