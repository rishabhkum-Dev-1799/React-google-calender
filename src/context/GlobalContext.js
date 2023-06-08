import dayjs from 'dayjs';
import React, { useContext, createContext, useState, useEffect, useReducer } from 'react'


const globalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => { },
    daySelected: 0,
    setDaySelected: (index) => { },
    showGlobalModal: false,
    setShowGlobalModal: (index) => { },
    dispatchCalEvents: ({ type, payload }) => { },
    savedEvents: [],
    selectedEvents: null,
    setSelectedEvents: () => { }
});

const savedEventsReducer = (state, action) => {
    switch (action?.type) {
        case ('push'): {
            return [...state, action?.payload];
        }
        case ('updated'): {
            return state.map((event) => event.id === action?.payload?.id ? (action?.payload) : event)
        }
        case ('delete'): {
            return state.filter((event) => event.id !== action?.payload?.id);
        }
        default: {
            throw new Error();
        }
    }
};
const initEvents = () => {
    const storedEvents = localStorage.getItem('storedEvents');
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    return parsedEvents;
};
export default function GlobalContextProvider({ children }) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showGlobalModal, setShowGlobalModal] = useState(false);
    const [selectedEvents, setSelectedEvents] = useState(null);
    const [savedEvents, dispatchCalEvents] = useReducer(savedEventsReducer, [], initEvents);

    useEffect(() => {
        setMonthIndex(smallCalendarMonth);
    }, [smallCalendarMonth])

    useEffect(() => {
        localStorage.setItem('storedEvents', JSON.stringify(savedEvents));
    }, [savedEvents])

    useEffect(() => {
        if (!showGlobalModal) {
            setSelectedEvents(null);
        }
    }, [showGlobalModal])
    return (
        <globalContext.Provider value={{ monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, daySelected, setDaySelected, showGlobalModal, setShowGlobalModal, dispatchCalEvents, savedEvents, selectedEvents, setSelectedEvents }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContextState = () => useContext(globalContext);


