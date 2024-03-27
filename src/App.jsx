import React, { useState } from 'react';
import data from './data.json';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectedBeast, setSelectedBeast] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBeastClick = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const filteredBeasts = data.filter(beast =>
    beast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    beast.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
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
