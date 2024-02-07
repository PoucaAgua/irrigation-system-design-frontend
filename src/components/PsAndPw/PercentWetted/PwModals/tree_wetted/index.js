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

    if (sp === "") {
      setSpError(true);
    }

    if (sr === "") {
      setSrError(true);
    }

    if (q === "") {
      setQError(true);
    }

    if (z === "") {
      setZError(true);
    }

    if (np === "") {
      setNpError(true);
    }

    if (k0 === "") {
      setK0Error(true);
    }
  };
  const [srError, setSrError] = useState(false);
  const [spError, setSpError] = useState(false);
  const [qError, setQError] = useState(false);
  const [zError, setZError] = useState(false);
  const [npError, setNpError] = useState(false);
  const [k0Error, setK0Error] = useState(false);

  const handleSpChange = (e) => {
    setSp(e.target.value);
    setSpError(false);
  };

  const handleSrChange = (e) => {
    setSr(e.target.value);
    setSrError(false);
  };

  const handleZChange = (e) => {
    setZ(e.target.value);
    setZError(false);
  };

  const handleQChange = (e) => {
    setQ(e.target.value);
    setQError(false);
  };

  const handleNpChange = (e) => {
    setNp(e.target.value);
    setNpError(false);
  };

  const handleK0Change = (e) => {
    setK0(e.target.value);
    setK0Error(false);
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
            k0Error={k0Error}
            qError={qError}
            zError={zError}
            spError={spError}
            srError={srError}
            npError={npError}
            handleK0Change={handleK0Change}
            handleQChange={handleQChange}
            handleZChange={handleZChange}
            handleSrChange={handleSrChange}
            handleSpChange={handleSpChange}
            handleNpChange={handleNpChange}
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
