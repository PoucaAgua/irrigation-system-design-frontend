import { processResponse } from "../components/ErrorMensage/index";
import Swal from "sweetalert2";

export default class ActualIrrigationService {
  constructor(
    actualIrrigationAtmosphericUrl,
    actualIrrigationSoilParamsUrl,
    actualIrrigationMaxUrl
  ) {
    this.actualIrrigationAtmosphericUrl = actualIrrigationAtmosphericUrl;
    this.actualIrrigationSoilParamsUrl = actualIrrigationSoilParamsUrl;
    this.actualIrrigationMaxUrl = actualIrrigationMaxUrl;
  }

  async calculateAtmospheric(payload) {
    const response = await fetch(this.actualIrrigationAtmosphericUrl, {
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

  async calculateSoilParams(payload) {
    const response = await fetch(this.actualIrrigationSoilParamsUrl, {
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

  async calculateMaximum(payload) {
    const response = await fetch(this.actualIrrigationMaxUrl, {
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
