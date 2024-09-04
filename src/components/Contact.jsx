import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-20"> {/* Removed border-b border-neutral-700 */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        initial={{ opacity: 0, y: -100, rotate: -20, scale: 0.5 }}
        transition={{ 
          duration: 1.5, 
          bounce: 0.5,
          type: "spring",
          stiffness: 100 
        }}
        className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light"
      >
        Contact Me
      </motion.h2>
      
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, x: -50, scale: 0.9, rotate: -10 }}
          transition={{ 
            duration: 1.5, 
            bounce: 0.4,
            type: "spring",
            stiffness: 80 
          }}
          className="text-center mt-4 text-lg"
        >
          Feel free to reach out for any collaboration or queries:{" "}
          <a
            href="mailto:adhiraj1180@gmail.com"
            className="text-cyan-400 hover:text-cyan-600"
          >
            adhiraj1180@gmail.com
          </a>
        </motion.p>
      </div>
    </div> 
  );
}

export default Contact;