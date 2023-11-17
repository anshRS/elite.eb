import Navbar from '@/components/auth/dashboard/Navbar'
import Sidebar from '@/components/auth/dashboard/Sidebar'
import React from 'react'

export const metadata = {
    title: 'Elite Traders | Dashboard',
    description: 'Generated by create next app',
}

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex font-raleway'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout