import dayjs from 'dayjs';
import React, { useContext, createContext, useState } from 'react'


const globalContext = createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { }
});

export default function GlobalContextProvider({ children }) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    return (
        <globalContext.Provider value={{ monthIndex, setMonthIndex }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContextState = () => useContext(globalContext);


