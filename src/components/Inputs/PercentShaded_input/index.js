import React, { useEffect } from "react";
import TitleResults from "../../Titles/Titles_percent_shaded/Results";
import "./style.css";

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
  inputValuePsCanopy,
  inputValuePsStrip,
  inputValuePwTree,
  inputValuePwStrip,
  inputValuePwRadius,
  isInputPsDisabled,
  isInputPwDisabled,
  setInputValuePsCanopy,
  setInputValuePsStrip,
  setInputValuePwTree,
  setInputValuePwStrip,
  setInputValuePwRadius,
  setIsInputPsDisabled,
  setIsInputPwDisabled,
}) {
  useEffect(() => {
    setInputValuePsCanopy(resultPsCanopy || "");
    setInputValuePsStrip(resultPsStrip || "");
    setInputValuePwTree(resultPwTree || "");
    setInputValuePwStrip(resultPwStrip || "");
    setInputValuePwRadius(resultPwRadius || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleSwitchChangePs = () => {
    setIsInputPsDisabled(!isInputPsDisabled);
  };
  const handleSwitchChangePw = () => {
    setIsInputPwDisabled(!isInputPwDisabled);
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
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
          disabled={isInputPsDisabled || isInputPwDisabled}
        />
      </div>

      <TitleResults />

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
