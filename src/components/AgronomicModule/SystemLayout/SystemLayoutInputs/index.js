import React from "react";
import "./style.css";

function SystemLayoutInputs({
  sr,
  setSr,
  sp,
  setSp,
  sl,
  setSl,
  pw,
  setPw,
  ps,
  setPs,
  ue,
  setUe,
}) {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Spacing between rows of plants:
          </label>
          <input
            id="input1"
            type="text"
            className={`form-control mb-3 custom-input ${sr ? "is-valid" : ""}`}
            placeholder=" (m)"
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
            className={`form-control mb-3 custom-input ${sp ? "is-valid" : ""}`}
            placeholder=" (m)"
            value={sp}
            onChange={(e) => setSp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3" className="left-label">
            Spacing between lateral lines - Sl:
          </label>
          <input
            id="input3"
            type="text"
            className={`form-control mb-3 custom-input ${sl ? "is-valid" : ""}`}
            placeholder=" (m)"
            value={sl}
            onChange={(e) => setSl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input4" className="left-label">
            Percent Wetted - Pw:
          </label>
          <input
            id="input4"
            type="text"
            className={`form-control mb-3 custom-input ${pw ? "is-valid" : ""}`}
            placeholder=" (%)"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input5" className="left-label">
            Percent Shaded - Ps:
          </label>
          <input
            id="input5"
            type="text"
            className={`form-control mb-3 custom-input ${ps ? "is-valid" : ""}`}
            placeholder=" (%)"
            value={ps}
            onChange={(e) => setPs(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input6" className="left-label">
            Assumed emission uniformity for the project - UE:
          </label>
          <input
            id="input6"
            type="text"
            className={`form-control mb-3 custom-input ${ue ? "is-valid" : ""}`}
            placeholder=" (%)"
            value={ue}
            onChange={(e) => setUe(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default SystemLayoutInputs;
