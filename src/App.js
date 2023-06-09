import React, { useEffect, useState } from 'react';
import './App.css';
import CalendarHeader from './components/Header/CalendarHeader';
import Sidebar from './components/Sidebar/Sidebar';
import Month from './components/Sidebar/Month';
import { fetchMonth } from './utils/helpers';
import { useGlobalContextState } from './context/GlobalContext';
import EventModal from './components/EventModal/EventModal';

function App() {
  const [currentMonth, setCurrentMonth] = useState(fetchMonth());
  const { monthIndex, showGlobalModal } = useGlobalContextState();
  useEffect(() => {
    setCurrentMonth(fetchMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col">
        {showGlobalModal && <EventModal />}
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
