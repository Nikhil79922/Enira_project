/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SelectBox from "../SelectBox"; // Importing the reusable SelectBox component

const printerOptions = [
  { value: "Impresora1", label: "Impresora 1" },
  { value: "Impresora2", label: "Impresora 2" },
  { value: "Impresora3", label: "Impresora 3" },
  { value: "Impresora4", label: "Impresora 4" },
  { value: "Impresora5", label: "Impresora 5" },
  { value: "Impresora6", label: "Impresora 6" },
];

const labelOptions = [
  { value: "Etiqueta1", label: "Etiqueta 1" },
  { value: "Etiqueta2", label: "Etiqueta 2" },
  { value: "Etiqueta3", label: "Etiqueta 3" },
  { value: "Etiqueta4", label: "Etiqueta 4" },
  { value: "Etiqueta5", label: "Etiqueta 5" },
  { value: "Etiqueta6", label: "Etiqueta 6" },
];

function C_Etiquetas() {
  const [selectedPrinter, setSelectedPrinter] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleStartOrder = () => {
    alert(`Iniciar Orden para ${selectedPrinter} con ${selectedLabel}`);
  };

  return (
    <div className="grid grid-cols-1 gap-2 mb-6 w-[100vw] lg:w-[83vw] mt-[-10px] ml-[5px] lg:ml-[10px]">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-3 rounded">
        {/* Impresora Dropdown */}
        <SelectBox
          label="Impresora"
          options={printerOptions}
          value={selectedPrinter}
          onChange={(e) => setSelectedPrinter(e.target.value)}
          placeholder="Impresora"
        />

        {/* Etiqueta Dropdown */}
        <SelectBox
          label="Etiqueta"
          options={labelOptions}
          value={selectedLabel}
          onChange={(e) => setSelectedLabel(e.target.value)}
          placeholder="Etiqueta"
        />

        {/* Cantidad Input */}
        <div className="flex flex-col w-full">
          <label className="block text-sm font-medium text-black mb-1">Cantidad</label>
          <input
            type="text"
            name="Cantidad"
            placeholder="Cantidad"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full h-[40px] bg-white text-xs outline-none border border-gray-300 rounded px-2"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-start lg:justify-start ml-[12px]">
        <button
          className="md:w-[15vw] sm:w-[22vw] w-[95vw] lg:w-[15vw] h-[36px] bg-blue-570 text-white text-sm font-medium hover:bg-blue-590 rounded"
          onClick={handleStartOrder}
        >
          Imprimir etiquetas
        </button>
      </div>
    </div>
  );
}

export default C_Etiquetas;
