import Configuration from "../../services/configuration";

class ApiErrorService {
  constructor() {
    this.config = new Configuration();
    this.URL = this.config.IRRIGATION_SYSTEM_DESIGN_BACKEND_URL;
    this.ACTUAL_IRRIGATION_SOIL_PARAMS =
      this.URL + this.config.ACTUAL_IRRIGATION_SOIL_PARAMS;
  }

  async fetchData(payload) {
    try {
      const response = await fetch(this.ACTUAL_IRRIGATION_SOIL_PARAMS, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.detail && data.detail.length > 0) {
          const errorMessage = data.detail[0].msg;
          return errorMessage;
        } else {
          return `Erro ${response.status}`;
        }
      } else {
        return null;
      }
    } catch (error) {
      return error.message;
    }
  }
}

const apiService = new ApiErrorService();
export default apiService;
