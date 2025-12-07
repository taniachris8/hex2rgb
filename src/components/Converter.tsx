import { useState } from "react";
import { convertToRgb } from "../convertToRgb";
import { isValidHex } from "../isValidHex";

export function Converter() {
  const [color, setColor] = useState<string>("#9921ff");
  const [result, setResult] = useState<string>("rgb(153, 33, 255)");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const hex = e.target.value;
    setColor(hex);

    if (isValidHex(hex)) {
      const rgb = convertToRgb(hex);
      setResult(rgb);
      document.body.style.backgroundColor = rgb;
    } else {
      setResult("Ошибка!");
      document.body.style.backgroundColor = "orange";
    }
  };

  return (
    <>
      <form>
        <label className="container">
          <input
            type="text"
            className="input-field"
            id="colorInput"
            placeholder="Введите код цвета..."
            value={color}
            onChange={handleChange}
          />

          <span className="result" id="result">
            {result}
          </span>
        </label>
      </form>
    </>
  );
}
