import { motion } from "framer-motion";
import { useState } from "react";

export default function ExpandableCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)} className="border-2 border-gray-300 p-4 rounded-md">
      <motion.div layout>
        <label className="text-sm font-medium">Grid Preview</label>
      </motion.div>
      {isOpen && (
        <motion.div className="grow space-y-4">
          <p>pppppppp</p>
        </motion.div>
      )}
    </motion.div>
  )
}
