import React from "react";

function SoilAndWaterData(props) {
  const {
    soilCapacity,
    setSoilCapacity,
    soilPermanent,
    setSoilPermanent,
    soilConsumption,
    setSoilConsumption,
    effectiveDepth,
    setEffectiveDepth,
    electricalSaturation,
    setElectricalSaturation,
    electricalIrrigation,
    setElectricalIrrigation,
  } = props;

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Soil moisture at field capacity - Occ:
          </label>
          <input
            id="input1"
            type="text"
            className={`form-control mb-3 custom-input ${
              soilCapacity ? "is-valid" : ""
            }`}
            placeholder="Sr (m)"
            value={soilCapacity}
            onChange={(e) => setSoilCapacity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2" className="left-label">
            soil moisture at permanent wilting point - Opmp:
          </label>
          <input
            id="input2"
            type="text"
            className={`form-control mb-3 custom-input ${
              soilPermanent ? "is-valid" : ""
            }`}
            placeholder="Sp (m)"
            value={soilPermanent}
            onChange={(e) => setSoilPermanent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3" className="left-label">
            Soil water depletion or consumption factor - f:
          </label>
          <input
            id="input3"
            type="text"
            className={`form-control mb-3 custom-input ${
              soilConsumption ? "is-valid" : ""
            }`}
            placeholder="Sw (m²)"
            value={soilConsumption}
            onChange={(e) => setSoilConsumption(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3" className="left-label">
            Effective rooting depth - z:
          </label>
          <input
            id="input3"
            type="text"
            className={`form-control mb-3 custom-input ${
              effectiveDepth ? "is-valid" : ""
            }`}
            placeholder="Np (m)"
            value={effectiveDepth}
            onChange={(e) => setEffectiveDepth(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3" className="left-label">
            Electrical Conductivity of Soil Saturation Extract (maximum CEe):
          </label>
          <input
            id="input3"
            type="text"
            className={`form-control mb-3 custom-input ${
              electricalSaturation ? "is-valid" : ""
            }`}
            placeholder="Z (m)"
            value={electricalSaturation}
            onChange={(e) => setElectricalSaturation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3" className="left-label">
            Electrical Conductivity of Irrigation Water (CEi):
          </label>
          <input
            id="input3"
            type="text"
            className={`form-control mb-3 custom-input ${
              electricalIrrigation ? "is-valid" : ""
            }`}
            placeholder="Q (m)"
            value={electricalIrrigation}
            onChange={(e) => setElectricalIrrigation(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default SoilAndWaterData;
