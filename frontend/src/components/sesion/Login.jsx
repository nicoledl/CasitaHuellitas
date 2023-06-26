import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const baseUrl = "http://localhost:3001";
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (datos) => {
    try {
      await axios
        .post(`${baseUrl}/api/usuarios/login`, datos, {
          withCredentials: true,
        })
        .then(() => navigate("/administracion"));
    } catch (error) {
      const errorMessage = error?.response?.data?.message;

      setErrorMessage(
        errorMessage === "Contraseña incorrecta" ||
          errorMessage === "Usuario no encontrado"
          ? "El correo o la contraseña son incorrectos"
          : "Ocurrió un error al procesar la solicitud"
      );
    }
  };

  return (
    <form
      className="formulario-login mt-5 mb-1 text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4>Si sos administrador...</h4>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
      <input
        type="email"
        placeholder="Mail"
        {...register("email", { required: true })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: true })}
      />
      <button className="btn btn-warning btn-hover p-2 pl-5 pr-5 m-2">
        Ingresar
      </button>
    </form>
  );
};

export default Login;
