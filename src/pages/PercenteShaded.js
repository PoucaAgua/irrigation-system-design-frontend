import React, { useState } from "react";
import Header from "../components/Header";
import Pwtitle from "../components/Titles/Titles_percent_shaded/Pw_area";
import Pstitle from "../components/Titles/Titles_percent_shaded/Ps_area";
import TitlePercentShaded from "../components/Titles/Titles_percent_shaded/Title_PercenteShaded";
import PercenteShadedInputs from "../components/Inputs/PercentShaded_input";
import StripModalRender from "../components/Modals/Modal_ps/strip_projection";
import CanopyModalRender from "../components/Modals/Modal_ps/canopy_projection";
import RadiusModalRender from "../components/Modals/Modal_pw/radius_wetted";
import PwTreeModalRender from "../components/Modals/Modal_pw/tree_wetted";
import PwStripModalRender from "../components/Modals/Modal_pw/strip_wetted";
import IrrigationSystemDesignService from "../services/irrigation_system_design_backend";

const irrigationSystemDesignService = new IrrigationSystemDesignService();

function PercenteShaded({
  user,
  signOut,
  Canopy,
  setCanopy,
  Strip,
  setStrip,
  Radius,
  setRadius,
  PwStrip,
  setPwStrip,
  Tree,
  setTree,
}) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModalCanopy, setShowModalCanopy] = useState(false);
  const [sr, setSr] = useState("");
  const [sp, setSp] = useState("");
  const [dco, setDco] = useState("");
  const [resultPsCanopy, setResultPsCanopy] = useState(null);
  const [validationError, setValidationError] = useState("");
  const [showModalPsStrip, setShowModalPsStrip] = useState(false);
  const [ss, setSs] = useState("");
  const [resultPsStrip, setResultPsStrip] = useState(null);
  const [showModalPwRadius, setShowModalPwRadius] = useState(false);
  const [q, setQ] = useState("");
  const [k0, setK0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [resultPwRadius, setResultPwRadius] = useState(null);
  const [showModalPwStrip, setShowModalPwStrip] = useState(false);
  const [sw, setSw] = useState("");
  const [resultPwStrip, setResultPwStrip] = useState(null);
  const [showModalPwTree, setShowModalPwTree] = useState(false);
  const [np, setNp] = useState("");
  const [z, setZ] = useState("");
  const [resultPwTree, setResultPwTree] = useState(null);
  //const [inputValue, setInputValue] = useState("");
  const [inputValuePsCanopy, setInputValuePsCanopy] = useState("");
  const [inputValuePsStrip, setInputValuePsStrip] = useState("");
  const [inputValuePwTree, setInputValuePwTree] = useState("");
  const [inputValuePwStrip, setInputValuePwStrip] = useState("");
  const [inputValuePwRadius, setInputValuePwRadius] = useState("");
  const [isInputPsDisabled, setIsInputPsDisabled] = useState(true);
  const [isInputPwDisabled, setIsInputPwDisabled] = useState(true);

  //PS canopy projection
  const CanopyComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
      },
      type: "number",
    },
    Dco: {
      onChange: (event) => {
        setDco(event.target.value);
      },
      type: "number",
    },

    CalculateButtonCanopy: {
      onClick: async () => {
        if (!sr || !sp || !dco) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          space_between_rows: sr,
          space_between_plants: sp,
          diameter_projection: dco,
        };

        try {
          const response = await irrigationSystemDesignService.calculateCanopy(
            payload
          );

          console.log("API Response:", response);
          setResultPsCanopy(response.value);
        } catch (error) {
          console.error("Error calculating Canopy:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonCanopy: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Canopy: {
      value: loadingCalculate ? "Loading..." : Canopy,
    },
  };

  const toggleModalCanopy = () => {
    setShowModalCanopy(!showModalCanopy);
  };

  //PS strip
  const StripComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Ss: {
      onChange: (event) => {
        setSs(event.target.value);
        setValidationError("");
      },
      type: "number",
    },

    CalculateButtonPsStrip: {
      onClick: async () => {
        if (!sr || !ss) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          space_between_rows: sr,
          shaded_strip_plant: ss,
        };

        try {
          const response = await irrigationSystemDesignService.calculateStrip(
            payload
          );

          console.log("API Response:", response);
          setResultPsStrip(response.value);
        } catch (error) {
          console.error("Error calculating Strip:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonPsStrip: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Strip: {
      value: loadingCalculate ? "Loading..." : Strip,
    },
  };

  const toggleModalStrip = () => {
    setShowModalPsStrip(!showModalPsStrip);
  };

  // pw radius
  const RadiusComponentOverrides = {
    Q: {
      onChange: (event) => {
        setQ(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setK0(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Alpha: {
      onChange: (event) => {
        setAlpha(event.target.value);
        setValidationError("");
      },
      type: "number",
    },

    CalculateButtonRadius: {
      onClick: async () => {
        if (!q || !k0 || !alpha) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          q: q,
          hydraulic_conductivity_of_saturated_soil: k0,
          parameter_model_unsaturated_hydraulic: alpha,
        };

        try {
          const response = await irrigationSystemDesignService.calculateRadius(
            payload
          );

          console.log("API Response:", response);
          setResultPwRadius(response.value);
        } catch (error) {
          console.error(
            "Error calculating Twice saturated wetted radius:",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonRadius: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Radius: {
      value: loadingCalculate ? "Loading..." : Radius,
    },
  };

  const toggleModalRadius = () => {
    setShowModalPwRadius(!showModalPwRadius);
  };

  // pw strip

  const StripPwComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
      },
      type: "number",
    },
    Sw: {
      onChange: (event) => {
        setSw(event.target.value);
      },
      type: "number",
    },

    CalculateButtonStripPw: {
      onClick: async () => {
        if (!sr || !sp || !sw) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setValidationError("");
        setLoadingCalculate(true);
        const payload = {
          row_spacing_plants: sr,
          space_between_plants: sp,
          wetted_zone: sw,
        };

        try {
          const response = await irrigationSystemDesignService.calculatePwStrip(
            payload
          );

          console.log("API Response:", response);
          setResultPwStrip(response.value);
        } catch (error) {
          console.error("Error calculating Continuous strip:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonStripPw: {
      onClick: () => {
        alert("SaveButton need be implemented....");
      },
    },
    PwStrip: {
      value: loadingCalculate ? "Loading..." : PwStrip,
    },
  };

  const toggleModalPwStrip = () => {
    setShowModalPwStrip(!showModalPwStrip);
  };

  //pw treee

  const TreeComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Np: {
      onChange: (event) => {
        setNp(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Z: {
      onChange: (event) => {
        setZ(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Q: {
      onChange: (event) => {
        setQ(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setK0(event.target.value);
        setValidationError("");
      },
      type: "number",
    },

    CalculateButtonPwTree: {
      onClick: async () => {
        if (!sr || !sp || !np || !z || !q || !k0) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          space_between_lines: sr,
          space_between_plants: sp,
          drippers_number: np,
          z: z,
          q: q,
          hydraulic_conductivity_of_saturated_soil: k0,
        };

        try {
          const response = await irrigationSystemDesignService.calculateTree(
            payload
          );

          console.log("API Response:", response);
          setResultPwTree(response.value);
        } catch (error) {
          console.error("Error calculating Irrigation by tree:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonPwTree: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Tree: {
      value: loadingCalculate ? "Loading..." : Tree,
    },
  };

  const toggleModalTree = () => {
    setShowModalPwTree(!showModalPwTree);
  };

  return (
    <>
      <Header user={user} signOut={signOut} />

      <TitlePercentShaded />
      <PercenteShadedInputs
        resultPsCanopy={resultPsCanopy}
        resultPsStrip={resultPsStrip}
        resultPwTree={resultPwTree}
        resultPwStrip={resultPwStrip}
        resultPwRadius={resultPwRadius}
        setResultPsCanopy={setResultPsCanopy}
        setResultPsStrip={setResultPsStrip}
        setResultPwTree={setResultPwTree}
        setResultPwStrip={setResultPwStrip}
        setResultPwRadius={setResultPwRadius}
        inputValuePsCanopy={inputValuePsCanopy}
        inputValuePsStrip={inputValuePsStrip}
        inputValuePwTree={inputValuePwTree}
        inputValuePwStrip={inputValuePwStrip}
        inputValuePwRadius={inputValuePwRadius}
        isInputPsDisabled={isInputPsDisabled}
        isInputPwDisabled={isInputPwDisabled}
        setInputValuePsCanopy={setInputValuePsCanopy}
        setInputValuePsStrip={setInputValuePsStrip}
        setInputValuePwTree={setInputValuePwTree}
        setInputValuePwStrip={setInputValuePwStrip}
        setInputValuePwRadius={setInputValuePwRadius}
        setIsInputPsDisabled={setIsInputPsDisabled}
        setIsInputPwDisabled={setIsInputPwDisabled}
      />
      <Pstitle />
      <div className="d-flex justify-content-center">
        <StripModalRender
          toggleModalStrip={toggleModalStrip}
          sr={sr}
          ss={ss}
          setSr={setSr}
          setSs={setSs}
          showModalPsStrip={showModalPsStrip}
          setShowModalPsStrip={setShowModalPsStrip}
          resultPsStrip={resultPsStrip}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          StripComponentOverrides={StripComponentOverrides}
        />

        <CanopyModalRender
          showModalCanopy={showModalCanopy}
          toggleModalCanopy={toggleModalCanopy}
          sr={sr}
          sp={sp}
          dco={dco}
          setSr={setSr}
          setSp={setSp}
          setDco={setDco}
          resultPsCanopy={resultPsCanopy}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          CanopyComponentOverrides={CanopyComponentOverrides}
        />
      </div>
      <Pwtitle />
      <div className="d-flex justify-content-center">
        <PwTreeModalRender
          showModalPwTree={showModalPwTree}
          toggleModalTree={toggleModalTree}
          setNp={setNp}
          setSp={setSp}
          setSr={setSr}
          setZ={setZ}
          setQ={setQ}
          setK0={setK0}
          validationError={validationError}
          resultPwTree={resultPwTree}
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
          sp={sp}
          sw={sw}
          resultPwStrip={resultPwStrip}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          StripPwComponentOverrides={StripPwComponentOverrides}
        />
      </div>
      <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
        <RadiusModalRender
          showModalPwRadius={showModalPwRadius}
          toggleModalRadius={toggleModalRadius}
          q={q}
          k0={k0}
          alpha={alpha}
          resultPwRadius={resultPwRadius}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          RadiusComponentOverrides={RadiusComponentOverrides}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default PercenteShaded;
