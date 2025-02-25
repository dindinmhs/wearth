// "use client";
// import { useEffect, useRef, useState } from "react";

// export const WordAnimate = () => {
//     const jobIdxRef = useRef(0); 
//     const job = ["diganti", "diulang", "diperbarui"];
//     const charRandom = "!@#$%^&*():{};|,.<>/?";
//     const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
//     const [text, setText] = useState(job[jobIdxRef.current]);
//     const posRef = useRef(0); 

//     const scramble = () => {
//         intervalRef.current = setInterval(() => {
//             const currentJob = job[jobIdxRef.current];
//             const scrambled = currentJob.split("")
//                 .map((char, index) => {
//                     if (posRef.current / 2 > index) {
//                         return char; 
//                     }

//                     const randomCharIndex = Math.floor(Math.random() * charRandom.length);
//                     const randomChar = charRandom[randomCharIndex];

//                     return randomChar;
//                 })
//                 .join("");

//             setText(scrambled); 
//             posRef.current += 1; 

//             if (posRef.current >= currentJob.length * 4) { 
//                 jobIdxRef.current = (jobIdxRef.current + 1) % job.length; 
//                 posRef.current = 0; 
//                 setText(job[jobIdxRef.current]); 
//             }
//         }, 100);
//     };

//     useEffect(() => {
//         scramble(); 

//         return () => {
//             clearInterval(intervalRef.current!); 
//         };
//     }, []); 

//     return (
//         <div className="w-1/2">
//             <h3 className="text-white text-center font-bold text-4xl">{`Gaya bisa berubah. Tapi bumi tidak bisa ${text}`}</h3>
//         </div>
//     );
// };

interface tes {
    name : string;
}
