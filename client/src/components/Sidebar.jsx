import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
    const [isProduccionOpen, setProduccionOpen] = useState(false);
    const [isCalidadOpen, setCalidadOpen] = useState(false);
    const [isMantenimientoOpen, setMantenimientoOpen] = useState(false);

    const toggleProduccion = () => setProduccionOpen(!isProduccionOpen);
    const toggleCalidad = () => setCalidadOpen(!isCalidadOpen);
    const toggleMantenimiento = () => setMantenimientoOpen(!isMantenimientoOpen);

    return (
        <aside className="w-[15.5vw] overflow-y-auto bg-white text-blue-570 h-full shadow-lg fixed left-0 top-0 scrollbar-hide">
       <div className=" ml-[10px] flex items-center justify-between pl-4 pr-2 w-[14vw] h-[73px] border-b-[0.9px] border-gray-200 bg-white">

  <img
    src="https://shorturl.at/K5R1j"
    className="h-[60px] md:h-[70px] object-cover"
    alt="Logo"
  />
  <span 
    className="material-symbols-outlined text-gray-300 cursor-pointer text-[26px] md:text-[22px] flex-shrink-0 ml-2"
  >
    menu_open
  </span>
</div>

            <div className="uppercase font-bold flex items-center font-sans h-[64px] pt-[2px] w-[12.5vw] border-b-[0.9px] border-gray-200 ml-[1.7vw] text-[11.5px]">
                <Link to="/Dashboard">
                    Dashboard
                </Link>
            </div>

            <nav className="mt-5">
  <ul>
    <li className="uppercase w-full md:w-[13vw] font-extrabold text-gray-700 flex justify-between items-center px-4 md:ml-[0.8vw] text-sm md:text-[11.5px]">
      <p>PRODUCCIÓN</p>
      <span
        className={`material-symbols-outlined text-blue-570 text-lg md:text-[22.5px] font-medium cursor-pointer transform transition-transform duration-300 ${isProduccionOpen ? 'rotate-180' : ''}`}
        onClick={toggleProduccion}
      >
        keyboard_arrow_up
      </span>
    </li>
    {isProduccionOpen && (
      <div className="pl-4 md:pl-[2vw]">
        <li className="mt-6 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">browse_activity</span>
          <p>Monitorización</p>
        </li>
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">history</span>
          <p>Histórico</p>
        </li>
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">settings</span>
          <p>Control</p>
        </li>
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">date_range</span>
          <p>Planificar</p>
        </li>
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">autostop</span>
          <p>Automatizar</p>
        </li>
      </div>
    )}
   <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
  </ul>

  <ul className="mt-5">
    <li className="uppercase w-full md:w-[13vw] font-extrabold text-gray-700 flex justify-between items-center px-4 md:ml-[0.8vw] text-sm md:text-[11.5px]">
      <p>CALIDAD</p>
      <span
        className={`material-symbols-outlined text-blue-570 text-lg md:text-[22.5px] font-medium cursor-pointer transform transition-transform duration-300 ${isCalidadOpen ? 'rotate-180' : ''}`}
        onClick={toggleCalidad}
      >
        keyboard_arrow_up
      </span>
    </li>
    {isCalidadOpen && (
      <div className="pl-4 md:pl-[2vw]">
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">widgets</span>
          <p>Submenu1</p>
        </li>
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">widgets</span>
          <p>Submenu2</p>
        </li>
      </div>
    )}
    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
  </ul>

  <ul className="mt-5">
    <li className="uppercase w-full md:w-[13vw] font-extrabold text-gray-700 flex justify-between items-center px-4 md:ml-[0.8vw] text-sm md:text-[11.5px]">
      <p>MANTENIMIENTO</p>
      <span
        className={`material-symbols-outlined text-blue-570 text-lg md:text-[22.5px] font-medium cursor-pointer transform transition-transform duration-300 ${isMantenimientoOpen ? 'rotate-180' : ''}`}
        onClick={toggleMantenimiento}
      >
        keyboard_arrow_up
      </span>
    </li>
    {isMantenimientoOpen && (
      <div className="pl-4 md:pl-[2vw]">
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">widgets</span>
          <p>Submenu1</p>
        </li>
        <li className="mt-5 flex items-center gap-4 text-sm md:text-[12px] font-medium text-gray-450 cursor-pointer">
          <span className="material-symbols-outlined text-lg md:text-[17.5px]">widgets</span>
          <p>Submenu2</p>
        </li>
      </div>
    )}
   <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
  </ul>
</nav>
        </aside>
    );
}
