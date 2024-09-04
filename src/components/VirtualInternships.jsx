import React from 'react';
import { motion } from "framer-motion";

const VirtualInternships = () => {
  const certificates = [
    { name: "Intro to Cybersecurity - Commonwealth Bank", link: "https://www.theforage.com/simulations/commonwealth-bank/intro-cybersecurity-rdxl" },
    { name: "Cybersecurity - PwC Switzerland", link: "https://www.theforage.com/simulations/pwc-ch/cybersecurity-9iwh" },
    { name: "Software Engineering - J.P. Morgan", link: "https://www.theforage.com/simulations/jpmorgan/software-engineering-lite-iqaz" },
    { name: "Cloud Platform - Verizon Communications", link: "https://www.theforage.com/simulations/verizon/cloud-platform-rlyv" },
    { name: "Cybersecurity - AIG", link: "https://www.theforage.com/simulations/aig/cybersecurity-ku1i" },
    { name: "Cybersecurity - Telstra AU", link: "https://www.theforage.com/simulations/telstra/cybersecurity-cyyo" },
    { name: "Software Engineering - Goldman Sachs", link: "https://www.theforage.com/simulations/goldman-sachs/software-engineering-unei" },
    { name: "Cybersecurity - Mastercard", link: "https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye" },
    { name: "Cybersecurity - Clifford Chance", link: "https://www.theforage.com/simulations/clifford-chance/cybersecurity-sjiw" }
  ];

  return (
    <div className="pb-4"> {/* No border class here */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light">
        Job Simulations
      </motion.h2>
      <motion.h3 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="text-center text-sm font-light mb-8"
      >
        Click On Simulation For Description
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: `${Math.random() * 100 - 50}px`, y: `${Math.random() * 100 - 50}px` }}
            transition={{ duration: 1.5 }}
            className="bg-neutral-800 text-white p-4 rounded-lg shadow-lg flex items-center justify-center"
          >
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:underline">
              {certificate.name}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VirtualInternships;