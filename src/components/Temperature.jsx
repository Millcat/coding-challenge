import React, { useState } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState({
    classTemp: "",
    forecast: ""
  });

  function handleChange(e) {
    const degres = e.target.value;
    // console.log(temp);
    if (degres < 10) {
      setTemperature({
        classTemp: "cold",
        forecast: "It's cold ❄️"
      });
    } else if (degres >= 10 && degres <= 30) {
      setTemperature({
        classTemp: "nice",
        forecast: "It's nice 🌼"
      });
    } else if (degres > 30) {
      setTemperature({
        classTemp: "warm",
        forecast: "It's warm ☀️"
      });
    }
  }
  return (
    <div>
      <h2>Temperature</h2>
      <input type="number" onChange={handleChange} />
      <div>
        <p className={temperature.classTemp}>{temperature.forecast}</p>
      </div>
    </div>
  );
};

export default Temperature;

// const Temperature = () => {
//   const [temperature, setTemperature] = useState();

//   function handleChange(e) {
//     const degres = e.target.value;
//     if (degres < 10) {
//       setTemperature("It's cold ❄️");
//     } else if (degres >= 10 && degres <= 30) {
//       setTemperature("It's nice 🌼");
//     } else if (degres > 30) {
//       setTemperature("It's warm ☀️");
//     }
//   }
//   return (
//     <div>
//       <h2>Temperature</h2>
//       <input type="number" onChange={handleChange} />
//       <div className="forecast">
//         <p>{temperature}</p>
//       </div>
//     </div>
//   );
// };
