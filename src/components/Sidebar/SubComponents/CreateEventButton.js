import React from 'react'
import iconimage from '../../../assets/plus.svg'
import { useGlobalContextState } from '../../../context/GlobalContext'

const CreateEventButton = () => {
    const { setShowGlobalModal } = useGlobalContextState();
    const eventModalHandler = () => {
        setShowGlobalModal(true);
    }
    return (
        <button onClick={eventModalHandler} className='border rounded-full p-2 flex items-center shadow-md hover:shadow-2xl'>
            <img src={iconimage} alt='create_event' className='w-7 h-7 ' />
            <span className='pl-2 pr-7 text-gray-600 font-bold'>Create</span>
        </button>
    )
}

export default CreateEventButton