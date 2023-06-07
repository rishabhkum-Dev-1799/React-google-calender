import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react'
import { useGlobalContextState } from '../../../context/GlobalContext';
import { fetchMonth } from '../../../utils/helpers';

const SmallCalender = () => {
    // handling states for the components
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(fetchMonth());

    // context for the components
    const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } = useGlobalContextState();
    //handling side effects for the components
    useEffect(() => {
        setCurrentMonth(fetchMonth(currentMonthIdx));
    }, [currentMonthIdx])

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex])

    // function handlers for the components
    const previousMonthHandler = () => {
        setCurrentMonthIdx(currentMonthIdx - 1);
    };

    const nextMonthHandler = () => {
        setCurrentMonthIdx(currentMonthIdx + 1);
    };

    const getStyleClass = (day) => {
        const nowDay = dayjs().format('DD-MM-YY');
        const currentDay = day.format('DD-MM-YY');
        const selectedDay = daySelected && daySelected.format('DD-MM-YY');
        if (nowDay === currentDay) {
            return 'bg-blue-600 text-white rounded-full w-7'
        } else if (currentDay === selectedDay) {
            return 'bg-blue-200 text-blue-600 rounded-full w-7 font-bold'
        }
        else {
            return ''
        }
    };

    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
                </p>
                <div>
                    <button onClick={previousMonthHandler}>
                        <span className='material-icons-outlined text-gray-500 mx-2'>
                            chevron_left
                        </span>
                    </button>
                    <button onClick={nextMonthHandler}>
                        <span className='material-icons-outlined text-gray-500 mx-2'>
                            chevron_right
                        </span>
                    </button>
                </div>
            </header>
            <div className='grid grid-cols-7 grid-rows-6 gap-1'>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className='text-sm py-1 text-center font-bold'>
                        {day.format('dd').charAt(0)}
                    </span>
                ))
                }
                {
                    currentMonth.map((row, i) => {
                        return (
                            <React.Fragment key={i}>
                                {row.map((day, idx) => (
                                    <button key={idx} className={` py-1 px-1 w-full ${getStyleClass(day)}`} onClick={() => {
                                        setSmallCalendarMonth(currentMonthIdx);
                                        setDaySelected(day);
                                    }}>
                                        <span className={`text-sm text-center `}>{day.format('D')}</span>
                                    </button>
                                ))}
                            </React.Fragment>
                        )
                    })
                }
            </div >
        </div >
    )
}

export default SmallCalender