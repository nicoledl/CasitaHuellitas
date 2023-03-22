import React from 'react'
import { Container } from 'react-grid-system'

const Mision = () => {
  return (
    <Container fluid id='container-mision' style={{ maxWidth: '1200px' }}>
      <Container>
        <h1>Nuestra Misión</h1>
        <p>La misión de Casita Huellitas es proporcionar un hogar seguro, amoroso y temporal para perros y gatos que han sido abandonados, maltratados o que necesitan ser rescatados de situaciones de peligro. <br /><br />Nuestro objetivo es brindar atención médica, alimentación adecuada, y mucho cariño a nuestros huéspedes mientras les buscamos un hogar permanente y amoroso. También nos esforzamos por educar a la comunidad sobre la importancia de la adopción responsable, la esterilización y la vacunación de mascotas para prevenir la proliferación de animales en situación de abandono y maltrato. <br /><br />En Casita Huellitas, creemos que todos los animales merecen una segunda oportunidad y trabajamos arduamente para garantizar que cada uno de nuestros residentes reciba el amor y la atención que se merecen.</p>
      </Container>
    </Container>
  )
}

export default Mision
