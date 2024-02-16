import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function ModalF(props) {
  const { group, setGroup, crop, setCrop, f, setF } = props;
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

  const allFieldsFilled = group && crop && f;

  return (
    <>
      <Button
        style={{
          width: 220,
          height: 40,
          marginBottom: 15,
          marginLeft: windowWidth < 500 ? 0 : 5,
          position: "relative",
        }}
        variant="secondary"
        onClick={handleShow}
      >
        <span style={{ marginRight: 5 }}>Calculate f</span>
        {!allFieldsFilled ? (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            style={{
              position: "absolute",
              right: -12,
              top: -12,
              fontSize: "1.5em",
              color: "red",
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
              position: "absolute",
              right: -12,
              top: -12,
              fontSize: "1.5em",
              color: "green",
            }}
          />
        )}
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
                className={`form-control mb-3 ${group ? "is-valid" : ""}`}
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
                className={`form-control mb-3 ${crop ? "is-valid" : ""}`}
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
              className={`form-control mb-3 ${f ? "is-valid" : ""}`}
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
