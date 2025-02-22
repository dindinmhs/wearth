"use client"
import { squareData } from "@/data";
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react";

interface SquareData {
    id : number;
    src : string
}

const shuffle = (array : SquareData[]) => {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  };

const generateSquares = () => {
return shuffle(squareData).map((sq) => (
    <motion.div
    key={sq.id}
    layout
    transition={{ duration: 1.5, type: "spring" }}
    className="w-full h-full"
    style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
    }}
    ></motion.div>
));
};

export const ShuffleGrid = () => {
    const timeoutRef = useRef<any>(null);
    const [squares, setSquares] = useState(generateSquares());
  
    useEffect(() => {
      shuffleSquares();
  
      return () => clearTimeout(timeoutRef.current);
    }, []);
  
    const shuffleSquares = () => {
      setSquares(generateSquares());
  
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
  
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-full gap-1">
        {squares.map((sq) => sq)}
      </div>
    );
  };

