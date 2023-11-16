'use client'

import { ArrowRight, CirclesFour } from "@phosphor-icons/react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center bg-auth-img font-raleway" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full lg:w-[500px] p-10 m-8 md:w-1/2 flex flex-col justify-evenly h-[500px] text-white" >
        <div className="flex gap-2 items-center">
          <CirclesFour size={32} />
          <h2 className="text-4xl text-white font-semibold">elite.eb</h2>
        </div>
        <div>
          <p className="text-slate-300 italic text-2xl">Empowering Traders with Cutting-Edge AI in High-Frequency trading </p>
          <div className="mt-8 flex ">
            <Link href="/auth/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg focus:outline-none flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

          </div>
        </div>
      </div >
    </div>

  )
}
