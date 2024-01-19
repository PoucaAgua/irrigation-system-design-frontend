import { processResponse } from "../components/ErrorMensage/index";
import Swal from "sweetalert2";

export default class SizingDerivationService {
  constructor(sizingDerivationDiameterUrl, sizingDerivationLoadUrl) {
    this.sizingDerivationDiameterUrl = sizingDerivationDiameterUrl;
    this.sizingDerivationLoadUrl = sizingDerivationLoadUrl;
  }

  async calculateDerivationDiameter(payload) {
    const response = await fetch(this.calculateDerivationDiameter, {
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

  async calculateDerivationLoad(payload) {
    const response = await fetch(this.sizingDerivationLoadUrl, {
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
