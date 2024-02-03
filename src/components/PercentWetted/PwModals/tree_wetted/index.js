import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultPw from "../../PwResultModal/ResultModalTree";

function TreeModal({
  showModalPwTree,
  toggleModalTree,
  setNp,
  setSp,
  setSr,
  setZ,
  setQ,
  setK0,
  resultPw,
  TreeComponentOverrides,
  np,
  sp,
  sr,
  z,
  q,
  k0,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    TreeComponentOverrides.CalculateButtonPwTree.onClick();
    setCalculated(true);
  };
  return (
    <>
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonTree"
          name="modalRadio"
          onChange={toggleModalTree}
        />
        <label className="form-check-label" htmlFor="radioButtonTree">
          Irrigation by Tree
        </label>
      </div>
      <Modal show={showModalPwTree} onHide={toggleModalTree}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Wetted Area
            <br /> Irrigation by tree
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label htmlFor="input1" className="left-label">
              Number of drippers per plant:
            </label>
            <input
              id="input1"
              type="text"
              className="form-control mb-3"
              placeholder="Np"
              value={np}
              onChange={(e) => setNp(e.target.value)}
            />

            <label htmlFor="input2" className="left-label">
              Spacing between plants in the row:
            </label>
            <input
              id="input2"
              type="text"
              className="form-control mb-3"
              placeholder="Sp (m)"
              value={sp}
              onChange={(e) => setSp(e.target.value)}
            />

            <label htmlFor="input3" className="left-label">
              Spacing between rows of plants:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3"
              placeholder="Sr (m)"
              value={sr}
              onChange={(e) => setSr(e.target.value)}
            />

            <b
              className="text-center fs-5"
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              Dw Calculate
            </b>

            <label htmlFor="input4" className="left-label">
              Wetting depth:
            </label>
            <input
              id="input4"
              type="text"
              className="form-control mb-3"
              placeholder="Z (cm)"
              value={z}
              onChange={(e) => setZ(e.target.value)}
            />

            <label htmlFor="input5" className="left-label">
              Q:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              placeholder="Q"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

            <label htmlFor="input6" className="left-label">
              Hydraulic conductivity of saturated soil:
            </label>
            <input
              id="input6"
              type="text"
              className="form-control mb-3"
              placeholder="cm h-1 (k0)"
              value={k0}
              onChange={(e) => setK0(e.target.value)}
            />
          </div>

          {calculated && <ResultPw resultPs={resultPw} />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={TreeComponentOverrides.SaveButtonPwTree.onClick}
          >
            Save
          </Button>
          <Button variant="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalTree}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TreeModal;
