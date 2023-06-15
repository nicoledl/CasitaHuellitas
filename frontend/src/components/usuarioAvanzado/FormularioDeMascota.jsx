import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Col, Row } from "react-grid-system";

const Formulario = ({action, setAction}) => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (datos) => {
    try {
      await axios.post("http://localhost:3001/api/mascotas", datos, {
        withCredentials: true,
      })
      .then(()=> setAction(!action))
      setIsOpen(false);
      reset();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const formularioMascota = () => {
    const date = new Date().toLocaleString();

    return (
      <div className="modal">
        <div className="modal-content m-3">
          <form id="formulario-mascota" onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
              Agregar Huellita
            </h3>
            <Row>
              <Col xs={12} sm={6} md={6} className="d-flex">
                <select
                  {...register("animal", {
                    required: "Este campo es requerido",
                  })}
                  className="input-group input-group-sm p-1"
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
                />
              </Col>
            </Row>
            <textarea
              className="input-group input-group-sm"
              type="text"
              placeholder="Nota"
              {...register("note")}
              style={{ resize: "none" }}
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
            <input
              type="hidden"
              value={date}
              {...register("date", { required: "Este campo es requerido" })}
            />
            <Row>
              <Col className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Agregar
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
    );
  };

  return (
    <div
      className="position-relative d-flex carta-mascota-nueva"
      style={{cursor:"pointer"}}
      onClick={() => setIsOpen(true)}
    >
      <span className="btn btn-secondary position-absolute d-flex justify-content-center align-items-center rounded-circle font-weight-bold text-white">
        +
      </span>
      {isOpen && formularioMascota()}
    </div>
  );
};

export default Formulario;
