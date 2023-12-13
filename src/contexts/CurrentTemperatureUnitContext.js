import React from "react";

const currentTemperatureUnitContext = React.createContext({
  CurrentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

export default currentTemperatureUnitContext;
