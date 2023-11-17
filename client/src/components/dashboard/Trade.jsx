import Link from 'next/link'
import React from 'react'

const Trade = () => {
    return (
        <div className="col-span-1 row-span-3 bg-[#26282B] p-4 rounded-lg">

            <h1 className='text-2xl font-semibold mb-10'>Trade</h1>

            <form>
                <div>
                    <label htmlFor="text" className="block text-sm font-medium text-slate-300">
                        Price
                    </label>
                    <input
                        type="text"
                        id="text"

                        className="w-full px-4 py-3 rounded-lg bg-stone-950 focus:outline-none focus:border-blue-500"
                        placeholder="Enter price"
                        autoComplete="off"
                    />

                </div>
                <div className="mt-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-slate-300">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"

                        className="w-full px-4 py-3 rounded-lg bg-stone-950 focus:outline-none focus:border-blue-500"
                        placeholder=""
                        autoComplete="off"
                    />

                </div>
                <div className="mt-4">
                    <label htmlFor="total" className="block text-sm font-medium text-slate-300">
                        Total
                    </label>
                    <input
                        type="text"
                        id="total"

                        className="w-full px-4 py-3 rounded-lg bg-stone-950 focus:outline-none focus:border-blue-500"
                        placeholder=""
                        autoComplete="off"
                    />

                </div>



                <div className="w-full flex justify-center items-center mt-14">
                    <button
                        type="submit"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded focus:outline-none mr-2 w-1/2"
                    >
                        BUY
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded focus:outline-none w-1/2"
                    >
                        SELL
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Trade
