/* eslint-disable react/jsx-closing-tag-location */
// import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ingreso from "./pages/Ingreso";
import InicioUA from "./pages/InicioUA";
import InicioUB from "./pages/InicioUB";
import Mascotas from "./pages/Mascotas";
import Adoptados from "./pages/Adoptados";
import ContactosVoluntarios from "./pages/ContactosVoluntarios";
import Calendario from "./pages/Calendario";
import MascotasEnAdopcion from "./pages/MascotasEnAdopcion";
import Solicitudes from "./pages/Solicitudes";
import InfoPreAdopcion from "./pages/InfoPreAdopcion";
import Donaciones from "./pages/Donaciones";
import { getData } from "./utils/getData";

const App = () => {
  getData();

  return (
    <Router>
      <Routes>
        {/* RUTAS USUARIO AVANZADO */}
        <Route path="/administracion" element={<InicioUA />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/adoptados" element={<Adoptados />} />
        {/* <Route
          path="/contactosvoluntarios"
          element={<ContactosVoluntarios />}
        /> */}
        <Route path="/solicitudes" element={<Solicitudes />} />
        {/* <Route path="/calendario" element={<Calendario />} /> */}
        {/* RUTAS INVITADO */}
        <Route path="/ingreso" element={<Ingreso />} />
        <Route path="/" element={<InicioUB />} />
        <Route path="/adoptar" element={<MascotasEnAdopcion />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/info-pre-adopcion" element={<InfoPreAdopcion />} />
      </Routes>
    </Router>
  );
};

export default App;
