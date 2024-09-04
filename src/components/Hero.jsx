import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center min-h-screen relative">
        {/* Center the flex items vertically and horizontally */}
        <div className="w-full lg:w-3/4 pb-20">
          {/* Adjusted width and shifted upwards */}
          <div className="flex flex-col items-center text-center">
            {/* Center text and items */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-20 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Adhiraj Saharan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-teal-400 via-cyan-200 to-emerald-500 bg-clip-text text-2xl tracking-tight text-transparent pb-15 font-light"
            >
              Full Stack Dev, AI/ML and Cybersecurity Enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 py-6 font-light tracking-tighter pb-20 max-w-2.5xl"
            >
              With a strong commitment to technology, I'm a full-stack developer currently in the first year of pursuing a Bachelor’s in Computer Science at Royal Holloway, University of London. My experience includes developing software solutions, leading student initiatives, and investigating the intersection of programming languages and artificial intelligence. Proficient in Java, Python, SQL, and JavaScript, and holding certifications in Artificial Intelligence and Machine Learning, IT automation, and a foundational knowledge of cybersecurity, I am dedicated to exploring innovative AI applications and integrating my interests in full-stack development and cybersecurity.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;