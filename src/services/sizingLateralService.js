import { processResponse } from "../components/ErrorMensage/index";
import Swal from "sweetalert2";

export default class SizingLateralService {
  constructor(sizingLateralDiameterUrl, sizingLateralHeadUrl) {
    this.sizingLateralDiameterUrl = sizingLateralDiameterUrl;
    this.sizingLateralHeadUrl = sizingLateralHeadUrl;
  }

  async calculateLateralDiameter(payload) {
    const response = await fetch(this.calculateLateralDiameter, {
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

  async calculateLateralHead(payload) {
    const response = await fetch(this.sizingLateralHeadUrl, {
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
