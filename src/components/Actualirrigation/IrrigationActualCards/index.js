import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalAtmospheric from "../IrrigationActualModals/irrigation_by_atmospheric";
//import ModalSoil from "../IrrigationActualModals/irrigation_by_soil";
//import ModalMaximum from "../IrrigationActualModals/maximum_actual_irrigation";
//import { SoilComponentOverrides } from "../IrrigationActualCalculate/irrigation_by_soil";
//import { MaximumComponentOverrides } from "../IrrigationActualCalculate/maximum_actual_irrigation";
import { createAtmosphericComponentOverrides } from "../IrrigationActualCalculate/irrigation_by_atmospheric/index";
import IrrigationSystemDesignService from "../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function IrrigationCardActual(Atmospheric) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [resultAtmospheric, setResultAtmospheric] = useState(null);
  const [kc, setKc] = useState("");
  const [percentwettedarea, setPercentwettedarea] = useState("");
  const [actualevapotranspiration, setActualevapotranspiration] = useState("");

  const AtmosphericComponentOverrides = createAtmosphericComponentOverrides({
    irrigationSystemDesignService,
    setValidationError,
    setLoadingCalculate,
    loadingCalculate,
    validationError,
    resultAtmospheric,
    kc,
    setKc,
    percentwettedarea,
    setPercentwettedarea,
    actualevapotranspiration,
    setActualevapotranspiration,
    setResultAtmospheric,
    Atmospheric,
  });

  /*const SoilComponentOverrides = createSoilComponentOverrides({
    irrigationSystemDesignService,
  });
 
  const MaximumComponentOverrides = createMaximumComponentOverrides({
    irrigationSystemDesignService,
  });
*/

  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Actual irrigation by atmospheric params</Card.Title>
              <ModalAtmospheric
                AtmosphericComponentOverrides={AtmosphericComponentOverrides}
                irrigationSystemDesignService={irrigationSystemDesignService}
                setValidationError={setValidationError}
                setLoadingCalculate={setLoadingCalculate}
                loadingCalculate={loadingCalculate}
                validationError={validationError}
                resultAtmospheric={resultAtmospheric}
                kc={kc}
                setKc={setKc}
                percentwettedarea={percentwettedarea}
                setPercentwettedarea={setPercentwettedarea}
                actualevapotranspiration={actualevapotranspiration}
                setActualevapotranspiration={setActualevapotranspiration}
                setResultAtmospheric={setResultAtmospheric}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Maximum actual irrigation</Card.Title>
              <ModalMaximum
                MaximumComponentOverrides={MaximumComponentOverrides}
              />
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Actual irrigation by soil params</Card.Title>
              <ModalSoil SoilComponentOverrides={SoilComponentOverrides} />
            </Card.Body>
          </Card>
        </Col>
        */}
      </Row>
    </Container>
  );
}

export default IrrigationCardActual;
