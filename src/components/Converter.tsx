import { useState } from "react";
import { convertToRgb } from "../convertToRgb";
import { isValidHex } from "../isValidHex";

export function Converter() {
  const [color, setColor] = useState<string>("#9921ff");
  const [result, setResult] = useState<string>("rgb(153, 33, 255)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidHex(color)) {
      const rgb = convertToRgb(color);
      setResult(rgb);
      document.body.style.backgroundColor = rgb;
    } else {
      setResult("Ошибка!");
      document.body.style.backgroundColor = "orange";
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="container">
          <input
            type="text"
            className="input-field"
            id="colorInput"
            placeholder="Введите код цвета..."
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <span className="result" id="result">
            {result}
          </span>
        </label>
      </form>
    </>
  );
}
