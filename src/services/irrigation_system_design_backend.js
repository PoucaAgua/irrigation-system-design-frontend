import Configuration from "./configuration";

class IrrigationSystemDesignService {
  constructor() {
    this.config = new Configuration();
    this.URL = this.config.IRRIGATION_SYSTEM_DESIGN_BACKEND_URL;
    this.ETO_HARGRAVES_SAMANI = this.URL + this.config.ETO_HARGRAVES_SAMANI_PATH;

    this.projects = [
      {
        "id": 1,
        "name": "project1",
        "user": "ravellys"
      },
      {
        "id": 2,
        "name": "project2",
        "user": "ravellys"
      },
    ];
  }

  async calculateEto(payload) {
    const response = await fetch(this.ETO_HARGRAVES_SAMANI,
      {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

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