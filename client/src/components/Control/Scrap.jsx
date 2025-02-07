import React, { useState } from "react";
import SelectBox from "../SelectBox"; // Import reusable SelectBox component

const machineOptions = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
];

const orderOptions = [
  { value: "Orden1", label: "Orden 1" },
  { value: "Orden2", label: "Orden 2" },
];

const unitOptions = [
  { value: "Unidad1", label: "Unidad 1" },
  { value: "Unidad2", label: "Unidad 2" },
];

const defectOptions = [
  { value: "Defecto1", label: "Defecto 1" },
  { value: "Defecto2", label: "Defecto 2" },
];

const Scrap = () => {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedDefect, setSelectedDefect] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="bg-gray-200 min-h-screen flex items-start justify-center">
      <form className="bg-gray-200 px-4 rounded-lg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

          {/* Producto Input */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">Producto</label>
            <input
              type="text"
              placeholder="Producto"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full h-[36px] bg-white text-xs outline-none border border-gray-100 rounded px-2"
            />
          </div>

          {/* Descripción Input */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-black mb-1">Descripción</label>
            <input
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[36px] bg-white text-xs outline-none border border-gray-100 rounded px-2"
            />
          </div>

          {/* Unidad Dropdown */}
          <SelectBox 
            label="Unidad" 
            options={unitOptions} 
            value={selectedUnit} 
            onChange={(e) => setSelectedUnit(e.target.value)}
            placeholder="Unidad"
          />

          {/* Tipo de Defecto Dropdown */}
          <SelectBox 
            label="Tipo de defecto" 
            options={defectOptions} 
            value={selectedDefect} 
            onChange={(e) => setSelectedDefect(e.target.value)}
            placeholder="Tipo de defecto"
          />

          {/* Cantidad Input */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">Cantidad</label>
            <input
              type="number"
              placeholder="Cantidad"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full h-[36px] bg-white text-xs outline-none border border-gray-100 rounded px-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-left">
          <button
            type="submit"
            className="w-[170px] h-[35px] bg-blue-570 text-white text-sm font-medium rounded hover:bg-blue-590"
          >
            Introducir Scrap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Scrap;
