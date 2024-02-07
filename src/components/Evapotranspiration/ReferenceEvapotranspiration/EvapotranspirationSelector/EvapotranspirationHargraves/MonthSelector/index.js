import React from "react";

function Month({ month, setMonth, monthError, handleMonthChange }) {
  return (
    <select
      className={`form-select d-flex flex-column align-items-center mb-3 ${
        monthError ? "is-invalid" : ""
      }`}
      aria-label="Default select example"
      value={month}
      onChange={handleMonthChange}
    >
      <option defaultValue>Select the month</option>
      <option value="Jan">January</option>
      <option value="Fev">February</option>
      <option value="Mar">March</option>
      <option value="Abr">April</option>
      <option value="Mai">May</option>
      <option value="Jun">June</option>
      <option value="Jul">July</option>
      <option value="Ago">August</option>
      <option value="Set">September</option>
      <option value="Out">October</option>
      <option value="Nov">November</option>
      <option value="Dez">December</option>
    </select>
  );
}

export default Month;
