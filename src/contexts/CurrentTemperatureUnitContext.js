import React from "react";

const currentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

export default currentTemperatureUnitContext;
