import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import imagen from "../../assets/banner2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BotoneraDeAcciones = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const imagenHogar =
    "https://resizer.glanacion.com/resizer/nxQ2S7e-Y0eemPKm-ASvm_lC2jc=/1200x800/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3EP2T2RDLRGD5LPWUXNNZRKITU.jpg";
  const imagenDonacion =
    "https://media.istockphoto.com/id/1250318540/es/foto/doberman-dobermann-pata-de-perro-en-la-palma-de-una-mano-humana-de-cerca-sobre-un-fondo-de.jpg?s=612x612&w=0&k=20&c=lQvxgQLYhGW-zufjZUQxWd-DEcTJK-gLIMzqjwlVo4s=";
  const fondoBoton = (url) => {
    return { backgroundImage: `url('${url}')` };
  };

  const content = [
    {
      url: "",
      title: "¿Querés ser hogar de transito?",
      img: imagenHogar,
    },
    {
      url: "/adoptar",
      title: "Conocé a nuestras Huellitas",
      img: imagen,
    },
    {
      url: "/donaciones",
      title: "Haz tu donación aquí",
      img: imagenDonacion,
    },
  ];

  return (
    <Container id="botonera-de-acciones">
      <Container className="botonera-de-acciones-content">
        <hr />
        <h2 className="mb-5">
          Tus acciones hacen el cambio
        </h2>
          <h5 className="text-muted">
            La unión de pequeñas personas y acciones puede cambiar el mundo.
          </h5>
        <Row ref={ref} className="row" justify="center">
          {content.map((elem, i) => (
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={inView && { opacity: 1, translateY: 0 }}
              transition={{ delay: i / 3, duration: 0.5 }}
              key={i}
              sm={12}
              md={5}
              lg={3}
              className="col"
              style={fondoBoton(elem.img)}
            >
              <Link to={elem.url} style={{ width: "100%", height: "100%" }}>
                <div>
                  <p>{elem.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default BotoneraDeAcciones;
