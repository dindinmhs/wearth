"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ProductType } from "@/types";
import GLBViewer from "../atoms/model";

interface Props {
  product: ProductType;
}

const DRAG_BUFFER = 50;

export const DragSection = ({ product }: Props) => {
  const setDragging = useState(false)[1];
  const [imgIdx, setImgIdx] = useState(0);
  const dragX = useMotionValue(0);
  const [isTwoDimension, setDimension] = useState(true);

  const dragEnd = () => {
    setDragging(true);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIdx < product.images.length - 1) {
      setImgIdx((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIdx > 0) {
      setImgIdx((prev) => prev - 1);
    }
  };

  return (
    <div className="h-full">
      {/* Container gambar utama dengan tinggi yang sesuai */}
      <div className={`overflow-hidden rounded-lg relative ${isTwoDimension?'h-[75vh]':'h-full'}`}>
        {isTwoDimension?<motion.div
          className="flex cursor-grab active:cursor-grabbing h-full"
          dragConstraints={{ left: 0, right: 0 }}
          drag="x"
          onDragStart={() => setDragging(true)}
          onDragEnd={dragEnd}
          style={{ x: dragX }}
          animate={{ translateX: `-${imgIdx * 100}%` }}
        >
          {product.images.map((src, idx: number) => (
            <div key={idx} className="shrink-0 w-full h-full relative">
              <Image
                src={src}
                alt={`Product Image ${idx}`}
                width={2000}
                height={2000}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"></div>
            </div>
          ))}
        </motion.div>:<GLBViewer url="/shirt_baked.glb"/>}
        <button onClick={()=>setDimension(!isTwoDimension)} className="p-3 rounded-lg font-bold text-2xl absolute top-2 right-2 bg-gray-200">
            <h3>{isTwoDimension?'2D':'3D'}</h3>
        </button>
      </div>

      {/* Thumbnail list */}
      <div className="flex gap-2 overflow-x-auto p-2">
        {isTwoDimension&&product.images.map((uri, i) => (
          <button key={i} onClick={() => setImgIdx(i)}>
            <Image
              src={uri}
              alt={`Thumbnail ${i}`}
              width={100}
              height={100}
              className={`object-cover w-24 h-24 rounded-lg ${
                imgIdx === i ? "border-green-500" : "border-transparent"
              } border-[2px]`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
