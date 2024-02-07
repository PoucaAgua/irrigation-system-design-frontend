import React from "react";

function Hemisphere({
  hemisphere,
  setHemisphere,
  hemisphereError,
  handleHemisphereChange,
}) {
  return (
    <select
      id="hemisphereSelect"
      className={`form-select d-flex flex-column align-items-center mb-3 ${
        hemisphereError ? "is-invalid" : ""
      }`}
      aria-label="Default select example"
      value={hemisphere}
      onChange={handleHemisphereChange}
    >
      <option value="">Select the hemisphere</option>
      <option value="SUL">Sul</option>
      <option value="NORTE">Norte</option>
    </select>
  );
}
export default Hemisphere;
