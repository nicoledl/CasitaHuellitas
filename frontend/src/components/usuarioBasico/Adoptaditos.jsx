import { Col, Container, Row } from 'react-grid-system'

const Adoptaditos = () => {
  return (
    <Container id='adoptaditos'>
      <Row>
        <Col>
          <div style={{ height: '200px', width: '200px', backgroundColor: 'blue' }} />
        </Col>
        <Col>
          <div style={{ height: '200px', width: '200px', backgroundColor: 'red' }} />
        </Col>
        <Col>
          <div style={{ height: '200px', width: '200px', backgroundColor: 'green' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Adoptaditos
