"use client";

import React, { useState } from "react";

const Colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Brown", hex: "#A52A2A" },
];

const Button = () => {
  const [randomValues, setRandomValues] = useState(
    Array(Colors.length).fill(null)
  );
  const [availableNumbers, setAvailableNumbers] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );

  const generateValue = (index: number) => {
    if (availableNumbers.length === 0) {
      console.log("All numbers are used!");
      return;
    }

    // Pick a random value from the available numbers
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const randomValue = availableNumbers[randomIndex];

    // Update the randomValues array
    const updatedValues = [...randomValues];
    updatedValues[index] = randomValue;

    // Remove the used value from availableNumbers
    const updatedAvailableNumbers = availableNumbers.filter(
      (num) => num !== randomValue
    );

    setRandomValues(updatedValues);
    setAvailableNumbers(updatedAvailableNumbers);

    console.log(`Button ${index + 1} clicked! Random value: ${randomValue}`);
  };

  return (
    <div className="flex flex-col gap-4">
      {Colors.map((color, i) => (
        <button
          key={i}
          className={`border-2 font-semibold px-8 py-2 rounded-xl transition duration-300 ${
            randomValues[i] !== null
              ? "bg-gray-400 cursor-not-allowed border-gray-500 text-gray-700"
              : "bg-gray-100 hover:bg-gray-200 border-gray-300"
          }`}
          style={{
            backgroundColor: randomValues[i] !== null ? undefined : color.hex,
          }}
          onClick={() => generateValue(i)}
          disabled={randomValues[i] !== null} // Disable button after it's clicked
        >
          {color.name} {randomValues[i] !== null ? `: ${randomValues[i]}` : ""}
        </button>
      ))}

      <button
        className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl shadow-lg transition duration-300"
        onClick={() => {
          setRandomValues(Array(Colors.length).fill(null));
          setAvailableNumbers(Array.from({ length: 10 }, (_, i) => i + 1));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
