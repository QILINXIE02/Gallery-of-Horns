import React from 'react';
import HornedBeast from './HornedBeast';
import beastsData from './data.json';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
  return (
    <Container>
      <Row>
        {beastsData.map(beast => (
          <Col md={4} key={beast._id}>
            <HornedBeast 
              title={beast.title} 
              imageUrl={beast.image_url} 
              description={beast.description} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
