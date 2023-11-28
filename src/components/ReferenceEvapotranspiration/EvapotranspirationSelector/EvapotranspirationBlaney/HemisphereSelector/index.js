import React from "react";

function Hemisphere({ hemisphere, setHemisphere }) {
  return (
    <select
      class="form-select d-flex flex-column align-items-center mb-3"
      aria-label="Default select example"
      value={hemisphere}
      onChange={(e) => setHemisphere(e.target.value)}
    >
      <option selected>Select the hemisphere</option>
      <option value="SUL">Sul</option>
      <option value="NORTE">Norte</option>
    </select>
  );
}
export default Hemisphere;
