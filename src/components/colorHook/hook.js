import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './hook.scss';

export default function ChangeColor(props) {
  const [color1, setColor1] = useState('#0B486B');
  const [color2, setColor2] = useState('#F56217');
  function handleColors() {
    setColor1(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    setColor2(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  useEffect(() => {
    props.colorHandler(color1, color2);
  });
  ChangeColor.propTypes = {
    colorHandler: PropTypes.func.isRequired,
  };
  return (
    <div className="container">
      <p>Your Gradient color is combination of: </p>
      <div className="colorsContainer">
        <div className="firstColor" style={{ backgroundColor: color1 }}>
          <p id="hexColor">{color1}</p>
        </div>
        <div className="secondColor" style={{ backgroundColor: color2 }}>
          <p id="hexColor">
            { color2 }
          </p>
        </div>
      </div>
      <button type="button" className="bgButton" onClick={handleColors}>Change Background Color</button>
    </div>
  );
}
