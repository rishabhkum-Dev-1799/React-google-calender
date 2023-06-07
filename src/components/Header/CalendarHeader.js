import dayjs from 'dayjs';
import React from 'react'
import calenderLogo from '../../assets/logo.png'
import { useGlobalContextState } from '../../context/GlobalContext'
const CalendarHeader = () => {
    //component states
    const { monthIndex, setMonthIndex } = useGlobalContextState();

    //handler functions
    const togglePreviousMonth = () => {
        setMonthIndex(monthIndex - 1);
    };
    const toggleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }
    const handleReset = () => {
        console.log(monthIndex);
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    }
    return (
        <>
            <header className='px-4 py-2 flex items-center'>
                <img src={calenderLogo} alt='calender' className='w-12 h-12 mr-2' />
                <h1 className='mr-10 text-xl text-gray-500 font-bold'>
                    Calender
                </h1>
                <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
                    Today
                </button>
                <button onClick={togglePreviousMonth} >
                    <span className='material-icons-outlined mx-2 cursor-pointer text-gray-600'>
                        chevron_left
                    </span>
                </button>
                <button onClick={toggleNextMonth}>
                    <span className='material-icons-outlined mx-2 cursor-pointer text-gray-600'>
                        chevron_right
                    </span>
                </button>
                <h2 className='text-xl text-gray-600 font-bold ml-2 px-4 py-2'>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
                </h2>
            </header>
        </>
    )
}

export default CalendarHeader