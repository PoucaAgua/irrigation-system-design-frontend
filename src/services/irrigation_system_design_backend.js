import Configuration from "./configuration";
import EtoDesignService from "./EtoDesignService";
import PSDesignService from "./PSDesignService";
import PWDesignService from "./PWDesignService";
import ActualIrrigationDesignService from "./ActualIrrigationDesignService";
class IrrigationSystemDesignService {
  constructor() {
    this.config = new Configuration();
    this.URL = this.config.IRRIGATION_SYSTEM_DESIGN_BACKEND_URL;
    this.etoService = new EtoDesignService(
      (this.ETO_HARGRAVES_SAMANI =
        this.URL + this.config.ETO_HARGRAVES_SAMANI_PATH)
    );
    this.psDesignService = new PSDesignService(
      (this.PS_STRIP = this.URL + this.config.PS_STRIP_PROJECTION),
      (this.PS_CANOPY = this.URL + this.config.PS_CANOPY_PROJECTION)
    );
    this.pwDesignService = new PWDesignService(
      (this.PW_WETTED_RADIUS = this.URL + this.config.PW_WETTED_RADIUS),
      (this.PW_IRRIGATION_TREE = this.URL + this.config.PW_IRRIGATION_TREE),
      (this.PW_CONTINUOUS_STRIP = this.URL + this.config.PW_CONTINUOUS_STRIP)
    );
    this.actualirrigationService = new ActualIrrigationDesignService(
      (this.ACTUAL_IRRIGATION_ATMOSPHERIC =
        this.URL + this.config.ACTUAL_IRRIGATION_ATMOSPHERIC),
      (this.ACTUAL_IRRIGATION_SOIL_PARAMS =
        this.URL + this.config.ACTUAL_IRRIGATION_SOIL_PARAMS),
      (this.ACTUAL_IRRIGATION_MAX =
        this.URL + this.config.ACTUAL_IRRIGATION_MAX)
    );

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
    return this.etoService.calculateEto(payload);
  }

  async calculateAtmospheric(payload) {
    return this.actualirrigationService.calculateAtmospheric(payload);
  }

  async calculateSoilParams(payload) {
    return this.actualirrigationService.calculateSoilParams(payload);
  }

  async calculateMaximum(payload) {
    return this.actualirrigationService.calculateMaximum(payload);
  }

  async calculateStrip(payload) {
    return this.psDesignService.calculateStrip(payload);
  }

  async calculateCanopy(payload) {
    return this.psDesignService.calculateCanopy(payload);
  }

  async calculateRadius(payload) {
    return this.pwDesignService.calculateRadius(payload);
  }

  async calculateTree(payload) {
    return this.pwDesignService.calculateTree(payload);
  }

  async calculatePwStrip(payload) {
    return this.pwDesignService.calculatePwStrip(payload);
  }

  getProjects(params) {
    return this.projects;
  }

  insertProject(newProject) {
    this.projects.put(newProject);
  }
}

export default IrrigationSystemDesignService;
