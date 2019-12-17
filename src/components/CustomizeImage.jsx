import React, { useState } from "react";

function CustomizeImage() {
  const [img, setImg] = useState();
  const [range, setRange] = useState();

  function handleChangeURL(e) {
    const img = e.target.value;
    console.log(img);
    setImg(img);
    // http://www.armadalekennel.com/wp-content/uploads/2017/09/cat-img.jpg
  }

  function handleChangeRange(e) {
    const range = e.target.value;
    console.log(range);
    setRange(range);
  }

  return (
    <div>
      <h2>Customize Image</h2>
      <div className="container">
        <input className="input-text" type="text" onChange={handleChangeURL} />
        <input
          className="input-range"
          type="range"
          min="0"
          max="200"
          onChange={handleChangeRange}
        />
        <p>
          {range} x {range} px
        </p>
        <img src={img} alt="input-value" height={range} width={range} />
      </div>
    </div>
  );
}

export default CustomizeImage;

// In this task you have to create a tool to previsualize pictures with diffrent sizes.

// Create a CustomizeImage component, rendered you go to "http://localhost:3000/customize-image".

// In this component, you should render:

// An text input
// A range input, between 0 and 200
// A text with the following pattern: "... x ... px", where ... is the value of the range input
// An image where the "src" is the value of the text input
// For this task, you need 2 states: size and url.

// Don't worry if your image doesn't have the right proportions. It should work perfectly with square images.
