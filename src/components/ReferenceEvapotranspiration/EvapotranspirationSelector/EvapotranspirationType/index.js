import React, { Component } from "react";
import InputHargraves from "../../EvapotranspirationInputs/InputHargraves";
import InputBlaney from "../../EvapotranspirationInputs/InputBlaney";
import InputPenman from "../../EvapotranspirationInputs/InputPenman";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleSelectChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    let componentSelec;

    switch (this.state.selectedOption) {
      case "Hargraves":
        componentSelec = <InputHargraves />;
        break;
      case "Blaney":
        componentSelec = <InputBlaney />;
        break;
      case "Penman":
        componentSelec = <InputPenman />;
        break;
      default:
        componentSelec = null;
    }

    return (
      <div>
        <select
          className="form-select d-flex flex-column align-items-center mb-3"
          aria-label="Default select example"
          onChange={this.handleSelectChange}
        >
          <option value="" selected>
            Select an option
          </option>
          <option value="Hargraves">Hargraves Samani</option>
          <option value="Blaney">Blaney Criddle</option>
          <option value="Penman">Penman Monteith</option>
        </select>
        {componentSelec}
      </div>
    );
  }
}
