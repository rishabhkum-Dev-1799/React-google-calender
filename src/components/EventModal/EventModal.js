import React, { useEffect, useState } from 'react'
import { useGlobalContextState } from '../../context/GlobalContext';
import calenderLogo from '../../assets/logo.png'
import { labelColor } from './EventColorsArray';
const EventModal = () => {
    // context for the applications
    const { setShowGlobalModal, daySelected, dispatchCalEvents, selectedEvents } = useGlobalContextState();
    // states for the components
    const [title, setTitle] = useState(selectedEvents ? selectedEvents?.title : '');
    const [description, setDescription] = useState(selectedEvents ? selectedEvents?.description : '');
    const [labelClass, setLabelClass] = useState(selectedEvents ? selectedEvents.label : labelColor[0]);
    console.log(selectedEvents);

    // handler functions
    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    };
    const eventModalHandler = (event) => {
        event.preventDefault();
        setShowGlobalModal(false);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const newEvent = {
            title,
            description,
            label: labelClass,
            day: daySelected.valueOf(),
            id: selectedEvents ? selectedEvents.id : Date.now()
        }
        if (selectedEvents) {
            dispatchCalEvents({ type: 'updated', payload: newEvent });
        }
        else {
            dispatchCalEvents({ type: 'push', payload: newEvent })
        }
        setShowGlobalModal(false);
    }
    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='w-1/4 shadow-2xl bg-white rounded-lg '>
                <header className='bg-gray-200 px-4 py-2 flex justify-between items-center'>
                    <img src={calenderLogo} alt='calender' className='w-10  mr-2' />
                    <button onClick={eventModalHandler}>
                        {selectedEvents && (
                            <span className='material-icons-outlined text-gray-400 cursor-pointer mr-2 ' onClick={() => {
                                dispatchCalEvents({ type: 'delete', payload: selectedEvents });
                                setShowGlobalModal(false)
                            }} >
                                delete
                            </span>)}
                        <span className='material-icons-outlined text-gray-400 cursor-pointer'>
                            close
                        </span>
                    </button>
                </header>
                <div className='p-3'>
                    <div className='grid grid-cols-1/5 items-end gap-y-5 '>
                        <div></div>
                        <input
                            type='text'
                            required
                            value={title}
                            name="Add title"
                            placeholder='Add Title'
                            onChange={titleHandler}
                            className='pt-3 pb-2 border-0 text-gray-600 text-xl font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                        />
                        <span className='material-icons-outlined text-gray-400'>
                            schedule
                        </span>
                        <p>{daySelected.format('dddd MMMM,DD')}</p>
                        <span className='material-icons-outlined text-gray-400'>
                            segment
                        </span>
                        <input
                            type='text'
                            required
                            value={description}
                            name="description"
                            placeholder='Add Description'
                            onChange={descriptionHandler}
                            className='pt-3 pb-2 border-0 text-gray-600 text-l font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500'
                        />
                        <span className='material-icons-outlined text-gray-400'>
                            bookmark
                        </span>
                        <div className='flex gap-x-2'>
                            {labelColor.map((label, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <span className={`bg-${label}-500 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer `} onClick={() => setLabelClass(label)}>
                                            {label === labelClass && (
                                                <span className="material-icons-outlined text-sm">
                                                    check
                                                </span>)
                                            }
                                        </span>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <footer className=' w-100 p-3 flex justify-end items-center border-t mt-5'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white rounded px-6 py-2 items-center'
                        onClick={submitHandler}>Save</button>
                </footer>
            </form >
        </div >
    )
}

export default EventModal