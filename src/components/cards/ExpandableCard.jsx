import { motion } from "framer-motion";
import { useState } from "react";

export default function ExpandableCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full">
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-700/40"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? "fixed inset-0 z-50 bg-white" : "bg-gray-100"} flex flex-col space-y-4 rounded-lg p-4 shadow-md`}
      >
        <motion.div layout>
          <label className="text-sm font-medium">Grid Preview</label>
        </motion.div>
        {isOpen && (
          <motion.div className="grow space-y-4">
            <p>pppppppp</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
