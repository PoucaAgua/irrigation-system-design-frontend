import React, { useState, useEffect } from "react";
import "./style.css"; // Importe seu arquivo CSS personalizado

function LabeledInputs({
  resultPsCanopy,
  resultPsStrip,
  resultPwTree,
  resultPwStrip,
  resultPwRadius,
  setResultPsCanopy,
  setResultPsStrip,
  setResultPwTree,
  setResultPwStrip,
  setResultPwRadius,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputValuePsCanopy, setInputValuePsCanopy] = useState("");
  const [inputValuePsStrip, setInputValuePsStrip] = useState("");
  const [inputValuePwTree, setInputValuePwTree] = useState("");
  const [inputValuePwStrip, setInputValuePwStrip] = useState("");
  const [inputValuePwRadius, setInputValuePwRadius] = useState("");
  const [isInputPsDisabled, setIsInputPsDisabled] = useState(true);
  const [isInputPwDisabled, setIsInputPwDisabled] = useState(true);
  useEffect(() => {
    // Atualizar os campos de entrada com os valores das variáveis quando elas mudarem
    setInputValuePsCanopy(resultPsCanopy || "");
    setInputValuePsStrip(resultPsStrip || "");
    setInputValuePwTree(resultPwTree || "");
    setInputValuePwStrip(resultPwStrip || "");
    setInputValuePwRadius(resultPwRadius || "");
  }, [
    resultPsCanopy,
    resultPsStrip,
    resultPwTree,
    resultPwStrip,
    resultPwRadius,
  ]);

  const handleInputChangePsCanopy = (e) => {
    const value = e.target.value;
    setInputValuePsCanopy(value);
    setResultPsCanopy(value);
  };

  const handleInputChangePsStrip = (e) => {
    const value = e.target.value;
    setInputValuePsStrip(value);
    setResultPsStrip(value);
  };

  const handleInputChangePwTree = (e) => {
    const value = e.target.value;
    setInputValuePwTree(value);
    setResultPwTree(value);
  };
  const handleInputChangePwStrip = (e) => {
    const value = e.target.value;
    setInputValuePwTree(value);
    setResultPwStrip(value);
  };
  const handleInputChangePwRadius = (e) => {
    const value = e.target.value;
    setInputValuePwTree(value);
    setResultPwRadius(value);
  };

  // Função para lidar com a mudança do switch
  const handleSwitchChangePs = () => {
    setIsInputPsDisabled(!isInputPsDisabled); // Inverte o estado do switch
  };
  const handleSwitchChangePw = () => {
    setIsInputPwDisabled(!isInputPwDisabled); // Inverte o estado do switch
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="form-group">
        <label htmlFor="input4" className="left-label">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={isInputPwDisabled}
              onChange={handleSwitchChangePw}
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Percentage of Wetted area:
            </label>
          </div>
        </label>
        <input
          id="input4"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Pw (%)"
          disabled={isInputPwDisabled}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input4" className="left-label">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={isInputPsDisabled}
              onChange={handleSwitchChangePs}
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Percentage of Shaded area:
            </label>
          </div>
        </label>
        <input
          id="input4"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Ps (%)"
          disabled={isInputPsDisabled}
        />
      </div>

      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Spacing between rows of plants:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Sr (m)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input2" className="left-label">
          Spacing between plants in the row:
        </label>
        <input
          id="input2"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Sp (m)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          SCrown projection diameter:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Sw (m²)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Shaded strip:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Ss (m)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Crown projection diameter:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Dco (m)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Number of drippers per plant:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Np (m)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Z:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Z (m)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Q:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Q (m)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Hydraulic conductivity:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Ko (cm h-1)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Soil Water Conductivity Parameter:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="α"
        />
      </div>

      {inputValuePsCanopy !== null && inputValuePsCanopy !== "" && (
        <div className="form-group">
          <label htmlFor="input5" className="left-label">
            Percentage of Shaded area Canopy Projection:
          </label>
          <input
            id="input5"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Ps (%)"
            value={inputValuePsCanopy}
            onChange={handleInputChangePsCanopy}
          />
        </div>
      )}

      {inputValuePsStrip !== null && inputValuePsStrip !== "" && (
        <div className="form-group">
          <label htmlFor="input6" className="left-label">
            Percentage of Shaded area Strip Projection:
          </label>
          <input
            id="input6"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Ps (%)"
            value={inputValuePsStrip}
            onChange={handleInputChangePsStrip}
          />
        </div>
      )}

      {inputValuePwTree !== null && inputValuePwTree !== "" && (
        <div className="form-group">
          <label htmlFor="input6" className="left-label">
            Percentage of Shaded area Irrigation by Tree:
          </label>
          <input
            id="input6"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Ps (%)"
            value={inputValuePwTree}
            onChange={handleInputChangePwTree}
          />
        </div>
      )}

      {inputValuePwStrip !== null && inputValuePwStrip !== "" && (
        <div className="form-group">
          <label htmlFor="input6" className="left-label">
            Percentage of Shaded area Irrigation Strip:
          </label>
          <input
            id="input6"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Ps (%)"
            value={inputValuePwStrip}
            onChange={handleInputChangePwStrip}
          />
        </div>
      )}

      {inputValuePwRadius !== null && inputValuePwRadius !== "" && (
        <div className="form-group">
          <label htmlFor="input6" className="left-label">
            Percentage of Shaded area Irrigation Radius:
          </label>
          <input
            id="input6"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Ps (%)"
            value={inputValuePwRadius}
            onChange={handleInputChangePwRadius}
          />
        </div>
      )}
    </div>
  );
}

export default LabeledInputs;
