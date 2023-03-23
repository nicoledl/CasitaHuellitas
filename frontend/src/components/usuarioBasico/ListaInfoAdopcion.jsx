import { Col, Container, Row } from 'react-grid-system'

const listaPuntos = ['Tener una mascota implica una gran responsabilidad, ya que debes asegurarte de que tu animal tenga una buena calidad de vida y se sienta cómodo y seguro en su hogar.',
  'Antes de adoptar o comprar una mascota, debes investigar y considerar el tipo de animal que mejor se adapte a tu estilo de vida y a tus necesidades. Además, debes asegurarte de que tienes suficiente espacio y recursos para cuidar adecuadamente de tu mascota.',
  'Las vacaciones pueden ser un desafío si tienes una mascota, ya que tendrás que encontrar un lugar adecuado para dejarla mientras estás fuera. Esto puede ser costoso, especialmente si necesitas un cuidador profesional o un alojamiento para mascotas. Si planeas viajar con tu mascota, debes investigar y prepararte cuidadosamente para asegurarte de que tu animal esté cómodo y seguro durante el viaje.',
  'Las mascotas pueden ser costosas, ya que requieren comida, juguetes, accesorios, atención veterinaria y otros gastos. Es importante que consideres el costo de cuidar a una mascota antes de decidir adoptar o comprar una.', 'Las mascotas necesitan atención y cuidados diarios, incluyendo paseos, alimentación, ejercicio y atención veterinaria regular. También debes asegurarte de que tu mascota tenga suficiente atención y compañía, especialmente si pasas muchas horas fuera de casa.',
  'Si te mudas con tu mascota, debes asegurarte de que el nuevo hogar sea adecuado para ella. También debes tomar medidas para reducir el estrés de la mudanza, como proporcionar a tu mascota un espacio seguro y familiar durante el proceso.',
  'Es importante recordar que las mascotas tienen necesidades y comportamientos únicos.',
  'Tiempo de soledad: Las mascotas necesitan compañía y no deben dejarse solas durante largos períodos de tiempo. Es importante tener en cuenta que algunos animales, como los perros, son especialmente sociales y pueden sufrir ansiedad por separación si se les deja solos con frecuencia.',
  'Paseos diarios: Los perros necesitan salir a pasear diariamente, y la cantidad de tiempo que necesitan varía según la raza. Algunos perros necesitan paseos cortos varias veces al día, mientras que otros necesitan largas caminatas para mantenerse activos y saludables.',
  'Adaptación: Cuando se adopta una mascota, puede tomar un tiempo para que se adapte a su nuevo hogar y familia. Los animales necesitan un período de adaptación de alrededor de 15 a 30 días para acostumbrarse a sus nuevos horarios, lugares y rutinas.',
  'Cuidados de un cachorro: Los cachorros requieren mucha atención y cuidado, y pueden hacer sus necesidades en diferentes lugares de la casa, masticar objetos, llorar por la noche, etc. Además, un cachorro puede crecer más de lo esperado y puede requerir más espacio y atención a medida que crece.',
  'Gastos: Tener una mascota puede ser costoso, desde los gastos iniciales de adopción o compra hasta los costos continuos de alimentos, cuidados veterinarios, juguetes y otros suministros.',
  'Compromiso a largo plazo: Tener una mascota es un compromiso a largo plazo. Debes estar preparado para cuidar de ella durante toda su vida, lo que puede ser hasta 15 años o más dependiendo de la especie.',
  'Responsabilidad legal: Como dueño de una mascota, eres legalmente responsable de su bienestar. Si tu mascota causa daños a alguien o a la propiedad de alguien, puedes ser responsable legalmente.',
  'Cuidado de la salud: Las mascotas también requieren cuidado médico regular para mantener su salud. Esto puede incluir vacunas, chequeos regulares y tratamientos para problemas de salud. Como dueño, eres responsable de asegurarte de que tu mascota reciba el cuidado médico adecuado.']

const ListaInfoAdopcion = () => {
  return (
    <Container fluid style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <Container className='lista-info-adopcion' style={{ maxWidth: '1000px', paddingTop: '50px' }}>
        <h1 style={{ fontSize: '2.3rem', color: '#20d9b1' }}>Información pre-adopción.</h1>
        <h2>Lo que debés tener en cuenta antes de incorporar a un peludin a tu familia.</h2>
        <Row className='row' style={{ gap: '25px', marginTop: '50px' }}>
          {listaPuntos.map((puntos, i) => {
            const estiloCol = { backgroundColor: '#fff', padding: '20px', borderRadius: '5px 0px 20px 0px', borderTop: '3px solid #FFCC4E', borderLeft: '10px solid #FFCC4E' }
            return (
              <Col key={i} md={12} className='col' style={estiloCol}>
                <p style={{ fontSize: '1.3rem', lineHeight: '22px' }}>∙ {puntos}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default ListaInfoAdopcion
