"use client";
import { useEffect, useRef, useState } from "react";

export const WordAnimate = () => {
    const jobIdxRef = useRef(0); 
    const job = ["diganti", "diulang", "diperbarui"];
    const charRandom = "!@#$%^&*():{};|,.<>/?";
    const intervalRef = useRef<any>(null);
    const [number, setNumber] = useState(0);
    const [text, setText] = useState(job[jobIdxRef.current]);
    const [pos, setPos] = useState(0); 

    const scramble = () => {
        intervalRef.current = setInterval(() => {
            let currentJob = job[jobIdxRef.current];
            const scrambled = currentJob.split("")
                .map((char, index) => {
                    if (pos / 2 > index) {
                        return char; 
                    }

                    const randomCharIndex = Math.floor(Math.random() * charRandom.length);
                    const randomChar = charRandom[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled); 
            setPos((prevPos) => prevPos + 1); 

            if (pos >= currentJob.length * 4) { 
                jobIdxRef.current = (jobIdxRef.current + 1) % job.length; 
                setNumber(jobIdxRef.current);
                setPos(0); 
                setText(job[jobIdxRef.current]); 
            }
        }, 100);
    };

    useEffect(() => {
        scramble(); 

        return () => {
            clearInterval(intervalRef.current); 
        };
    }, [pos]); 

    return (
        <div className="w-1/2">
            <h3 className="text-white text-center font-bold text-4xl">{`Gaya bisa berubah. Tapi bumi tidak bisa ${text}`}</h3>
        </div>
    );
};