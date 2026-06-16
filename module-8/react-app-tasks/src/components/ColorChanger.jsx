import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="container">
        <h2>Color Changer</h2>
        <input
          name="color"
          value={color}
          type="text"
          onChange={(event) => setColor(event.target.value)}
          placeholder="Enter a color"
        />
        <div className="box" style={{ background: color }}></div>
      </div>
      <hr />
    </>
  );
};

export default ColorChanger;
