import { processResponse } from "../components/ErrorMensage/index";
import Swal from "sweetalert2";

export default class PSDesignService {
  constructor(psStripUrl, psCanopyUrl) {
    this.psStripUrl = psStripUrl;
    this.psCanopyUrl = psCanopyUrl;
  }

  async calculateStrip(payload) {
    const response = await fetch(this.psStripUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const errorMessage = await processResponse(response);

    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        confirmButtonColor: "#DC3545",
      });
      return;
    }

    return await response.json();
  }

  async calculateCanopy(payload) {
    const response = await fetch(this.psCanopyUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const errorMessage = await processResponse(response);

    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        confirmButtonColor: "#DC3545",
      });
      return;
    }

    return await response.json();
  }
}
