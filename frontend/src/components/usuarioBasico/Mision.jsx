import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Mision = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const content = [
    {
      title: "Misión",
      content:
        "La misión de Casita Huellitas es proporcionar un hogar seguro, amoroso y temporal para perros y gatos que han sido abandonados, maltratados o que necesitan ser rescatados de  situaciones de peligro.",
    },
    {
      title: "Objetivo",
      content:
        "Nuestro objetivo es brindar atención necesaria a nuestras huellitas mientras les buscamos un hogar permanente. Nos esforzamos por comunicar sobre la importancia de la adopción responsable, la esterilización y la vacunación de mascotas.",
    },
  ];

  return (
    <Container
      fluid
      className="container-mision"
      style={{ maxWidth: "1000px" }}
    >
      <div className="m-1" ref={ref}>
        <Row>
          <Col md={12} className="p-5 t-5" style={{ height: "400px" }}>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: 0.1 }}
              style={{ fontSize: "clamp(2.8rem, 10.7vw - 2.7rem, 4rem)" }}
            >
              ¡Bienvenido!
            </motion.h1>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, translateY: -15 }}
              animate={inView && { opacity: 1, translateY: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              En Casita Huellitas, creemos que todos los animales merecen una
              segunda oportunidad y trabajamos arduamente para garantizar que
              cada uno de nuestras huellitas reciba el amor y la atención que se
              merecen.
            </motion.p>
          </Col>
          <Col md={6} className="d-flex align-items-center p-5">
            <div className="w-100">
              {content.map((elem, i) => (
                <div key={i} onClick={() => setSelected(elem.content)}>
                  <motion.h2
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView && { opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="font-weight-bold text-uppercase text-warning"
                  >
                    {elem.title}
                  </motion.h2>
                  <motion.p
                    ref={ref}
                    initial={{ opacity: 0, translateY: -15 }}
                    animate={inView && { opacity: 1, translateY: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="text-left text-secondary"
                  >
                    {elem.content}
                  </motion.p>
                  <hr />
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <motion.img
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView && { opacity: 1, scale: [0, 1.1, 1] }}
              transition={{ delay: 1.6, duration: 1, ease: "easeInOut" }}
              className="h-100 w-100 p-4"
              src="https://static.fundacion-affinity.org/cdn/farfuture/sQTMY-zwWwaYsJQhMI6ArfF-hy4hEvunLT93AyJwYGg/mtime:1655819517/sites/default/files/protectoras-vinculadas-al-estudio-el-nunca-lo-haria-2022.jpg"
              alt="Foto Refugio"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                borderRadius: "50px",
              }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Mision;
