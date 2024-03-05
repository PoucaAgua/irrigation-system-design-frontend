import React from "react";
import { Container } from "react-bootstrap";
import Pwtitle from "../../../PsAndPw/PercentWetted/PwTitle/Pw_area";
import Pstitle from "../../../PsAndPw/PercentShaded/PsTitle/Ps_area";
import StripModalRender from "../../../PsAndPw/PercentShaded/PsModals/strip_projection";
import CanopyModalRender from "../../../PsAndPw/PercentShaded/PsModals/canopy_projection";
import RadiusModalRender from "../../../PsAndPw/PercentWetted/PwModals/radius_wetted";
import PwTreeModalRender from "../../../PsAndPw/PercentWetted/PwModals/tree_wetted";
import PwStripModalRender from "../../../PsAndPw/PercentWetted/PwModals/strip_wetted";

function SystemLayoutModals({
  showModalCanopy,
  toggleModalCanopy,
  sr,
  sp,
  dco,
  setSr,
  setSp,
  setDco,
  resultPs,
  loadingCalculate,
  CanopyComponentOverrides,
  ss,
  setSs,
  showModalPsStrip,
  setShowModalPsStrip,
  StripComponentOverrides,
  np,
  z,
  q,
  k0,
  TreeComponentOverrides,
  sw,
  setSw,
  StripPwComponentOverrides,
  alpha,
  setAlpha,
  showModalPwRadius,
  toggleModalRadius,
  resultPw,
  toggleModalStrip,
  showModalPwTree,
  toggleModalTree,
  setNp,
  setZ,
  setQ,
  setK0,
  showModalPwStrip,
  toggleModalPwStrip,
  RadiusComponentOverrides,
}) {
  return (
    <Container style={{ maxWidth: 660, height: 280 }}>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div
            className="card"
            style={{ height: 200, marginLeft: 20, marginRight: 20 }}
          >
            <div className="card-body">
              <div className="card-title">
                <Pstitle />
              </div>
              <CanopyModalRender
                showModalCanopy={showModalCanopy}
                toggleModalCanopy={toggleModalCanopy}
                sr={sr}
                sp={sp}
                dco={dco}
                setSr={setSr}
                setSp={setSp}
                setDco={setDco}
                resultPs={resultPs}
                loadingCalculate={loadingCalculate}
                CanopyComponentOverrides={CanopyComponentOverrides}
              />
              <StripModalRender
                toggleModalStrip={toggleModalStrip}
                sr={sr}
                ss={ss}
                setSr={setSr}
                setSs={setSs}
                showModalPsStrip={showModalPsStrip}
                setShowModalPsStrip={setShowModalPsStrip}
                resultPs={resultPs}
                loadingCalculate={loadingCalculate}
                StripComponentOverrides={StripComponentOverrides}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="card"
            style={{
              height: 200,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <div className="card-body">
              <div className="card-title">
                <Pwtitle />
              </div>
              <PwTreeModalRender
                showModalPwTree={showModalPwTree}
                toggleModalTree={toggleModalTree}
                setNp={setNp}
                setSp={setSp}
                setSr={setSr}
                setZ={setZ}
                setQ={setQ}
                setK0={setK0}
                resultPw={resultPw}
                TreeComponentOverrides={TreeComponentOverrides}
                np={np}
                sp={sp}
                sr={sr}
                z={z}
                q={q}
                k0={k0}
              />
              <PwStripModalRender
                showModalPwStrip={showModalPwStrip}
                toggleModalPwStrip={toggleModalPwStrip}
                sr={sr}
                setSr={setSr}
                sp={sp}
                setSp={setSp}
                sw={sw}
                setSw={setSw}
                resultPw={resultPw}
                loadingCalculate={loadingCalculate}
                StripPwComponentOverrides={StripPwComponentOverrides}
              />
              <RadiusModalRender
                showModalPwRadius={showModalPwRadius}
                toggleModalRadius={toggleModalRadius}
                q={q}
                setQ={setQ}
                k0={k0}
                setK0={setK0}
                alpha={alpha}
                setAlpha={setAlpha}
                resultPw={resultPw}
                loadingCalculate={loadingCalculate}
                RadiusComponentOverrides={RadiusComponentOverrides}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SystemLayoutModals;
