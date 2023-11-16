'use client'

import Graph from '@/components/auth/dashboard/Graph'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const GraphPage = () => {
    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/auth/login");
            return;
        }
    }, [isLoggedIn])
    return (
        <div className='flex flex-col w-full bg-[#1c1412] p-5 h-[90%] text-white items-center justify-center'>
            <h2>Graph Heading</h2>
            <p>Graph description</p>
            <div className='justify-center items-center  flex w-[80%] mx-8 my-8'>
                <Graph />
            </div>

        </div>
    )
}

export default GraphPage
