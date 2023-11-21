import React from "react";

function Hemisphere() {
  return (
    <select
      class="form-select d-flex flex-column align-items-center mb-3"
      aria-label="Default select example"
    >
      <option selected>Select the hemisphere</option>
      <option value="SUL">Sul</option>
      <option value="NORTE">Norte</option>
    </select>
  );
}
export default Hemisphere;
