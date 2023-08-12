import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EToComponent from '../ui-components/EToComponent';
import { useState } from 'react';
import IrrigationSystemDesignService from '../services/irrigation_system_design_backend'

const irrigationSystemDesignService = new IrrigationSystemDesignService();


function EToModalComponent({ showModal, onClose, eto, setEto }) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);

  const [radiation, setRadiation] = useState(0);
  const [tmax, setTmax] = useState(0);
  const [tmin, setTmin] = useState(0);
  const [tmed, setTmed] = useState(0);


  const etoComponentOverrides = {
    Radiation: {
      onChange: (event) => {
        setRadiation(event.target.value);
      },
      type: "number"
    },
    Tmax: {
      onChange: (event) => {
        setTmax(event.target.value);
      },
      type: "number"
    },
    Tmed: {
      onChange: (event) => {
        setTmed(event.target.value);
      },
      type: "number"
    },
    Tmin: {
      onChange: (event) => {
        setTmin(event.target.value);
      },
      type: "number"
    },
    CalculateButton: {
      onClick: async () => {
        setLoadingCalculate(true);
        const payload = {
          temperature_med: tmed,
          temperature_max: tmax,
          temperature_min: tmin,
          radiation: radiation,
        }
        const response = await irrigationSystemDesignService.calculateEto(payload)
        setEto(parseFloat(response.value.toFixed(2)));
        setLoadingCalculate(false);
      },

    },
    SaveButton: {
      onClick: () => {
        alert("SaveButton need be implemented....")
      }
    },
    ETo: {
      value: loadingCalculate ? "Loading..." : eto,
    }

  }

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>ETo Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EToComponent
          ETo={eto}
          overrides={etoComponentOverrides}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EToModalComponent;