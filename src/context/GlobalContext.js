import dayjs from 'dayjs';
import React, { useContext, createContext, useState, useEffect } from 'react'


const globalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => { },
    daySelected: 0,
    setDaySelected: (index) => { }
});

export default function GlobalContextProvider({ children }) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(null);
    useEffect(() => {
        setMonthIndex(smallCalendarMonth);
    }, [smallCalendarMonth])
    return (
        <globalContext.Provider value={{ monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, daySelected, setDaySelected }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContextState = () => useContext(globalContext);


