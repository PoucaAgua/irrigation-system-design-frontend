import React from "react";

function CanopyInput({ dco, setDco, sp, setSp, sr, setSr }) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label htmlFor="input1" className="left-label">
        Crown projection diameter:
      </label>
      <input
        id="input1"
        type="text"
        className="form-control mb-3"
        placeholder="Dco (m)"
        value={dco}
        onChange={(e) => setDco(e.target.value)}
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
    </div>
  );
}

export default CanopyInput;
