import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { machines } from "@/components/jsons/rvmMachines";
import { Box, GitCompareArrows } from 'lucide-react';
import { itemVariants } from "@/components/Projects/ProjectBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const MachineSelector = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4 md:p-8">
      <div>
        <h1 className="text-3xl md:text-5xl text-green-700 flex items-center gap-4 md:gap-6">
          <Box className="" strokeWidth={3} size={40} />
          Our Variants
        </h1>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex p-4">
          {machines.map((machine, index) => (
            <motion.button
              key={machine.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(index)}
              className={`px-4 py-2 text-sm md:text-md relative ${
                selected === index
                  ? "text-[#A00201] font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {machine.name}
              {selected === index && (
                <motion.div
                  layoutId="activeProjectUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A00201]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}

          <motion.button
            key="compare"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(3)}
            className={`px-4 py-2 flex items-center gap-2 text-sm md:text-md relative ${
              selected === 3
                ? "text-[#A00201] font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <GitCompareArrows size={16} />
            Compare
            {selected === 3 && (
              <motion.div
                layoutId="activeProjectUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A00201]"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="w-full bg-white rounded-lg shadow-lg p-4 md:p-8">
        <AnimatePresence mode="wait">
          {selected < 3 ? (
            <motion.div
              key={machines[selected].name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/3 flex justify-center mt-24">
                  <motion.img
                    src={machines[selected].image || "/images/placeholder.jpg"}
                    alt={machines[selected].name}
                    className=" h-[200px] w-auto rounded-lg lg:h-[500px] shadow-md object-cover"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="w-full lg:w-2/3">
                  <h2 className="text-2 xl md:text-3xl font-bold text-green-700 mb-4">
                    {machines[selected].name} Specifications
                  </h2>
                  <Table>
                    <TableBody>
                      {machines[selected].tableContent.map((row, index) => {
                        const [key, value] = Object.entries(row)[0];
                        return (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{key}</TableCell>
                            <TableCell>{value}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
                Specification Comparison
              </h2>
              <div className="w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Key</TableHead>
                      {machines.map((machine) => (
                        <TableHead key={machine.name}>{machine.name}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {machines[0].tableContent.map((row, index) => {
                      const key = Object.keys(row)[0];
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{key}</TableCell>
                          {machines.map((machine) => {
                            const value =
                              machine.tableContent.find(
                                (item) => Object.keys(item)[0] === key
                              )[key];
                            return (
                              <TableCell key={machine.name}>{value}</TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MachineSelector;

