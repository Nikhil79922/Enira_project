import { useState } from 'react';

export default function DashboardContent() {
  const initialAlerts = [
    { timestamp: '2024-10-30 06:21:45', tipo: 'Tipo1', descripcion: 'Descripción de alerta 1' },
    { timestamp: '2024-10-30 06:48:35', tipo: 'Tipo2', descripcion: 'Descripción de alerta 2' },
    { timestamp: '2024-10-30 07:11:06', tipo: 'Tipo3', descripcion: 'Descripción de alerta 3' },
    { timestamp: '2024-10-30 07:15:25', tipo: 'Tipo4', descripcion: 'Descripción de alerta 4' },
    { timestamp: '2024-10-30 07:18:36', tipo: 'Tipo5', descripcion: 'Descripción de alerta 5' },
    { timestamp: '2024-10-30 07:21:49', tipo: 'Tipo6', descripcion: 'Descripción de alerta 6' },
  ];

  const [isdbo, setdbo] = useState(false);
  const [alerts, setAlerts] = useState(initialAlerts);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  const toggledbo = () => setdbo(!isdbo);

  const sortData = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'ascending'
        ? 'descending'
        : 'ascending';

    const sortedAlerts = [...alerts].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setAlerts(sortedAlerts);
    setSortConfig({ key, direction });
  };

  const getArrowClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending'
        ? 'rotate-180 transition-transform duration-200'
        : 'transition-transform duration-200';
    }
    return '';
  };

  return (
    <div className="ml-[20px] flex flex-col w-[84vw]">
      <div className="flex gap-[12px] items-center mt-4 mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-black">Dashboard</h2>
        <span className="material-symbols-outlined text-gray-400 bg-gray-200 p-2 rounded-full cursor-pointer text-base md:text-xl">
          edit
        </span>
      </div>

      <div className="bg-white rounded-lg shadow p-4  md:p-3 w-[82.5vw] overflow-x-auto">
        <div className="flex gap-[12px] items-center pb-4 border-b">
          <p className="text-sm md:text-lg font-bold text-black">dbo.Alertas</p>
          <span
            className={`material-symbols-outlined text-lg md:text-xl cursor-pointer ${isdbo ? 'rotate-180' : ''} transition-transform`}
            onClick={toggledbo}
          >
            keyboard_arrow_down
          </span>
        </div>

        {!isdbo && (
          <table className="table-auto w-full mt-4 text-left border-collapse">
            <thead className="bg-blue-570 text-white  ">
              <tr className=' '>
                <th
                  className="p-2 md:p-3 text-sm md:text-base font-semibold cursor-pointer rounded-tl-lg"
                  onClick={() => sortData('timestamp')}
                >
                  Timestamp
                  <div className={`inline-block ml-1 ${getArrowClass('timestamp')}`}>
                    <span className="material-symbols-outlined text-xs">
                      keyboard_arrow_up
                    </span>
                    <span className="material-symbols-outlined text-xs">
                      keyboard_arrow_down
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 md:p-3 text-sm md:text-base font-semibold cursor-pointer"
                  onClick={() => sortData('tipo')}
                >
                  Tipo Alerta
                  <div className={`inline-block ml-1 ${getArrowClass('tipo')}`}>
                    <span className="material-symbols-outlined text-xs">
                      keyboard_arrow_up
                    </span>
                    <span className="material-symbols-outlined text-xs">
                      keyboard_arrow_down
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 md:p-3 text-sm md:text-base rounded-tr-lg font-semibold cursor-pointer"
                  onClick={() => sortData('descripcion')}
                >
                  Descripción
                  <div className={`inline-block ml-1   ${getArrowClass('descripcion')}`}>
                    <span className="material-symbols-outlined text-xs">
                      keyboard_arrow_up
                    </span>
                    <span className="material-symbols-outlined text-xs">
                      keyboard_arrow_down
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 1 ? 'bg-blue-50' : 'bg-white'
                  } border-[.6px] border-gray-300`}
                >
                  <td className="p-2 md:p-3 text-xs md:text-[13px] font-semibold text-gray-700">
                    {alert.timestamp}
                  </td>
                  <td className="p-2 md:p-3 text-xs md:text-[13px] font-semibold text-gray-700">
                    {alert.tipo}
                  </td>
                  <td className="p-2 md:p-3 text-xs md:text-[13px] font-semibold text-gray-700">
                    {alert.descripcion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
