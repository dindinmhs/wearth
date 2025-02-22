"use client"

import { useState } from "react"

export const SolutuinSection = () => {
    const [isActive, setActive] = useState(0)

    return (
        <section className="bg-gray-100 py-10">
            <h3 className="text-center text-4xl font-bold">Solusi Kami</h3>
            <div className="flex gap-2 justify-center mt-6 text-xl font-bold">
                <button onClick={()=>setActive(0)} className={`${isActive===0?'bg-gradient text-white':'bg-transparent'} rounded-full px-4 py-2 hover:bg-gray-200`}>e-commerce</button>
                <button onClick={()=>setActive(1)} className={`${isActive===1?'bg-gradient text-white':'bg-transparent'} rounded-full px-4 py-2 hover:bg-gray-200`}>artikel</button>
                <button onClick={()=>setActive(2)} className={`${isActive===2?'bg-gradient text-white':'bg-transparent'} rounded-full px-4 py-2 hover:bg-gray-200`}>misi</button>
            </div>
            <p className="text-lg text-center max-w-1/2 my-4">
                {
                    isActive===0?
                    'Melalui e-commerce yang menjual produk ramah lingkungan atau hasil daur ulang tekstil':
                    isActive===1?
                    'Edukasi melalui artikel tentang fashion berkelanjutan dan tips gaya hidup zero waste':
                    'Misi harian yang memotivasi pengguna untuk menerapkan kebiasaan ramah lingkungan'
                }
            </p>
            <div className="bg-gray-400 h-[20rem] rounded-lg w-1/2 mx-auto">

            </div>
        </section>
    )
}