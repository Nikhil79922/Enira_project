import React from "react";

const Scrap = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-start justify-center">
      <form className="bg-gray-200  px-4 rounded-lg  w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Máquina */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Máquina
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Máquina</option>
              <option>Máquina 1</option>
              <option>Máquina 2</option>
            </select>
          </div>

          {/* Orden */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Orden
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Orden</option>
              <option>Orden 1</option>
              <option>Orden 2</option>
            </select>
          </div>

          {/* Producto */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Producto
            </label>
            <input
              type="text"
              placeholder="Producto"
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            />
          </div>

          {/* Descripción */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Descripción
            </label>
            <input
              type="text"
              placeholder="Descripción"
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            />
          </div>

          {/* Unidad */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Unidad
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Unidad</option>
              <option>Unidad 1</option>
              <option>Unidad 2</option>
            </select>
          </div>

          {/* Tipo de defecto */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Tipo de defecto
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Tipo de defecto</option>
              <option>Defecto 1</option>
              <option>Defecto 2</option>
            </select>
          </div>

          {/* Cantidad */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
              Cantidad
            </label>
            <input
              type="number"
              placeholder="Cantidad"
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-left">
          <button
            type="submit"
            className="w-[170px] h-[35px] bg-blue-570 text-white text-sm font-medium rounded  hover:bg-blue-590"
          >
            Introducir Scrap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Scrap;