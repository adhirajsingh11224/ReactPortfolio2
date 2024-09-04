import { RiReactjsFill } from "react-icons/ri";
import { FaPython, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiWireshark, SiKalilinux, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const TechStack = () => {
  return (
    <div className="pb-24"> {/* Removed border class */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light">
        Technology Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div 
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <FaPython className="text-4xl text-green-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <FaJava className="text-4xl text-red-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <FaGitAlt className="text-4xl text-slate-200"/>
        </motion.div>

        <motion.div 
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <DiMysql className="text-4xl text-blue-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <SiWireshark className="text-4xl text-slate-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <SiKalilinux className="text-4xl text-cyan-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <SiJavascript className="text-4xl text-yellow-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <FaHtml5 className="text-4xl text-orange-500"/>
        </motion.div>
        
        <motion.div 
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <FaCss3Alt className="text-4xl text-blue-500"/>
        </motion.div>

        <motion.div 
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"> {/* Removed border class */}
          <RiReactjsFill className="text-4xl text-teal-500"/>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default TechStack;