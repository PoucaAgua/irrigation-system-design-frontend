import { processResponse } from "../components/ErrorMensage/index";

export default class EtoService {
  constructor(etoHargravesSamaniUrl) {
    this.etoHargravesSamaniUrl = etoHargravesSamaniUrl;
  }

  async calculateEto(payload) {
    const response = await fetch(this.etoHargravesSamaniUrl, {
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
