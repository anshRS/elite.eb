'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const AuthLayout = ({children}) => {
    const { isLoggedIn, user_id } = useSelector((state) => state.auth);
    const router = useRouter();

    useEffect(()=>{
        if(isLoggedIn) {
            router.push(`/dashboard/${user_id}`);
            return;
        }
    }, [isLoggedIn])

    return (
        <div className="h-screen w-full flex items-center bg-auth-img font-raleway" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center'}}>
            {children}
        </div>
    )
}

export default AuthLayout
