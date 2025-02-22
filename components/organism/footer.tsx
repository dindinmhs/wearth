import { fiture } from "@/data"
import { Logo } from "../atoms"
import Link from "next/link"

export const FooterSection = () => {
    return (
        <div className="bg-gray-300 py-10">
            <footer className="max-w-[80%] mx-auto">
                <div className="flex justify-around flex-wrap">
                    <div>
                        <Logo color="black"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">Fitur</h3>
                        {fiture.map((fitur, i)=>(
                            <Link key={i} href={fitur}>{fitur}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">Fitur</h3>
                        {fiture.map((fitur, i)=>(
                            <Link key={i} href={fitur}>{fitur}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold">Fitur</h3>
                        {fiture.map((fitur, i)=>(
                            <Link key={i} href={fitur}>{fitur}</Link>
                        ))}
                    </div>
                </div>
                <div className="border-t-2 border-black mt-2 pt-2">
                    <small className="text-center">&copy; 2025 Copyright wearth.vercel.app</small>
                </div>
            </footer>
        </div>
    )
}