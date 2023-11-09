import { processResponse } from "../components/ErrorMensage/index";

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
      alert(errorMessage);
    }

    if (!response.ok) {
      alert(response.value);
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
      alert(errorMessage);
    }

    if (!response.ok) {
      alert(response.value);
    }

    return await response.json();
  }
}
