import {fiture} from "@/data"
import { Logo } from "../atoms";
import Link from "next/link";

export const FooterSection = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <footer className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between flex-wrap gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start">
                        <Logo type="word" />
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            Connecting fashion and sustainability through pre-loved clothing exchange.
                        </p>
                    </div>
                    
                    {/* Features Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Features</h3>
                        {fiture.map((feature, i) => (
                            <Link key={i} href={feature} className="hover:text-green-400">
                                {feature}
                            </Link>
                        ))}
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Company</h3>
                        <Link href="/about" className="hover:text-green-400">About Us</Link>
                        <Link href="/contact" className="hover:text-green-400">Contact</Link>
                        <Link href="/faq" className="hover:text-green-400">FAQ</Link>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Follow Us</h3>
                        <Link href="https://instagram.com/wearth" className="hover:text-green-400">Instagram</Link>
                        <Link href="https://twitter.com/wearth" className="hover:text-green-400">Twitter</Link>
                        <Link href="https://facebook.com/wearth" className="hover:text-green-400">Facebook</Link>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <small className="text-gray-500">&copy; {new Date().getFullYear()} Wearth. All rights reserved.</small>
                </div>
            </footer>
        </div>
    );
};
