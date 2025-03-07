import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const SpringModal = ({
    isOpen,
    setIsOpen,
    children
  }: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<null|number>>;
    children?: ReactNode;
  }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(null)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br bg-gray-50 text-black p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };