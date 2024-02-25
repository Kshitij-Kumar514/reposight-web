"use client"
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useFilterStore from '../Store/store'; 

const options: string[] = [
  "Education",
  "Finance",
  "Health",
  "Social",
  "Development",
  "Research",
  "Data",
  "Design",
  "Other",
];

const DomainPage: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const setTopics = useFilterStore(state => state.setTopics); 

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const updateStore = () => {
    console.log(selectedOptions)
    setTopics(selectedOptions);
  };

  return (
    <div className="bg-zinc-950 w-screen min-h-screen flex justify-center items-center flex-col text-white">
      <div className="text-6xl text-center mb-2">
        What type of domain would you like to explore?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-10 p-6">
        {options.map((option, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-row items-center justify-center px-6 border rounded-full text-2xl cursor-pointer transition duration-300 lg:h-20 h-10 ${
              selectedOptions.includes(option)
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => toggleOption(option)}
          >
            {option}
          </motion.li>
        ))}
      </div>
      <div className="w-2/3 flex flex-row-reverse justify-between">
        <Link href="/home">
          <motion.li
            className="bg-white text-black text-2xl m-4  rounded-xl list-none px-8 py-3 flex justify-center items-center cursor-pointer hover:py-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onClick={updateStore}
          >
            Next
          </motion.li>
        </Link>
        <Link href="/level">
          <motion.li
            className="bg-white text-black text-2xl m-4  rounded-xl list-none px-8 py-3 flex justify-center items-center cursor-pointer hover:py-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Back
          </motion.li>
        </Link>
      </div>
    </div>
  );
};

export default DomainPage;
