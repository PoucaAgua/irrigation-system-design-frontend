class Configuration {
  IRRIGATION_SYSTEM_DESIGN_BACKEND_URL =
    "https://d4p7uekk73.execute-api.us-east-1.amazonaws.com";
  ETO_HARGRAVES_SAMANI_PATH = "/dev/api/v1/evapotranspiration/hargraves_samani";
  ACTUAL_IRRIGATION_ATMOSPHERIC =
    "/dev/api/v1/irrigation/actual/atmospheric_params";
  ACTUAL_IRRIGATION_SOIL_PARAMS = "/dev/api/v1/irrigation/actual/soil_params";
  ACTUAL_IRRIGATION_MAX = "/dev/api/v1/irrigation/actual/max";
  PS_STRIP_PROJECTION =
    "/dev/api/v1/percent_shaded_area/plant_strip_projection";
  PS_CANOPY_PROJECTION =
    "/dev/api/v1/percent_shaded_area/plant_canopy_projection";
  PW_WETTED_RADIUS =
    "/dev/api/v1/percent_wetted_area/calculate_twice_saturated_wetted_radius";
  PW_IRRIGATION_TREE =
    "/dev/api/v1/percent_wetted_area/percent_wetted_area_irrigation_by_tree";
  PW_CONTINUOUS_STRIP =
    "/dev/api/v1/percent_wetted_area/percent_wetted_area_continuous_strip";
  TOTAL_IRRIGATION = "/dev/api/v1/irrigation/total";
  SHIFT_IRRIGATION = "/dev/api/v1/irrigation/maximum_irrigation_shift/";
  REFERENCE_EVAPOTRANSPIRATION_BLANEY_CRIDDLE =
    "/dev/api/v1/reference_evapotranspiration/blaney_criddle";
  REFERENCE_EVAPOTRANSPIRATION_HARGRAVES_SAMANI =
    "/dev/api/v1/reference_evapotranspiration/hargraves_samani";
  REFERENCE_EVAPOTRANSPIRATION_PENMAN_MONTEITH =
    "/dev/api/v1/reference_evapotranspiration/penman_monteith";
  REFERENCE_EVAPOTRANSPIRATION_BLANEY_CRIDDLE =
    "/dev/api/v1/reference_evapotranspiration/blaney_criddle";
  REFERENCE_EVAPOTRANSPIRATION_HARGRAVES_SAMANI =
    "/dev/api/v1/reference_evapotranspiration/hargraves_samani";
  REFERENCE_EVAPOTRANSPIRATION_PENMAN_MONTEITH =
    "/dev/api/v1/reference_evapotranspiration/penman_monteith";
  CROP_EVAPOTRANSPIRATION_BERNARDO =
    "/dev/api/v1/crop_evapotranspiration/Bernardo";
  CROP_EVAPOTRANSPIRATION_FERERES =
    "/dev/api/v1/crop_evapotranspiration/Fereres";
  CROP_EVAPOTRANSPIRATION_KELLER = "/dev/api/v1/crop_evapotranspiration/Keller";
  CROP_EVAPOTRANSPIRATION_KELLERANDBLIESNER =
    "/dev/api/v1/crop_evapotranspiration/Keller and Bliesner";
}

export default Configuration;
