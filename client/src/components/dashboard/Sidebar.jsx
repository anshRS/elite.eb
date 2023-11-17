'use client'
import { signOut } from '@/redux/slices/auth';
import { ChartLine, CirclesFour, Gear, House, SignOut } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const currentRoute = usePathname();
    const { user_id } = useSelector((state) => state.auth)
    const router = useRouter();
    
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signOut())
        
        toast.success("Logout Successful!", {
            position: "top-center",
        });
    };

    return (
        <div className="flex flex-col h-screen bg-stone-950 w-24 text-white p-4">
            <div className="flex flex-col text-stone-950 bg-emerald-300 rounded-xl px-3 py-5 gap-2 items-center mb-5 hover:cursor-pointer" onClick={() => router.push("/")}>
                <CirclesFour size={28} />
            </div>

            <div className='flex flex-col bg-[#26282B] rounded-xl gap-5 px-3 py-5 items-center justify-center'>
                {
                    currentRoute === `/dashboard/${user_id}` ? (
                        <Link href={`/dashboard/${user_id}`}>
                            <House className='text-emerald-300' size={28} />
                        </Link>
                    ) : (
                        <Link href={`/dashboard/${user_id}`}>
                            <House size={28} />
                        </Link>
                    )
                }
                {
                    currentRoute === `/dashboard/graph` ? (
                        <Link className='text-emerald-300' href='/'>
                            <ChartLine size={28} />
                        </Link>
                    ) : (
                        <Link href='/dashboard/graph'>
                            <ChartLine size={28} />
                        </Link>
                    )
                }
                <button onClick={() => {
                    logout();
                }}>
                    <SignOut size={28} />
                </button>



            </div>

            <div className='flex flex-col bg-[#26282B] rounded-xl gap-5 px-3 py-5 items-center justify-center mt-5'>
                <Link href='/'>
                    <Gear size={28} />
                </Link>
            </div>

        </div>
    );
}

export default Sidebar
