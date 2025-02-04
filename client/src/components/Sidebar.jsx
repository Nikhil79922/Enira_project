import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const location = useLocation();
  const [isProduccionOpen, setProduccionOpen] = useState(false);
  const [isCalidadOpen, setCalidadOpen] = useState(false);
  const [isMantenimientoOpen, setMantenimientoOpen] = useState(false);

  const toggleProduccion = () => setProduccionOpen(!isProduccionOpen);
  const toggleCalidad = () => setCalidadOpen(!isCalidadOpen);
  const toggleMantenimiento = () => setMantenimientoOpen(!isMantenimientoOpen);

  return (
    <aside className="w-[15.5vw] overflow-y-auto bg-white text-blue-570 h-full shadow-lg fixed left-0 top-0 scrollbar-hide">
      <div className="ml-[10px] flex items-center justify-between pl-4 pr-2 w-[14vw] h-[73px] border-b-[0.9px] border-gray-200 bg-white">
      <img 
  src="../src/assets/logo.jpeg" 
  className="h-[60px] w-[90px] md:h-[70px] md:w-[100px] object-cover" 
  alt="Logo" 
/>

        <span className="material-symbols-outlined text-gray-300 cursor-pointer text-[26px] md:text-[22px] flex-shrink-0 ml-2">
          menu_open
        </span>
      </div>

      <div className="uppercase font-bold flex items-center font-sans h-[64px] pt-[2px] w-[12.5vw] border-b-[0.9px] border-gray-200 ml-[1.7vw] text-[11.5px]">
        <Link to="/Dashboard">Dashboard</Link>
      </div>

      <nav className="mt-5">
        <ul>
          {/* Producción Section */}
          <li className="uppercase font-extrabold text-gray-700 flex justify-between items-center px-4 text-[12px]">
            <p>PRODUCCIÓN</p>
            <span
              className={`material-symbols-outlined text-blue-570 cursor-pointer transform transition-transform duration-300 ${
                isProduccionOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleProduccion}
            >
              keyboard_arrow_up
            </span>
          </li>
          {isProduccionOpen && (
            <div className="pl-4">
              {[
                { to: '/Dashboard/monitorizacion', icon: 'browse_activity', text: 'Monitorización' },
                { to: '/Dashboard/historico', icon: 'history', text: 'Histórico' },
                { to: '/Dashboard/control/orden', icon: 'settings', text: 'Control' },
                { to: '/Dashboard/planificar', icon: 'date_range', text: 'Planificar' },
                { to: '/Dashboard/automatizar', icon: 'autostop', text: 'Automatizar' },
              ].map(({ to, icon, text }) => (
                <li key={to} className={`mt-5 flex items-center gap-4 text-sm font-medium cursor-pointer ${
                  location.pathname === to ? "text-black" : "text-gray-450"
                }`}>
                  <span className={`material-symbols-outlined text-lg ${
                    location.pathname === to ? "text-blue-500" : "text-gray-450"
                  }`}>{icon}</span>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </div>
          )}
          <li className="mt-5 w-full border-b-[0.9px] border-gray-300"></li>

          {/* Calidad Section */}
          <li className="uppercase font-extrabold text-gray-700 flex justify-between items-center px-4 text-[12px]">
            <p>CALIDAD</p>
            <span
              className={`material-symbols-outlined text-blue-570 cursor-pointer transform transition-transform duration-300 ${
                isCalidadOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleCalidad}
            >
              keyboard_arrow_up
            </span>
          </li>
          {isCalidadOpen && (
            <div className="pl-4">
              {[
                { to: '/Dashboard/calidad/submenu1', icon: 'widgets', text: 'Submenu1' },
                { to: '/Dashboard/calidad/submenu2', icon: 'widgets', text: 'Submenu2' },
              ].map(({ to, icon, text }) => (
                <li key={to} className={`mt-5 flex items-center gap-4 text-sm font-medium cursor-pointer ${
                  location.pathname === to ? "text-black" : "text-gray-450"
                }`}>
                  <span className={`material-symbols-outlined text-lg ${
                    location.pathname === to ? "text-blue-500" : "text-gray-450"
                  }`}>{icon}</span>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </div>
          )}
          <li className="mt-5 w-full border-b-[0.9px] border-gray-300"></li>

          {/* Mantenimiento Section */}
          <li className="uppercase font-extrabold text-gray-700 flex justify-between items-center px-4 text-[12px]">
            <p>MANTENIMIENTO</p>
            <span
              className={`material-symbols-outlined text-blue-570 cursor-pointer transform transition-transform duration-300 ${
                isMantenimientoOpen ? 'rotate-180' : ''
              }`}
              onClick={toggleMantenimiento}
            >
              keyboard_arrow_up
            </span>
          </li>
          {isMantenimientoOpen && (
            <div className="pl-4">
              {[
                { to: '/Dashboard/mantenimiento/submenu1', icon: 'widgets', text: 'Submenu1' },
                { to: '/Dashboard/mantenimiento/submenu2', icon: 'widgets', text: 'Submenu2' },
              ].map(({ to, icon, text }) => (
                <li key={to} className={`mt-5 flex items-center gap-4 text-sm font-medium cursor-pointer ${
                  location.pathname === to ? "text-black" : "text-gray-450"
                }`}>
                  <span className={`material-symbols-outlined text-lg ${
                    location.pathname === to ? "text-blue-500" : "text-gray-450"
                  }`}>{icon}</span>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </div>
          )}
          <li className="mt-5 w-full border-b-[0.9px] border-gray-300"></li>
        </ul>
      </nav>
    </aside>
  );
}
