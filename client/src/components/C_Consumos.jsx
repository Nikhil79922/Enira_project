/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SelectBox from "./SelectBox"; // Importing the reusable SelectBox component

const machineOptions = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
  { value: "Máquina3", label: "Máquina 3" },
  { value: "Máquina4", label: "Máquina 4" },
  { value: "Máquina5", label: "Máquina 5" },
  { value: "Máquina6", label: "Máquina 6" },
];

const orderOptions = [
  { value: "0F0001", label: "0F0001" },
  { value: "0F0002", label: "0F0002" },
  { value: "0F0003", label: "0F0003" },
  { value: "0F0004", label: "0F0004" },
  { value: "0F0005", label: "0F0005" },
  { value: "0F0006", label: "0F0006" },
];

function C_Consumos() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [unit, setUnit] = useState("");
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleStartOrder = () => {
    alert(`Iniciar Orden for ${selectedMachine} and ${selectedOrder}`);
  };

  return (
    <div className="grid grid-cols-1 mb-6 w-[100vw] lg:w-[83vw] mt-[-10px] ml-[5px] lg:ml-[10px]">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-3 rounded">
        {/* Máquina Dropdown */}
        <SelectBox
          label="Máquina"
          options={machineOptions}
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          placeholder="Máquina"
        />

        {/* Orden Dropdown */}
        <SelectBox
          label="Orden"
          options={orderOptions}
          value={selectedOrder}
          onChange={(e) => setSelectedOrder(e.target.value)}
          placeholder="Orden"
        />

        {/* Unidad Input */}
        <div className="flex flex-col w-full">
          <label className="block text-sm font-medium text-black mb-1">Unidad</label>
          <input
            type="text"
            name="Unidad"
            placeholder="Unidad"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full h-[40px] bg-white text-xs outline-none border border-gray-300 rounded px-2"
          />
        </div>

        {/* Referencia Input */}
        <div className="flex flex-col w-full">
          <label className="block text-sm font-medium text-black mb-1">Referencia</label>
          <input
            type="text"
            name="Referencia"
            placeholder="Referencia"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full h-[40px] bg-white text-xs outline-none border border-gray-300 rounded px-2"
          />
        </div>

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
      <div className="ml-3 mt-4 text-left">
        <button
          className="w-[170px] h-[35px] bg-blue-570 text-white text-sm font-medium rounded hover:bg-blue-590"
          onClick={handleStartOrder}
        >
          Imprimir etiquetas
        </button>
      </div>
    </div>
  );
}

export default C_Consumos;
