"use client"

import { useState } from 'react'
import { CustomButton, Logo, Notify, ProfileDropdown } from "../atoms"
import { SearchInput } from "../molecules"
import { IoBagHandle, IoBagHandleOutline, IoChatboxEllipses, IoChatboxEllipsesOutline, IoHome, IoHomeOutline } from "react-icons/io5"
import { AiOutlineSwap } from "react-icons/ai"
import { forestGreen } from "@/color"
import Link from "next/link"
import Image from 'next/image'
import { CartItems } from '@/data/cart'
import { TradeItems } from '@/data/trade'
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const Navbar = () => {
    return (
        <header className="absolute left-0 right-0 z-20 flex px-10 py-3 justify-between items-center">
            <Logo type="word"/>
            <div className="flex gap-2">
                <CustomButton variant="border" href="/signup" title="Daftar"/>
                <CustomButton href="/signin" title="Masuk"/>
            </div>
        </header>
    )
}

export const NavbarDashboard = () => {
    const router = useRouter();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isTradeOpen, setIsTradeOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);
    const tradeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsCartOpen(false);
            }
            if (tradeRef.current && !tradeRef.current.contains(event.target as Node)) {
                setIsTradeOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
        setIsTradeOpen(false);
    };

    const handleTradeClick = () => {
        setIsTradeOpen(!isTradeOpen);
        setIsCartOpen(false);
    };

    const totalItems = CartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = CartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        setIsCartOpen(false);
        router.push('/checkout');
    };

    return (
        <header className="fixed left-0 right-0 z-20 flex px-10 py-2 justify-between h-16 items-center gap-6 bg-gray-50">
            <Link className="hidden sm:block" href={'/'}><Logo type="word"/></Link>
            <Link className="sm:hidden block" href={'/'}><Logo type="icon"/></Link>
            <SearchInput/>
            <div className="md:flex gap-2 w-fit h-full items-center hidden">
                <div className="relative" ref={cartRef}>
                    <button 
                        onClick={handleCartClick}
                        className="flex items-center"
                    >
                        <Notify 
                            icon={<IoBagHandleOutline className="w-full h-full"/>} 
                            activeIcon={<IoBagHandle color={forestGreen} className="w-full h-full"/>} 
                            counter={totalItems}
                        />
                    </button>
                    
                    {isCartOpen && (
                        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
                                {CartItems.length > 0 ? (
                                        <>
                                            <div className="space-y-4 max-h-96 overflow-auto">
                                                {CartItems.map((item) => (
                                                    <div key={item.id} className="flex space-x-4">
                                                        <div className="relative w-20 h-20">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-cover rounded"
                                                            />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-medium">{item.name}</h4>
                                                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                                                            <div className="flex justify-between items-center mt-2">
                                                                <p className="text-green-600">
                                                                    Rp {item.price.toLocaleString('id-ID')}
                                                                </p>
                                                                <div className="flex items-center space-x-2">
                                                                    <button className="text-gray-500 hover:text-green-600">-</button>
                                                                    <span>{item.quantity}</span>
                                                                    <button className="text-gray-500 hover:text-green-600">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="border-t mt-4 pt-4">
                                                <div className="flex justify-between font-semibold">
                                                    <span>Total:</span>
                                                    <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                                                </div>
                                                <button 
                                                    onClick={handleCheckout}
                                                    className="w-full bg-green-600 text-white py-2 rounded-lg mt-4 hover:bg-green-700 transition-colors"
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                    <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="relative" ref={tradeRef}>
                    <button 
                        onClick={handleTradeClick}
                        className="flex items-center"
                    >
                        <Notify 
                            icon={<AiOutlineSwap className="w-full h-full"/>} 
                            activeIcon={<AiOutlineSwap color={forestGreen} className="w-full h-full"/>} 
                            counter={TradeItems.length}
                        />
                    </button>
                    
                    {isTradeOpen && (
                        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl">
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold">Trade Requests</h3>
                                    <button 
                                        onClick={() => router.push('/trade')}
                                        className="text-sm text-green-600 hover:text-green-700"
                                    >
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-4 max-h-96 overflow-auto">
                                    {TradeItems.map((item) => (
                                        <Link 
                                            href={`/trade/${item.id}`} 
                                            key={item.id} 
                                            className="flex gap-4 p-3 border rounded-lg hover:border-green-600 transition-colors"
                                        >
                                            <div className="relative w-20 h-20 flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium">{item.name}</h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Condition: {item.condition}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <div className="relative w-6 h-6">
                                                        <Image
                                                            src={item.owner.avatar}
                                                            alt={item.owner.name}
                                                            fill
                                                            className="object-cover rounded-full"
                                                        />
                                                    </div>
                                                    <span className="text-sm text-gray-600">
                                                        {item.owner.name}
                                                    </span>
                                                </div>
                                            </div>
                                         </Link>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* <Notify icon={<AiOutlineSwap className="w-full h-full"/>} activeIcon={<AiOutlineSwap color={forestGreen} className="w-full h-full"/>} counter={2}/> */}
                <Notify icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} activeIcon={<IoChatboxEllipses color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <ProfileDropdown/>
            </div>
        </header>
    )
}

export const NavbarMobile = () => {
    return (
        <div className="flex sm:hidden fixed bottom-0 left-0 right-0 justify-around bg-white z-10">
            <Notify icon={<IoHomeOutline className="w-full h-full"/>} activeIcon={<IoHome color={forestGreen} className="w-full h-full"/>} counter={2}/>
            <Notify icon={<IoBagHandleOutline className="w-full h-full"/>} activeIcon={<IoBagHandle color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <Notify icon={<AiOutlineSwap className="w-full h-full"/>} activeIcon={<AiOutlineSwap color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <Notify icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} activeIcon={<IoChatboxEllipses color={forestGreen} className="w-full h-full"/>} counter={2}/>
                <ProfileDropdown/>
        </div>
    )
}

