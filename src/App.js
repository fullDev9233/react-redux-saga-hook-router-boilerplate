import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class App extends React.Component {
  render() {
    return(
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>New React Bootstrap SPA</h1>
            <Button>Click</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
