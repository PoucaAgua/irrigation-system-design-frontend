import { processResponse } from "../components/ErrorMensage/index";
import Swal from "sweetalert2";

export default class TotalIrrigationService {
  constructor(totalIrrigationUrl) {
    this.totalIrrigationUrl = totalIrrigationUrl;
  }

  async calculateTotalIrrigation(payload) {
    const response = await fetch(this.totalIrrigationUrl, {
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
