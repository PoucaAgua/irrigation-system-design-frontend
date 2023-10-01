import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Maximum() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Maximum Actual Irrigation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maximum Actual Irrigation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="input1">
              <Form.Label>Input 1</Form.Label>
              <Form.Control type="text" placeholder="Digite algo" />
            </Form.Group>
            <Form.Group controlId="input2">
              <Form.Label>Input 2</Form.Label>
              <Form.Control type="text" placeholder="Digite algo" />
            </Form.Group>
            <Form.Group controlId="input3">
              <Form.Label>Input 3</Form.Label>
              <Form.Control type="text" placeholder="Digite algo" />
            </Form.Group>
            <Form.Group controlId="input4">
              <Form.Label>Input 4</Form.Label>
              <Form.Control type="text" placeholder="Digite algo" />
            </Form.Group>
            <Form.Group controlId="input5">
              <Form.Label>Input 5</Form.Label>
              <Form.Control type="text" placeholder="Digite algo" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Maximum;
