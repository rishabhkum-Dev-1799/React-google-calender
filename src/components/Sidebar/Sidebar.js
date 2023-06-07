import React from 'react'
import CreateEventButton from './SubComponents/CreateEventButton';
import SmallCalender from './SubComponents/SmallCalender';

const Sidebar = () => {
    return (
        <aside className='border p-5 w-64'>
            <CreateEventButton />
            <SmallCalender />
        </aside>

    )
}

export default Sidebar