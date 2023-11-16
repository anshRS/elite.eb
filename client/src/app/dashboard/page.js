'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const DashboardPage = () => {
    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/auth/login");
            return;
        }
    }, [isLoggedIn])
    return (
        <>

        </>
    )
}

export default DashboardPage
