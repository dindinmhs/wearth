'use client'
import { ReactNode, useState } from 'react';

interface TooltipProps {
    children: ReactNode;
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses: Record<string, string> = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    };

    return (
        <div
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            {/* Tooltip Content */}
            {isVisible && (
                <div
                    className={`absolute z-20 whitespace-nowrap bg-black text-white text-xs px-3 py-1 rounded-md shadow-md transition-opacity duration-300 ${positionClasses[position]}`}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

