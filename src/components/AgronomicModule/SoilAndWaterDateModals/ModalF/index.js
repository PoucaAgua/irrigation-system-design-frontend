import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalF(group, setGroup, crop, setCrop, f, setF) {
  const [show, setShow] = useState(false);
  const [windowWidth] = useState(window.innerWidth);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGroup = (e) => {
    setGroup(e.target.value);
  };

  const handleCrop = (e) => {
    setCrop(e.target.value);
  };

  const handleF = (e) => {
    setF(e.target.value);
  };

  return (
    <>
      <Button
        style={{
          width: 220,
          height: 40,
          marginBottom: 15,
          marginLeft: windowWidth < 500 ? 0 : 5,
        }}
        variant="secondary"
        onClick={handleShow}
      >
        Calculate f
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Depletion factor or soil water consumption factor - f
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <label htmlFor="option2">Group:</label>
              <select
                id="option1"
                className="form-control mb-3"
                value={group}
                onChange={handleGroup}
              >
                <option value="">Select Group</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="option2">Crop:</label>
              <select
                id="option2"
                className="form-control mb-3"
                value={crop}
                onChange={handleCrop}
              >
                <option value="">Select Crop</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input">f:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter something..."
              value={f}
              onChange={handleF}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalF;
