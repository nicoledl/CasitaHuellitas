import { Col, Container, Row } from 'react-grid-system'

const Adoptaditos = () => {
  const fotoEstilo = { width: '230px', height: '190px', objectFit: 'cover' }
  const estiloCol = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

  const arrFotos = ['https://bestfriends.org/sites/default/files/2022-10/LeFouNicoleMar794A0770_LF_social.jpg', 'https://bestfriends.org/sites/default/files/2022-10/LeFouNicoleMar794A0770_LF_social.jpg', 'https://bestfriends.org/sites/default/files/2022-10/LeFouNicoleMar794A0770_LF_social.jpg']

  const mostrarFotos = (arr) => {
    return (
      <Row>
        {
          arr.map((url, i) => {
            return (
              <Col key={i} sm={12} md={4} style={estiloCol}>
                <div className='cartel'>
                  <img alt={`foto${i}`} src={url} style={fotoEstilo} />
                </div>
              </Col>
            )
          })
        }
      </Row>
    )
  }

  return (
    <Container fluid id='container-adoptados' style={{ textAlign: 'center' }}>
      <h1>Huellitas adoptadas</h1>
      {mostrarFotos(arrFotos)}
      {mostrarFotos(arrFotos)}
    </Container>
  )
}

export default Adoptaditos
