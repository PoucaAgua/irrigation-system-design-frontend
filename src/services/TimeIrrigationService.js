import { processResponse } from "../components/ErrorMensage/index";
import Swal from "sweetalert2";

export default class IrrigationTimeService {
  constructor(irrigationTimeLineUrl, irrigationTimePlantUrl) {
    this.irrigationTimeLineUrl = irrigationTimeLineUrl;
    this.irrigationTimePlantUrl = irrigationTimePlantUrl;
  }

  async calculateIrrigationByLine(payload) {
    const response = await fetch(this.irrigationTimeLineUrl, {
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

  async calculateIrrigationByPlant(payload) {
    const response = await fetch(this.irrigationTimePlantUrl, {
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
