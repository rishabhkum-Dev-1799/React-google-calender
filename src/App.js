import React, { useState } from 'react';
import './App.css';
import CalendarHeader from './components/Header/CalendarHeader';
import Sidebar from './components/Sidebar/Sidebar';
import Month from './components/Sidebar/Month';
import { fetchMonth } from './utils/helpers';

function App() {
  const [currentMonth, setCurrentMonth] = useState(fetchMonth());
  return (
    <>
      <div className="h-screen flex flex-col">
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
