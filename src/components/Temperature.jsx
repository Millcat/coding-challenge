import React, { useState } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState();

  function handleChange(e) {
    const degres = e.target.value;
    // console.log(temp);
    if (degres < 10) {
      setTemperature("It's cold ❄️");
    } else if (degres >= 10 && degres <= 30) {
      setTemperature("It's nice 🌼");
    } else if (degres > 30) {
      setTemperature("It's warm ☀️");
    }
  }
  return (
    <div>
      <h2>Temperature</h2>
      <input type="number" onChange={handleChange} />
      <div className="forecast">
        <p>{temperature}</p>
      </div>
    </div>
  );
};

// Task 1 | Create the page Temperature
// In this task you have to create a tool to give information about the weather.

// Create a Temperature component, renderd when you go to "http://localhost:3000/temperature".

// This component should render:

// An input so that the user can type a temperature, in Celsius
// A text that changes based on the temperature:
// When the temperature is lower than 10 => "It's cold ❄️" (in blue)
// When the temperature is between 10 and 30 => "It's nice 🌼" (in black)
// When the temperature is above 30 => "It's warm ☀️" (in red)
// For this task, you need only 1 state temperature.

export default Temperature;
