import React, { useState } from "react";
import SelectBox from "../SelectBox.jsx"; // Importing the reusable SelectBox component

const machineOptions = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
  { value: "Máquina3", label: "Máquina 3" },
];

const orderOptions = [
  { value: "Orden1", label: "Orden 1" },
  { value: "Orden2", label: "Orden 2" },
  { value: "Orden3", label: "Orden 3" },
];

export default function FilterControls() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {/* Máquina Dropdown */}
      <SelectBox
        label="Máquina"
        options={machineOptions}
        value={selectedMachine}
        onChange={(e) => setSelectedMachine(e.target.value)}
        placeholder="Filtro Máquina"
      />

      {/* Orden Dropdown */}
      <SelectBox
        label="Orden"
        options={orderOptions}
        value={selectedOrder}
        onChange={(e) => setSelectedOrder(e.target.value)}
        placeholder="Filtro Orden"
      />

      {/* Fecha Inicio Input */}
      <div>
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Fecha Inicio</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
        />
      </div>

      {/* Fecha Fin Input */}
      <div>
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Fecha Fin</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
        />
      </div>
    </div>
  );
}
