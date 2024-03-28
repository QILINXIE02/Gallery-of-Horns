import React, { useState } from 'react';
import data from './data/data.json';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import { Form } from 'react-bootstrap';
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
    <>
      <Header />
      <Form>
        <Form.Group controlId="hornFilter">
          <Form.Label>Filter by number of horns</Form.Label>
          <Form.Control as="select" value={hornFilter} onChange={(e) => setHornFilter(e.target.value)}>
            <option value="">All</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100 Horns</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <input
        type="text"
        placeholder="Search for beasts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Gallery beasts={filteredBeasts} onBeastClick={handleBeastClick} />
      <SelectedBeast
        beast={selectedBeast}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <Footer />
    </>
  );
}

export default App;
