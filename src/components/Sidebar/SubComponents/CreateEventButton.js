import React from 'react'
import iconimage from '../../../assets/plus.svg'

const CreateEventButton = () => {
    return (
        <button className='border rounded-full p-2 flex items-center shadow-md hover:shadow-2xl'>
            <img src={iconimage} alt='create_event' className='w-7 h-7 ' />
            <span className='pl-2 pr-7 text-gray-600 font-bold'>Create</span>
        </button>
    )
}

export default CreateEventButton