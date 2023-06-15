import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import imagenPerro from "../../assets/perro-default.png";
import imagenGato from "../../assets/gato-default.png";
import { useForm } from "react-hook-form";
import Formulario from "./FormularioDeMascota";

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState(false);
  const [selectedMascota, setSelectedMascota] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const baseUrl = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/mascotas`);
        setMascotas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [action]);

  const onSubmit = async (datos) => {
    try {
      await axios
        .put(`${baseUrl}/api/mascotas/${selectedMascota._id}`, datos)
        .then(() => setAction(!action));
      setIsOpen(false);
    } catch (error) {
      console.error("Error al modificar los datos:", error);
    }
    reset();
  };

  const borrarMascota = (id) => {
    axios
      .delete(`${baseUrl}/api/mascotas/${id}`)
      .then(() => setAction(!action))
      .catch((error) => console.error(error));
  };

  const checkAdopcion = (id, inAdoption) => {
    axios
      .put(`${baseUrl}/api/mascotas/en-adopcion/${id}`, {
        inAdoption: !inAdoption,
      })
      .then(() => setAction(!action))
      .catch((error) => console.error(error));
  };

  const editarMascota = () => {
    const { size, breed, inAdoption, animal, name, important, note } =
      selectedMascota;
    return (
      <div id="modal">
        <div className="modal">
          <div className="modal-content m-2">
            <form id="formulario-mascota" onSubmit={handleSubmit(onSubmit)}>
              <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
                Editar Huellita
              </h3>
              <Row>
                <Col xs={12} sm={6} md={6} className="d-flex">
                  <select
                    {...register("animal", {
                      required: "Este campo es requerido",
                    })}
                    className="input-group input-group-sm p-1"
                    defaultValue={animal}
                  >
                    <option value="undefind">Animal</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                  </select>
                </Col>
                <Col xs={12} sm={6} md={6} className="d-flex">
                  <select
                    {...register("size", {
                      required: "Este campo es requerido",
                    })}
                    className="input-group input-group-sm p-1"
                    defaultValue={size}
                  >
                    <option value="undefind">Tamaño</option>
                    <option value="grande">Grande</option>
                    <option value="mediano">Mediano</option>
                    <option value="pequeño">Pequeño</option>
                  </select>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={6} md={6}>
                  <input
                    className="input-group input-group-sm"
                    type="text"
                    placeholder="Raza"
                    {...register("breed", {
                      required: "Este campo es requerido",
                    })}
                    defaultValue={breed}
                  />
                </Col>
                <Col xs={12} sm={6} md={6}>
                  <input
                    className="input-group input-group-sm"
                    type="text"
                    placeholder="Nombre"
                    {...register("name", {
                      required: "Este campo es requerido",
                    })}
                    defaultValue={name}
                  />
                </Col>
              </Row>
              <textarea
                className="input-group input-group-sm"
                type="text"
                placeholder="Nota"
                {...register("note")}
                style={{ resize: "none" }}
                defaultValue={note}
              />

              <Row>
                <Col xs={12} sm={6} md={6}>
                  <label className="d-block m-0">*Importante:</label>
                  <select
                    className="input-group input-group-sm p-1"
                    placeholder="Importante"
                    {...register("important", {
                      required: "Este campo es requerido",
                    })}
                    defaultValue={important}
                  >
                    <option value={false}>-</option>
                    <option value={true}>Importante</option>
                  </select>
                  <p
                    className="text-secondary "
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    *Si el animal se encuentra en una situción critica.
                  </p>
                </Col>
                <Col xs={12} sm={6} md={6}>
                  <label className="d-block m-0">*Apto para adopción: </label>
                  <select
                    className="input-group input-group-sm p-1"
                    placeholder="En Adopción"
                    {...register("inAdoption", {
                      required: "Este campo es requerido",
                    })}
                    defaultValue={inAdoption}
                  >
                    <option value={false}>-</option>
                    <option value={true}>Apto</option>
                  </select>
                  <p
                    className="text-secondary"
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    *No marcar si este animal no está apto para ser adoptado.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsOpen(false);
                      reset();
                    }}
                    className="btn btn-danger"
                  >
                    Cancelar
                  </button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const fecha = (date) => {
    const dateObj = new Date(date);
    const dia = dateObj.getDate();
    const mes = dateObj.getMonth() + 1;
    const año = dateObj.getFullYear();
    const hora = dateObj.getHours();
    const minutos = dateObj.getMinutes();

    const fechaFormateada = `${dia < 10 ? "0" + dia : dia}-${
      mes < 10 ? "0" + mes : mes
    }-${año} ${hora}:${minutos}`;

    return fechaFormateada;
  };

  return (
    <Container id="container-mascotas">
      <Row>
        <Col className="display-de-mascota" sm={12} md={6} xl={4} xxl={3}>
          <Formulario action={action} setAction={setAction} />
        </Col>
        {mascotas.length !== 0 &&
          mascotas.map((mascotaData) => {
            const { _id, date, animal, name, important, note, inAdoption } =
              mascotaData;

            return (
              <Col
                key={_id}
                sm={12}
                md={6}
                xl={4}
                xxl={3}
                className="display-de-mascota"
              >
                <div className="carta-mascota">
                  <section className="w-100 d-flex p-relative p-3 align-items-center">
                    <img
                      alt={name}
                      src={
                        animal === "perro"
                          ? imagenPerro
                          : animal === "gato"
                          ? imagenGato
                          : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
                      }
                      className="rounded-circle"
                      style={{ height: "100px", width:"100px", objectFit: "cover" }}
                    />
                    <section className="ml-2">
                      <h4 className="m-0 text-capitalize">{name}</h4>
                      <h5 className="m-0 text-capitalize">{animal}</h5>
                      <h5 className="text-capitalize">{fecha(date)}</h5>
                    </section>
                  </section>
                  <section
                    className={`w-100 text-center text-white d-flex justify-content-center align-items-center ${
                      important === true && inAdoption === false && "bg-danger"
                    }`}
                    style={{ height: "30px" }}
                  >
                    {important === true && inAdoption === false && (
                      <h5 className="m-0 text-uppercase">Importante</h5>
                    )}
                  </section>
                  <section
                    className="border m-2 p-1 rounded"
                    style={{ height: "110px", overflowY: "scroll" }}
                  >
                    <p>{note}</p>
                  </section>
                  <section className="w-100 d-flex justify-content-around">
                    <button
                      className="border border-0 bg-transparent"
                      onClick={() => {
                        setSelectedMascota(mascotaData);
                        setIsOpen(true);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn border border-0 bg-transparent text-danger"
                      onClick={() => borrarMascota(_id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                    <button
                      className={`btn border border-0 bg-transparent ${
                        inAdoption === true ? "text-success" : "text-secondary"
                      }`}
                      onClick={() => checkAdopcion(_id, inAdoption)}
                    >
                      <i className="bi bi-clipboard2-check"></i>
                    </button>
                    <button className="btn border border-0 bg-transparent">
                      <i className="bi bi-door-open"></i>
                    </button>
                  </section>
                </div>
              </Col>
            );
          })}
        {isOpen && selectedMascota && editarMascota()}
      </Row>
    </Container>
  );
};

export default ListaMascotas;
