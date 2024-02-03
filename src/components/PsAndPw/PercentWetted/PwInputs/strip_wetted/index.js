import React from "react";

function StripInput({
  sw,
  setSw,
  sp,
  setSp,
  sr,
  setSr,
  StripPwComponentOverrides,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <b
        className="text-center fs-6"
        style={{ marginBottom: 15, marginTop: 10 }}
      >
        Calculate monisted area Aw = SP x SW, m²
      </b>
      <label htmlFor="input1" className="left-label">
        Crown projection diameter:
      </label>
      <input
        id="input1"
        type="text"
        className="form-control mb-3"
        placeholder="Sw (m²)"
        value={sw}
        onChange={(e) => StripPwComponentOverrides.Sw.onChange(e)}
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
        onChange={(e) => StripPwComponentOverrides.Sp.onChange(e)}
      />

      <b
        className="text-center fs-6"
        style={{ marginBottom: 15, marginTop: 30 }}
      >
        Calculate occupied plant Ap = SP x SR, m²
      </b>
      <label htmlFor="input3" className="left-label">
        Spacing between plants in the row:
      </label>
      <input
        id="input3"
        type="text"
        className="form-control mb-3"
        placeholder="Sp (m)"
        value={sp}
        onChange={(e) => StripPwComponentOverrides.Sp.onChange(e)}
      />
      <label htmlFor="input4" className="left-label">
        Spacing between rows of plants:
      </label>
      <input
        id="input4"
        type="text"
        className="form-control mb-3"
        placeholder="Sr (m)"
        value={sr}
        onChange={(e) => StripPwComponentOverrides.Sr.onChange(e)}
      />
    </div>
  );
}

export default StripInput;
