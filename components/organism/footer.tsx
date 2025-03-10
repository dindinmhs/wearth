import {fiture} from "@/data"
import { Logo } from "../atoms";
import Link from "next/link";

export const FooterSection = () => {
    return (
        <div className="bg-black text-white px-6 md:px-0 py-12">
            <footer className="container mx-auto">
                <div className="flex justify-between flex-wrap md:flex-row flex-col gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start">
                        <Logo type="word" textColor="white"/>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            Connecting fashion and sustainability through pre-loved clothing exchange.
                        </p>
                    </div>
                    
                    {/* Features Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Links</h3>
                        {fiture.map((feature, i) => (
                            <Link key={i} href={feature.src} className="hover:text-green-400">
                                {feature.title}
                            </Link>
                        ))}
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Company</h3>
                        <Link href="/" className="hover:text-green-400">About Us</Link>
                        <Link href="/" className="hover:text-green-400">Contact</Link>
                        <Link href="/" className="hover:text-green-400">FAQ</Link>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Follow Us</h3>
                        <Link href="/" className="hover:text-green-400">Instagram</Link>
                        <Link href="/" className="hover:text-green-400">Twitter</Link>
                        <Link href="/" className="hover:text-green-400">Facebook</Link>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <small className="text-gray-500">&copy; {new Date().getFullYear()} Sustyle. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
};
