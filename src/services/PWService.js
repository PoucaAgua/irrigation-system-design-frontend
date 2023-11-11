import Swal from "sweetalert2";
import { processResponse } from "../components/ErrorMensage/index";

export default class PWDesignService {
  constructor(pwWettedRadiusUrl, pwIrrigationTreeUrl, pwContinuousStripUrl) {
    this.pwWettedRadiusUrl = pwWettedRadiusUrl;
    this.pwIrrigationTreeUrl = pwIrrigationTreeUrl;
    this.pwContinuousStripUrl = pwContinuousStripUrl;
  }

  async calculateRadius(payload) {
    const response = await fetch(this.pwWettedRadiusUrl, {
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

  async calculateTree(payload) {
    const response = await fetch(this.pwIrrigationTreeUrl, {
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

  async calculatePwStrip(payload) {
    const response = await fetch(this.pwContinuousStripUrl, {
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
