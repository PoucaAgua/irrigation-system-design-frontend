import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultPw from "../../PwResultModal/ResultModalTree";
import TreeInput from "../../PwInputs/tree_wetted";

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
          <TreeInput
            np={np}
            setNp={setNp}
            sp={sp}
            setSp={setSp}
            sr={sr}
            setSr={setSr}
            z={z}
            setZ={setZ}
            q={q}
            setQ={setQ}
            k0={k0}
            setK0={setK0}
          />
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
