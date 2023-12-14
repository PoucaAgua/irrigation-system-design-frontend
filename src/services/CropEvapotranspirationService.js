import Swal from "sweetalert2";
import { processResponse } from "../components/ErrorMensage/index";

export default class CropEvapotranspirationService {
  constructor(
    cropevapotranspirationBernardoUrl,
    cropevapotranspirationFereresUrl,
    cropevapotranspirationKellerUrl,
    cropevapotranspirationKellerandBliesnerUrl
  ) {
    this.cropevapotranspirationBernardoUrl = cropevapotranspirationBernardoUrl;
    this.cropevapotranspirationFereresUrl = cropevapotranspirationFereresUrl;
    this.cropevapotranspirationKellerUrl = cropevapotranspirationKellerUrl;
    this.cropevapotranspirationKellerandBliesnerUrl =
      cropevapotranspirationKellerandBliesnerUrl;
  }

  async calculateBernardo(payload) {
    const response = await fetch(this.cropevapotranspirationBernardoUrl, {
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

  async calculateFereres(payload) {
    const response = await fetch(this.cropevapotranspirationFereresUrl, {
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

  async calculateKeller(payload) {
    const response = await fetch(this.cropevapotranspirationKellerUrl, {
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

  async calculateKellerandBliesner(payload) {
    const response = await fetch(
      this.cropevapotranspirationKellerandBliesnerUrl,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

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
