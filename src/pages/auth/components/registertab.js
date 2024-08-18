/** @format */

import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "social", label: "Соц.сети" },
  { id: "fast", label: "Быстрая" },
];

export function AnimatedTabs({ sendData }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const changeStatus = (value) => {
    setActiveTab(value);
    sendData(value);
  };
  return (
    <div className="flex space-x-1 bg-[#0474E4] sm:h-[37px] xl:h-[50px] p-[6px_10px] sm:rounded-[10px] xl:rounded-[20px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => changeStatus(tab.id)}
          className={`relative rounded-full text-sm font-medium transition focus-visible:outline-2 sm:text-[18px] xl:text-[24px] ${
            activeTab === tab.id
              ? "text-blue" // Active text color
              : "text-white" // Inactive text color
          } bg-transparent`} // Make button transparent
          style={{
            WebkitTapHighlightColor: "transparent",
            display: "flex",
            flex: 1,
          }}
        >
          <span className="text-white w-full flex flex-1 h-full items-center justify-center">
            {tab.label}
          </span>
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-white sm:rounded-[8px] xl:rounded-[20px]" // White bubble
              style={{
                color: "#0474E4",
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.1 }}
            >
              {tab.label}
            </motion.span>
          )}
        </button>
      ))}
    </div>
  );
}
