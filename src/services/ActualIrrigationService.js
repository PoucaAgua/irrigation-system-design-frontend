import { processResponse } from "../components/ErrorMensage/index";

export default class AtmosphericService {
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
      alert(errorMessage);
    }

    if (!response.ok) {
      alert(response.value);
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
      alert(errorMessage);
    }

    if (!response.ok) {
      alert(response.value);
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
      alert(errorMessage);
    }

    if (!response.ok) {
      alert(response.value);
    }

    return await response.json();
  }
}
