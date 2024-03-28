import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectedBeast({ beast, show, onHide }) {
  if (!beast) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast.image_url} alt={beast.title} style={{ width: '100%' }} />
        <p>{beast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;
