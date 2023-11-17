'use client'

import { CalendarBlank } from '@phosphor-icons/react/dist/ssr';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const { email } = useSelector((state) => state.auth);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    const formattedDate = currentDateTime.toLocaleString(undefined, dateOptions);
    const formattedTime = currentDateTime.toLocaleString(undefined, timeOptions);
    return (
        <div className='w-full flex justify-between h-[10%] bg-[#1c1412] border-b border-slate-500 text-white items-center px-8'>
            <div>
                <p className='text-xl'>Trading Dashboard</p>
                <div className='flex gap-2 items-center'>
                    <CalendarBlank size={20} />
                    <p className='text-sm'>{formattedDate}, {formattedTime}</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className="relative w-12 h-12 shrink-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bottom-0 before:right-0 before:bg-green-500 before:border-2 before:border-white">
                    <img className="w-full h-full rounded-full overflow-hidden object-cover" width="48" height="48" src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="Avatar" />
                </div>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Navbar
