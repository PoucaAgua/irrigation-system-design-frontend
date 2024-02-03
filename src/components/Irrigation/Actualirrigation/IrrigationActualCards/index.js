import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalAtmospheric from "../IrrigationActualModals/irrigation_by_atmospheric";
import ModalSoil from "../IrrigationActualModals/irrigation_by_soil";
import ModalMaximum from "../IrrigationActualModals/maximum_actual_irrigation";
import { createMaximumComponentOverrides } from "../IrrigationActualCalculate/maximum_actual_irrigation/index";
import { createAtmosphericComponentOverrides } from "../IrrigationActualCalculate/irrigation_by_atmospheric/index";
import { createSoilComponentOverrides } from "../IrrigationActualCalculate/irrigation_by_soil/index";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function IrrigationCardActual(Atmospheric, SoilParams, Maximum) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultAtmospheric, setResultAtmospheric] = useState(null);
  const [kc, setKc] = useState("");
  const [percentwettedarea, setPercentwettedarea] = useState("");
  const [actualevapotranspiration, setActualevapotranspiration] = useState("");
  const [fractionOfTotalWettedArea, setFractionOfTotalWettedArea] =
    useState("");
  const [resultMaximum, setResultMaximum] = useState(null);
  const [resultSoilParams, setResultSoilParams] = useState(null);
  const [soilMoistureFieldCapacity, setSoilMoistureFieldCapacity] =
    useState("");
  const [
    soilMoistureAtPermanentWiltingPoint,
    setSoilMoistureAtPermanentWiltingPoint,
  ] = useState("");
  const [depletionFactor, setDepletionFactor] = useState("");
  const [soilDepth, setSoilDepth] = useState("");
  const [effectivePrecipitation, setEffectivePrecipitation] = useState("");

  const AtmosphericComponentOverrides = createAtmosphericComponentOverrides({
    irrigationSystemDesignService,
    setLoadingCalculate,
    loadingCalculate,
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

  const SoilComponentOverrides = createSoilComponentOverrides({
    irrigationSystemDesignService,
    resultSoilParams,
    setResultSoilParams,
    soilMoistureFieldCapacity,
    setSoilMoistureFieldCapacity,
    soilMoistureAtPermanentWiltingPoint,
    setSoilMoistureAtPermanentWiltingPoint,
    depletionFactor,
    setDepletionFactor,
    soilDepth,
    setSoilDepth,
    effectivePrecipitation,
    setEffectivePrecipitation,
    setLoadingCalculate,
    loadingCalculate,
    SoilParams,
  });

  const MaximumComponentOverrides = createMaximumComponentOverrides({
    irrigationSystemDesignService,
    soilMoistureFieldCapacity,
    setSoilMoistureFieldCapacity,
    soilMoistureAtPermanentWiltingPoint,
    setSoilMoistureAtPermanentWiltingPoint,
    depletionFactor,
    setDepletionFactor,
    soilDepth,
    setSoilDepth,
    effectivePrecipitation,
    setEffectivePrecipitation,
    fractionOfTotalWettedArea,
    setFractionOfTotalWettedArea,
    resultMaximum,
    setResultMaximum,
    loadingCalculate,
    setLoadingCalculate,
    Maximum,
  });

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
                setLoadingCalculate={setLoadingCalculate}
                loadingCalculate={loadingCalculate}
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
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Actual irrigation by soil params</Card.Title>
              <ModalSoil
                SoilComponentOverrides={SoilComponentOverrides}
                irrigationSystemDesignService={irrigationSystemDesignService}
                resultSoilParams={resultSoilParams}
                setResultSoilParams={setResultSoilParams}
                soilMoistureFieldCapacity={soilMoistureFieldCapacity}
                setSoilMoistureFieldCapacity={setSoilMoistureFieldCapacity}
                soilMoistureAtPermanentWiltingPoint={
                  soilMoistureAtPermanentWiltingPoint
                }
                setSoilMoistureAtPermanentWiltingPoint={
                  setSoilMoistureAtPermanentWiltingPoint
                }
                depletionFactor={depletionFactor}
                setDepletionFactor={setDepletionFactor}
                soilDepth={soilDepth}
                setSoilDepth={setSoilDepth}
                effectivePrecipitation={effectivePrecipitation}
                setEffectivePrecipitation={setEffectivePrecipitation}
                setLoadingCalculate={setLoadingCalculate}
                loadingCalculate={loadingCalculate}
                SoilParams={SoilParams}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Maximum actual irrigation</Card.Title>
              <ModalMaximum
                MaximumComponentOverrides={MaximumComponentOverrides}
                irrigationSystemDesignService={irrigationSystemDesignService}
                soilMoistureFieldCapacity={soilMoistureFieldCapacity}
                setSoilMoistureFieldCapacity={setSoilMoistureFieldCapacity}
                soilMoistureAtPermanentWiltingPoint={
                  soilMoistureAtPermanentWiltingPoint
                }
                setSoilMoistureAtPermanentWiltingPoint={
                  setSoilMoistureAtPermanentWiltingPoint
                }
                depletionFactor={depletionFactor}
                setDepletionFactor={setDepletionFactor}
                soilDepth={soilDepth}
                setSoilDepth={setSoilDepth}
                effectivePrecipitation={effectivePrecipitation}
                setEffectivePrecipitation={setEffectivePrecipitation}
                fractionOfTotalWettedArea={fractionOfTotalWettedArea}
                setFractionOfTotalWettedArea={setFractionOfTotalWettedArea}
                resultMaximum={resultMaximum}
                setResultMaximum={setResultMaximum}
                loadingCalculate={loadingCalculate}
                setLoadingCalculate={setLoadingCalculate}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IrrigationCardActual;
