import React, { useEffect, useState } from "react";
import "./style.css";

function LabeledInputs({
  resultPs,
  resultPw,
  setResultPs,
  setResultPw,
  inputValuePs,
  inputValuePw,
  isInputPsDisabled,
  isInputPwDisabled,
  setInputValuePs,
  setInputValuePw,
  setIsInputPsDisabled,
  setIsInputPwDisabled,
  sr,
  sp,
  sw,
  ss,
  dco,
  z,
  q,
  k0,
  np,
  alpha,
  setSr,
  setSs,
  setNp,
  setZ,
  setQ,
  setK0,
  setSp,
  setDco,
  StripComponentOverrides,
  CanopyComponentOverrides,
  TreeComponentOverrides,
  StripPwComponentOverrides,
  RadiusComponentOverrides,
}) {
  useEffect(() => {
    setInputValuePs(resultPs || "");
    setInputValuePw(resultPw || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultPs, resultPw]);

  const handleInputChangePs = (e) => {
    const value = e.target.value;
    setResultPs(value);
  };

  const handleInputChangePw = (e) => {
    const value = e.target.value;
    setResultPw(value);
  };

  const handleSwitchChangePs = () => {
    setIsInputPsDisabled(!isInputPsDisabled);
  };
  const handleSwitchChangePw = () => {
    setIsInputPwDisabled(!isInputPwDisabled);
  };

  const [showAdditionalFieldsPs, setShowAdditionalFieldsPs] = useState(false);
  useEffect(() => {
    setShowAdditionalFieldsPs(!isInputPsDisabled);
  }, [isInputPsDisabled]);

  const [showAdditionalFieldsPw, setShowAdditionalFieldsPw] = useState(false);
  useEffect(() => {
    setShowAdditionalFieldsPw(!isInputPwDisabled);
  }, [isInputPwDisabled]);

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
          className="form-control mb-3 custom-input"
          placeholder="Pw (%)"
          value={inputValuePw}
          onChange={handleInputChangePw}
          disabled={!isInputPwDisabled}
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
          className="form-control mb-3 custom-input"
          placeholder="Ps (%)"
          value={inputValuePs}
          onChange={handleInputChangePs}
          disabled={!isInputPsDisabled}
        />
      </div>

      {showAdditionalFieldsPs && (
        <>
          {" "}
          <div className="form-group">
            <label htmlFor="input1" className="left-label">
              Spacing between rows of plants:
            </label>
            <input
              id="input1"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Sr (m)"
              value={sr}
              onChange={(e) => setSr(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input2" className="left-label">
              Spacing between plants in the row:
            </label>
            <input
              id="input2"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Sp (m)"
              value={sp}
              onChange={(e) => setSp(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Shaded strip:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Ss (m)"
              value={ss}
              onChange={(e) => setSs(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Crown projection diameter:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Dco (m)"
              value={dco}
              onChange={(e) => setDco(e.target.value)}
            />
          </div>
        </>
      )}

      {showAdditionalFieldsPw && (
        <>
          {" "}
          <div className="form-group">
            <label htmlFor="input1" className="left-label">
              Spacing between rows of plants:
            </label>
            <input
              id="input1"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Sr (m)"
              value={sr}
              onChange={(e) => setSr(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input2" className="left-label">
              Spacing between plants in the row:
            </label>
            <input
              id="input2"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Sp (m)"
              value={sp}
              onChange={(e) => setSp(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Crown projection diameter:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Sw (m²)"
              value={sw}
              onChange={(e) => StripPwComponentOverrides.Sw.onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Number of drippers per plant:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Np (m)"
              value={np}
              onChange={(e) => setNp(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Z:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Z (m)"
              value={z}
              onChange={(e) => setZ(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Q:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Q (m)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Hydraulic conductivity:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="Ko (cm h-1)"
              value={k0}
              onChange={(e) => setK0(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input3" className="left-label">
              Soil Water Conductivity Parameter:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3 custom-input"
              placeholder="α"
              value={alpha}
              onChange={(e) => RadiusComponentOverrides.Alpha.onChange(e)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default LabeledInputs;
