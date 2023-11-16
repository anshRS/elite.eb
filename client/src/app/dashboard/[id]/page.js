'use client'

import Graph from '@/components/auth/dashboard/Graph'
import History from '@/components/auth/dashboard/History'
import Trade from '@/components/auth/dashboard/Trade'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
      return;
    }
  }, [isLoggedIn])

  return (
    <div className='h-[90%] w-full bg-[#1c1412] p-5'>
      <div className='h-[100%] grid grid-cols-3 grid-rows-3 gap-4 text-white'>
        <div className="col-span-2 row-span-2 bg-[#26282B] p-4 rounded-lg">          
          <Graph />
        </div>

        <Trade />
        <History />
      </div>
    </div>
  )
}

export default Dashboard
