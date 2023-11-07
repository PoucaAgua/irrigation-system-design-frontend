import Configuration from "./configuration";
import { processResponse } from "../components/ErrorMensage/index";
class IrrigationSystemDesignService {
  constructor() {
    this.config = new Configuration();
    this.URL = this.config.IRRIGATION_SYSTEM_DESIGN_BACKEND_URL;
    this.ETO_HARGRAVES_SAMANI =
      this.URL + this.config.ETO_HARGRAVES_SAMANI_PATH;
    this.PS_STRIP = this.URL + this.config.PS_STRIP_PROJECTION;
    this.PS_CANOPY = this.URL + this.config.PS_CANOPY_PROJECTION;
    this.PW_WETTED_RADIUS = this.URL + this.config.PW_WETTED_RADIUS;
    this.PW_IRRIGATION_TREE = this.URL + this.config.PW_IRRIGATION_TREE;
    this.PW_CONTINUOUS_STRIP = this.URL + this.config.PW_CONTINUOUS_STRIP;
    this.ACTUAL_IRRIGATION_ATMOSPHERIC =
      this.URL + this.config.ACTUAL_IRRIGATION_ATMOSPHERIC;
    this.ACTUAL_IRRIGATION_SOIL_PARAMS =
      this.URL + this.config.ACTUAL_IRRIGATION_SOIL_PARAMS;
    this.ACTUAL_IRRIGATION_MAX = this.URL + this.config.ACTUAL_IRRIGATION_MAX;

    this.projects = [
      {
        id: 1,
        name: "project1",
        user: "ravellys",
      },
      {
        id: 2,
        name: "project2",
        user: "ravellys",
      },
      {
        id: 3,
        name: "project3",
        user: "ravellys",
      },
      {
        id: 4,
        name: "project4",
        user: "ravellys",
      },
      {
        id: 5,
        name: "project5",
        user: "ravellys",
      },
    ];
  }

  async calculateEto(payload) {
    const response = await fetch(this.ETO_HARGRAVES_SAMANI, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      alert(response.value);
    }

    return await response.json();
  }

  async calculateAtmospheric(payload) {
    const response = await fetch(this.ACTUAL_IRRIGATION_ATMOSPHERIC, {
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
    const response = await fetch(this.ACTUAL_IRRIGATION_SOIL_PARAMS, {
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
    const response = await fetch(this.ACTUAL_IRRIGATION_MAX, {
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

  async calculateStrip(payload) {
    const response = await fetch(this.PS_STRIP, {
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
    const response = await fetch(this.PS_CANOPY, {
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

  async calculateRadius(payload) {
    const response = await fetch(this.PW_WETTED_RADIUS, {
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

  async calculateTree(payload) {
    const response = await fetch(this.PW_IRRIGATION_TREE, {
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

  async calculatePwStrip(payload) {
    const response = await fetch(this.PW_CONTINUOUS_STRIP, {
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

  getProjects(params) {
    return this.projects;
  }

  insertProject(newProject) {
    this.projects.put(newProject);
  }
}

export default IrrigationSystemDesignService;
