import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      fluid
      id="container-banner"
      className="p-5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="contenido-banner"
      >
        <h1>Conocé nuestras huellitas en busca de una casita...</h1>
        <p>...y dejá que marquen tú corazón.<span>|</span></p>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
