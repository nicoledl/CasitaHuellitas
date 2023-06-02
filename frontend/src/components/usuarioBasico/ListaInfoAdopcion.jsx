import { Col, Container, Row } from "react-grid-system";
import { FaExclamationCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const listaPuntos = [
  "Antes de adoptar o comprar una mascota, debes investigar y considerar el tipo de animal que mejor se adapte a tu estilo de vida y a tus necesidades. Además, debes asegurarte de que tienes suficiente espacio y recursos para cuidar adecuadamente de tu mascota.",
  "Las vacaciones pueden ser un desafío si tienes una mascota, ya que tendrás que encontrar un lugar adecuado para dejarla mientras estás fuera. Esto puede ser costoso, especialmente si necesitas un cuidador profesional o un alojamiento para mascotas. Si planeas viajar con tu mascota, debes investigar y prepararte cuidadosamente para asegurarte de que tu animal esté cómodo y seguro durante el viaje.",
  "Las mascotas pueden ser costosas, ya que requieren comida, juguetes, accesorios, atención veterinaria y otros gastos. Es importante que consideres el costo de cuidar a una mascota antes de decidir adoptar o comprar una.",
  "Compromiso a largo plazo: Tener una mascota es un compromiso a largo plazo. Debes estar preparado para cuidar de ella durante toda su vida, lo que puede ser hasta 15 años o más dependiendo de la especie.",
  "Tiempo de soledad: Las mascotas necesitan compañía y no deben dejarse solas durante largos períodos de tiempo. Es importante tener en cuenta que algunos animales, como los perros, son especialmente sociales y pueden sufrir ansiedad por separación si se les deja solos con frecuencia.",
  "Paseos diarios: Los perros necesitan salir a pasear diariamente, y la cantidad de tiempo que necesitan varía según la raza. Algunos perros necesitan paseos cortos varias veces al día, mientras que otros necesitan largas caminatas para mantenerse activos y saludables.",
  "Adaptación: Cuando se adopta una mascota, puede tomar un tiempo para que se adapte a su nuevo hogar y familia. Los animales necesitan un período de adaptación de alrededor de 15 a 30 días para acostumbrarse a sus nuevos horarios, lugares y rutinas.",
  "Cuidados de un cachorro: Los cachorros requieren mucha atención y cuidado, y pueden hacer sus necesidades en diferentes lugares de la casa, masticar objetos, llorar por la noche, etc. Además, un cachorro puede crecer más de lo esperado y puede requerir más espacio y atención a medida que crece.",
  "Gastos: Tener una mascota puede ser costoso, desde los gastos iniciales de adopción o compra hasta los costos continuos de alimentos, cuidados veterinarios, juguetes y otros suministros.",
  "Responsabilidad legal: Como dueño de una mascota, eres legalmente responsable de su bienestar. Si tu mascota causa daños a alguien o a la propiedad de alguien, puedes ser responsable legalmente.",
  "Cuidado de la salud: Las mascotas también requieren cuidado médico regular para mantener su salud. Esto puede incluir vacunas, chequeos regulares y tratamientos para problemas de salud. Como dueño, eres responsable de asegurarte de que tu mascota reciba el cuidado médico adecuado.",
];

const ListaInfoAdopcion = () => {
  return (
    <Container fluid className="info-adopcion">
      <div
        className="container lista-info-adopcion pt-s5"
        style={{ padding: "80px 0 140px" }}
      >
        <motion.h1
          initial={{ opacity: 0, translateY:-10 }}
          animate={{ opacity: 1, translateY:1 }}
          className=" pt-5 pb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Información pre-adopción.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-secondary h5"
        >
          Tener una mascota implica una gran responsabilidad. Estos son los
          puntos que debés tener en cuenta antes de incorporar a un peludin a tu
          familia.
        </motion.p>
        <Row
          className="row container"
          style={{ gap: "25px", marginTop: "50px" }}
        >
          {listaPuntos.map((puntos, i) => {
            const estiloCol = {
              padding: "20px",
              borderTop: `4px solid #FFCC4E`,
            };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, translateY:-10 }}
                animate={{ opacity: 1, translateY:1 }}
                transition={{ delay: i / 3, duration: 0.6 }}
              >
                <Col md={12} className="col bg-white" style={estiloCol}>
                  <p style={{ lineHeight: "22px", fontSize: "1.1rem" }}>
                    <FaExclamationCircle className="" /> {puntos}
                  </p>
                </Col>
              </motion.div>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default ListaInfoAdopcion;
