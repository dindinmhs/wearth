"use client"

import { useState } from 'react'
import { Chip, Logo, Notify, ProfileDropdown, Tooltip } from "../atoms"
import { SearchInput, SpringModal, DragCloseDrawer } from "../molecules"
import { IoBagHandle, IoBagHandleOutline, IoChatboxEllipses, IoChatboxEllipsesOutline, IoCompass, IoCompassOutline, IoPerson, IoPersonOutline, IoTrophy, IoTrophyOutline } from "react-icons/io5"
import { AiOutlineSwap } from "react-icons/ai"
import { forestGreen } from "@/color"
import Link from "next/link"
import Image from 'next/image'
import { CartItems } from '@/data/cart'
import { TradeItems } from '@/data/trade'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useAuthStore } from '@/store/useAuthStore'
import { SignupForm } from './signup-form'
import { SigninForm } from './signin-form'

export const NavbarDashboard = () => {
    const router = useRouter();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState<number|null>(null);
    const [isTradeOpen, setIsTradeOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);
    const tradeRef = useRef<HTMLDivElement>(null);
    const { isAuthenticated } = useAuthStore()

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
        <div className='fixed left-0 right-0 z-20 py-2 h-16 bg-gray-50 px-6 md:px-4'>
            <header className="flex justify-between items-center gap-3 md:gap-6 h-full container mx-auto">
                <Link className="hidden sm:block" href={'/'}><Logo type="word" otherStyles=""/></Link>
                <Link className="sm:hidden block" href={'/'}><Logo type="icon" otherStyles=""/></Link>
                <SearchInput/>
                {!isAuthenticated && <div className='md:flex gap-3 w-fit h-full items-center hidden'>
                    <button 
                        onClick={()=>setModalOpen(0)} 
                        className='whitespace-nowrap px-4 h-full border border-forest text-forest font-medium rounded-full hover:bg-green-50 transition-colors'
                    >
                        Sign Up
                    </button>
                    <button 
                        onClick={()=>setModalOpen(1)} 
                        className='whitespace-nowrap px-4 h-full bg-forest text-white font-medium rounded-full hover:bg-forest/90 transition-colors shadow-sm hover:shadow-md'
                    >
                        Sign In
                    </button>
                    <SpringModal isOpen={modalOpen==0} setIsOpen={setModalOpen}><div><SignupForm setOpen={setModalOpen}/></div></SpringModal>
                    <SpringModal isOpen={modalOpen==1} setIsOpen={setModalOpen}><div><SigninForm setOpen={setModalOpen}/></div></SpringModal>
                </div>}
                {isAuthenticated&&<div className='block md:hidden'>
                    <Tooltip text='Chat' position='bottom'>
                        <Link href="/chat">
                            <Notify 
                                icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} 
                                activeIcon={<IoChatboxEllipses color={forestGreen} className="w-full h-full"/>} 
                                counter={2}
                            />
                        </Link>
                    </Tooltip>
                </div>}
                {isAuthenticated && <div className="md:flex gap-2 w-fit h-full items-center hidden">
                <Tooltip text='Chat' position='bottom'>
                    <Link href="/chat">
                        <Notify 
                            icon={<IoChatboxEllipsesOutline className="w-full h-full"/>} 
                            activeIcon={<IoChatboxEllipses color={forestGreen} className="w-full h-full"/>} 
                            counter={2}
                        />
                    </Link>
                </Tooltip>
                <Tooltip text='Mission' position='bottom'>
                    <Link href="/mission">
                        <Notify 
                            icon={<IoTrophyOutline className="w-full h-full"/>} 
                            activeIcon={<IoTrophy color={forestGreen} className="w-full h-full"/>} 
                            counter={2}
                        />
                    </Link>
                </Tooltip>

                    <div className="relative" ref={cartRef}>
                        <button 
                            onClick={handleCartClick}
                            className="flex items-center"
                        >
                        <Tooltip text='Checkout' position='bottom'>
                            <Notify 
                                icon={<IoBagHandleOutline className="w-full h-full"/>} 
                                activeIcon={<IoBagHandle color={forestGreen} className="w-full h-full"/>} 
                                counter={totalItems}
                            />
                        </Tooltip>
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
                        <Tooltip text='Trade' position='bottom'>
                            <Notify 
                                icon={<AiOutlineSwap className="w-full h-full"/>} 
                                activeIcon={<AiOutlineSwap color={forestGreen} className="w-full h-full"/>} 
                                counter={TradeItems.length}
                            />
                        </Tooltip>
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
                                                href={`/trade`} 
                                                key={item.id} 
                                                className="flex gap-4 p-3 border rounded-lg hover:border-[#2c6e49] hover:bg-[#f7faf8] transition-all duration-200"
                                            >
                                                <div className="relative w-20 h-20 flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover rounded-md"
                                                    />
                                                    <div className="absolute top-0 right-0 bg-[#2c6e49] text-white text-xs px-1.5 py-0.5 rounded-bl-md rounded-tr-md">
                                                        {item.size}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-xs bg-[#edf5f0] text-[#2c6e49] px-2 py-0.5 rounded-md">
                                                            {item.condition}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <div className="relative w-6 h-6">
                                                            <Image
                                                                src={item.owner.avatar}
                                                                alt={item.owner.name}
                                                                fill
                                                                className="object-cover rounded-full border border-[#edf5f0]"
                                                            />
                                                        </div>
                                                        <span className="text-sm text-gray-600">
                                                            {item.owner.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="self-center">
                                                    <div className="w-8 h-8 rounded-full bg-[#edf5f0] flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
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
                    <ProfileDropdown/>
                </div>}
            </header>
        </div>
    )
}

export const NavbarMobile = () => {
    const pathname = usePathname(); 
    const pathSegment = pathname.split('/')[1];
    const [selected, setSelected] = useState(pathSegment);
    const [open, setOpen] = useState<null|number>(null);
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
    const [isTradeDrawerOpen, setIsTradeDrawerOpen] = useState(false);
    const { isAuthenticated, login } = useAuthStore();
    const router = useRouter();
    
    useEffect(()=>{
        setSelected(pathSegment)
    },[pathSegment])
    
    const totalItems = CartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = CartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        setIsCartDrawerOpen(false);
        router.push('/checkout');
    };
    
    const tabs = [
        {
            title : 'Explore',
            src : 'explore',
            iconDefault : <IoCompassOutline className="w-full h-full"/>,
            iconActive : <IoCompass className="w-full h-full" color={forestGreen}/>,
            count : undefined,
            onClick: () => router.push('/explore')
        },
        {
            title : 'Shop',
            src : 'checkout',
            iconDefault : <IoBagHandleOutline className="w-full h-full"/>,
            iconActive : <IoBagHandle className="w-full h-full" color={forestGreen}/>,
            count : totalItems,
            onClick: () => isAuthenticated ? setIsCartDrawerOpen(true) : setOpen(0)
        },
        {
            title : 'Trade',
            src : 'trade',
            iconDefault : <AiOutlineSwap className="w-full h-full"/>,
            iconActive : <AiOutlineSwap className="w-full h-full" color={forestGreen}/>,
            count : TradeItems.length,
            onClick: () => isAuthenticated ? setIsTradeDrawerOpen(true) : setOpen(0)
        },
        {
            title : 'Mission',
            src : 'mission',
            iconDefault : <IoTrophyOutline className="w-full h-full"/>,
            iconActive : <IoTrophy className="w-full h-full" color={forestGreen}/>,
            count : 2,
            onClick: () => isAuthenticated ? router.push('/mission') : setOpen(0)
        },
    ];
    
    const handleLogin = () => {
        login(true);
        setOpen(null);
    };
    
    return (
        <>
           <div className="flex sm:hidden fixed h-fit bottom-0 left-0 right-0 justify-around bg-white z-20 pt-2 pb-1 border-t border-gray-100 shadow-lg items-center">
                {tabs.map((tab) => (
                    <div key={tab.title} onClick={tab.onClick}>
                        <Chip
                            type="circle"
                            text={tab.title}
                            selected={selected === tab.src}
                            setSelected={setSelected}
                            iconActive={tab.iconActive}
                            iconDefault={tab.iconDefault}
                            src={tab.src}
                            setOpen={setOpen}
                            counter={tab.count}
                        />
                    </div>
                ))}
                <div onClick={() => isAuthenticated ? router.push('/profile') : setOpen(0)}>
                    <Chip
                        type="circle"
                        text={isAuthenticated ? 'Profile' : 'Login'}
                        src={'profile'}
                        setOpen={setOpen}
                        selected={selected === 'profile'}
                        setSelected={setSelected}
                        iconDefault={<IoPersonOutline className="w-full h-full" />}
                        iconActive={<IoPerson className="w-full h-full" color={forestGreen} />}
                    />
                </div>
            </div>

            {/* Cart Drawer */}
            <DragCloseDrawer open={isCartDrawerOpen} setOpen={(value) => setIsCartDrawerOpen(!!value)}>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Shopping Cart</h3>
                        <button 
                            onClick={() => router.push('/checkout')}
                            className="text-sm text-green-600 hover:text-green-700"
                        >
                            View All
                        </button>
                    </div>
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
            </DragCloseDrawer>

            {/* Trade Drawer */}
            <DragCloseDrawer open={isTradeDrawerOpen} setOpen={(value) => setIsTradeDrawerOpen(!!value)}>
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
                                href={`/trade`} 
                                key={item.id} 
                                className="flex gap-4 p-3 border rounded-lg hover:border-[#2c6e49] hover:bg-[#f7faf8] transition-all duration-200"
                                onClick={() => setIsTradeDrawerOpen(false)}
                            >
                                <div className="relative w-20 h-20 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                    <div className="absolute top-0 right-0 bg-[#2c6e49] text-white text-xs px-1.5 py-0.5 rounded-bl-md rounded-tr-md">
                                        {item.size}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs bg-[#edf5f0] text-[#2c6e49] px-2 py-0.5 rounded-md">
                                            {item.condition}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="relative w-6 h-6">
                                            <Image
                                                src={item.owner.avatar}
                                                alt={item.owner.name}
                                                fill
                                                className="object-cover rounded-full border border-[#edf5f0]"
                                            />
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {item.owner.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="self-center">
                                    <div className="w-8 h-8 rounded-full bg-[#edf5f0] flex items-center justify-center">
                                        <svg className="w-4 h-4 text-[#2c6e49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </DragCloseDrawer>

            <DragCloseDrawer open={open === 0} setOpen={setOpen}>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Login to Sustyle</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your email"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input 
                                type="password" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-green-600">Forgot password?</a>
                        </div>
                        
                        <button 
                            onClick={handleLogin}
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            Login
                        </button>
                        
                        <div className="text-center text-sm text-gray-600">
                            Dont have an account? <button onClick={() => setOpen(1)} className="text-green-600 font-medium">Sign up</button>
                        </div>
                    </div>
                </div>
            </DragCloseDrawer>
            
            <DragCloseDrawer open={open === 1} setOpen={setOpen}>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Create an Account</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your full name"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your email"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input 
                                type="password" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Create a password"
                            />
                        </div>
                        
                        <button 
                            onClick={handleLogin}
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            Sign Up
                        </button>
                        
                        <div className="text-center text-sm text-gray-600">
                            Already have an account? <button onClick={() => setOpen(0)} className="text-green-600 font-medium">Login</button>
                        </div>
                    </div>
                </div>
            </DragCloseDrawer>
        </>
    );
};
