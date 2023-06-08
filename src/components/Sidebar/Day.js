import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useGlobalContextState } from '../../context/GlobalContext';

const Day = ({ day, rowidx }) => {
    // states of the components
    const [dayEvents, setDayEvents] = useState([]);
    // context for the components
    const { setDaySelected, setShowGlobalModal, savedEvents, selectedEvents, setSelectedEvents } = useGlobalContextState();
    // function to add the custom styles on the todays date 

    useEffect(() => {
        const filteredDayEvents = savedEvents.filter((event) => dayjs(event.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
        setDayEvents(filteredDayEvents);

    }, [savedEvents, day])
    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? "bg-blue-600 text-white rounded-full w-7" : " "
    };
    const clickHandler = () => {
        setDaySelected(day);
        setShowGlobalModal(true);
    };
    return (
        <>
            <div className='border border-gray-200 flex flex-col '>
                <div className='flex-1 cursor-pointer' onClick={clickHandler}>
                    <header className='flex flex-col items-center'>
                        {rowidx === 0 &&
                            <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>
                        }
                        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}> {day.format('DD')}</p>
                    </header>
                    {dayEvents.map((event, idx) => {
                        return (
                            <div className={`bg-${event.label}-600 p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
                                onClick={() => setSelectedEvents(event)}>
                                {event?.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default Day;