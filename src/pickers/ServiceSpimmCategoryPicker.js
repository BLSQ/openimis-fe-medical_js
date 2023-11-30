import React, { Component } from "react";
import { ConstantBasedPicker } from "@openimis/fe-core";

import { SERVICE_SPIMM_CATEGORIES } from "../constants";

class MedicalSpimmServiceCategoryPicker extends Component {
  render() {
    return (
      <ConstantBasedPicker
        module="admin"
        label="medical.serviceSpimmCategory"
        constants={SERVICE_SPIMM_CATEGORIES}
        {...this.props}
      />
    );
  }
}

export default MedicalSpimmServiceCategoryPicker;
