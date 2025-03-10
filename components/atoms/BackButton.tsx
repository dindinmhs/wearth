"use client";

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
    fallbackHref?: string; // Opsional: Jika tidak ada halaman sebelumnya
}

export function BackButton({ fallbackHref = '/' }: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push(fallbackHref); 
        }
    };

    return (
        <button 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 group w-fit"
        >
            <IoArrowBack size={20} className="text-xl transition-transform group-hover:-translate-x-1" />
            <span className="font-medium text-lg">Back</span>
        </button>
    );
}
