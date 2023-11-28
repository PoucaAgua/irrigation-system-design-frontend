import Swal from "sweetalert2";
import { processResponse } from "../components/ErrorMensage/index";

export default class ReferenceEvapotranspirationService {
  constructor(
    evapotranspirationBlaneyUrl,
    evapotranspirationHargravesUrl,
    evapotranspirationPenmanUrl
  ) {
    this.evapotranspirationBlaneyUrl = evapotranspirationBlaneyUrl;
    this.evapotranspirationHargravesUrl = evapotranspirationHargravesUrl;
    this.evapotranspirationPenmanUrl = evapotranspirationPenmanUrl;
  }

  async calculateBlaney(payload) {
    const response = await fetch(this.evapotranspirationBlaneyUrl, {
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

  async calculateHargraves(payload) {
    const response = await fetch(this.evapotranspirationHargravesUrl, {
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

  async calculatePenman(payload) {
    const response = await fetch(this.evapotranspirationPenmanUrl, {
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
