import React, { useState } from 'react';
import data from './data/data.json';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedBeast, setSelectedBeast] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [hornFilter, setHornFilter] = useState('');

  const handleBeastClick = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const filteredBeasts = data.filter(beast =>
    (beast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beast.keyword.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (hornFilter === '' || beast.horns === parseInt(hornFilter))
  );

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Gallery of Horns</Navbar.Brand>
        </Container>
      </Navbar>
      
      <Row className="justify-content-md-center mt-3">
        <Col md="auto">
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search for beasts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="me-2"
            />
            <Form.Select
              aria-label="Filter by number of horns"
              value={hornFilter}
              onChange={(e) => setHornFilter(e.target.value)}
            >
              <option value="">All Horns</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
            </Form.Select>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Row>

      <Gallery beasts={filteredBeasts} onBeastClick={handleBeastClick} />

      <SelectedBeast
        beast={selectedBeast}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      
      <Footer />
    </Container>
  );
}

export default App;
