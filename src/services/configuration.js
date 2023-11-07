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
}

export default Configuration;
