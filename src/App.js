import React, { useState } from 'react';
import { Container, Navbar, Form, Card } from 'react-bootstrap';
import { acuteCodes, chronicCodes } from './codes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('Enter search term above to find the Dx type...');

  function handleInputChange({ target: { value } }) {
    setSearchTerm(value);
  }

  function setAndSearch(event) {
    event.preventDefault();
    if (searchTerm in acuteCodes) { 
      setResult('Acute');
    } else if (searchTerm in chronicCodes) {
      setResult('Chronic');
    } else {
      setResult('Diagnosis not found...');
    }
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Dx Lookup</Navbar.Brand>
      </Navbar>
      <Container className="App">
        <Form className="mt-3" onSubmit={setAndSearch}>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter Diagnosis Code..." onChange={handleInputChange}></Form.Control>
          </Form.Group>
        </Form>
        <Card>
          <Card.Body>
            <Card.Title>{result}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
