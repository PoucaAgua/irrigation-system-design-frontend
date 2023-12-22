import Configuration from "./configuration";
import EtoService from "./EtoService";
import PSService from "./PSService";
import PWService from "./PWService";
import ActualIrrigationService from "./ActualIrrigationService";
import TotalIrrigationService from "./TotalirrigationService";
import ShiftIrrigationService from "./ShiftIrrigationService";
import ReferenceEvapotranspirationService from "./ReferenceEvapotranspirationService";
import CropEvapotranspirationService from "./CropEvapotranspirationService";
import IrrigationTimeService from "./TimeIrrigation";
class IrrigationSystemDesignService {
  constructor() {
    this.config = new Configuration();
    this.URL = this.config.IRRIGATION_SYSTEM_DESIGN_BACKEND_URL;
    this.etoService = new EtoService(
      (this.ETO_HARGRAVES_SAMANI =
        this.URL + this.config.ETO_HARGRAVES_SAMANI_PATH)
    );
    this.psService = new PSService(
      (this.PS_STRIP = this.URL + this.config.PS_STRIP_PROJECTION),
      (this.PS_CANOPY = this.URL + this.config.PS_CANOPY_PROJECTION)
    );
    this.pwService = new PWService(
      (this.PW_WETTED_RADIUS = this.URL + this.config.PW_WETTED_RADIUS),
      (this.PW_IRRIGATION_TREE = this.URL + this.config.PW_IRRIGATION_TREE),
      (this.PW_CONTINUOUS_STRIP = this.URL + this.config.PW_CONTINUOUS_STRIP)
    );
    this.actualirrigationService = new ActualIrrigationService(
      (this.ACTUAL_IRRIGATION_ATMOSPHERIC =
        this.URL + this.config.ACTUAL_IRRIGATION_ATMOSPHERIC),
      (this.ACTUAL_IRRIGATION_SOIL_PARAMS =
        this.URL + this.config.ACTUAL_IRRIGATION_SOIL_PARAMS),
      (this.ACTUAL_IRRIGATION_MAX =
        this.URL + this.config.ACTUAL_IRRIGATION_MAX)
    );
    this.totalirrigationService = new TotalIrrigationService(
      (this.TOTAL_IRRIGATION = this.URL + this.config.TOTAL_IRRIGATION)
    );
    this.referenceevapotranspirationService =
      new ReferenceEvapotranspirationService(
        (this.REFERENCE_EVAPOTRANSPIRATION_BLANEY_CRIDDLE =
          this.URL + this.config.REFERENCE_EVAPOTRANSPIRATION_BLANEY_CRIDDLE),
        (this.REFERENCE_EVAPOTRANSPIRATION_HARGRAVES_SAMANI =
          this.URL + this.config.REFERENCE_EVAPOTRANSPIRATION_HARGRAVES_SAMANI),
        (this.REFERENCE_EVAPOTRANSPIRATION_PENMAN_MONTEITH =
          this.URL + this.config.REFERENCE_EVAPOTRANSPIRATION_PENMAN_MONTEITH)
      );
    this.cropevapotranspirationService = new CropEvapotranspirationService(
      (this.CROP_EVAPOTRANSPIRATION_BERNARDO =
        this.URL + this.config.CROP_EVAPOTRANSPIRATION_BERNARDO),
      (this.CROP_EVAPOTRANSPIRATION_FERERES =
        this.URL + this.config.CROP_EVAPOTRANSPIRATION_FERERES),
      (this.CROP_EVAPOTRANSPIRATION_KELLER =
        this.URL + this.config.CROP_EVAPOTRANSPIRATION_KELLER),
      (this.CROP_EVAPOTRANSPIRATION_KELLERANDBLIESNER =
        this.URL + this.config.CROP_EVAPOTRANSPIRATION_KELLERANDBLIESNER)
    );
    this.irrigationTimeService = new IrrigationTimeService(
      (this.IRRIGATION_TIME_BY_LINE =
        this.URL + this.config.IRRIGATION_TIME_BY_LINE),
      (this.IRRIGATION_TIME_BY_PLANT =
        this.URL + this.config.IRRIGATION_TIME_BY_PLANT)
    );

    this.shiftirrigationService = new ShiftIrrigationService(
      (this.SHIFT_IRRIGATION = this.URL + this.config.SHIFT_IRRIGATION)
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
    return this.psService.calculateStrip(payload);
  }

  async calculateCanopy(payload) {
    return this.psService.calculateCanopy(payload);
  }

  async calculateRadius(payload) {
    return this.pwService.calculateRadius(payload);
  }

  async calculateTree(payload) {
    return this.pwService.calculateTree(payload);
  }

  async calculatePwStrip(payload) {
    return this.pwService.calculatePwStrip(payload);
  }

  async calculateTotalIrrigation(payload) {
    return this.totalirrigationService.calculateTotalIrrigation(payload);
  }

  async calculateHargraves(payload) {
    return this.referenceevapotranspirationService.calculateHargraves(payload);
  }

  async calculateBlaney(payload) {
    return this.referenceevapotranspirationService.calculateBlaney(payload);
  }

  async calculatePenman(payload) {
    return this.referenceevapotranspirationService.calculatePenman(payload);
  }

  async calculateBernardo(payload) {
    return this.cropevapotranspirationService.calculateBernardo(payload);
  }

  async calculateFereres(payload) {
    return this.cropevapotranspirationService.calculateFereres(payload);
  }

  async calculateKeller(payload) {
    return this.cropevapotranspirationService.calculateKeller(payload);
  }

  async calculateKellerandBliesner(payload) {
    return this.cropevapotranspirationService.calculateKellerandBliesner(
      payload
    );
  }

  async calculateIrrigationByLine(payload) {
    return this.irrigationTimeService.calculateIrrigationByLine(payload);
  }

  async calculateIrrigationByPlant(payload) {
    return this.irrigationTimeService.calculateIrrigationByPlant(payload);
  }

  async calculateShiftIrrigation(payload) {
    return this.shiftirrigationService.calculateShiftIrrigation(payload);
  }

  getProjects(params) {
    return this.projects;
  }

  insertProject(newProject) {
    this.projects.put(newProject);
  }
}

export default IrrigationSystemDesignService;
