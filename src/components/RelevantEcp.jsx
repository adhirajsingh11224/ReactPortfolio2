import { motion } from "framer-motion";

const RelevantEcp = () => {
  return (
    <div className="pb-20"> {/* Removed border-b border-neutral-700 */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light"
      >
        Relevant Experiences
      </motion.h2>

      <div className="flex flex-col items-center">
        {/* Inspirit AI Summer Program */}
        <motion.div 
          className="m-8 w-full md:w-3/4 flex flex-col md:flex-row items-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }} // Coming from left
          transition={{ duration: 1.5 }}
        >
          <div className="md:ml-8 mt-4 md:mt-0 md:w-full">
            <motion.h3 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.5 }}
              className="text-lg font-semibold mb-2"
            >
              Inspirit AI Summer Program
            </motion.h3>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }} // Coming from left
              transition={{ duration: 1.5 }}
              className="text-sm font-light"
            >
              Participated in the Inspirit AI Summer program, where I developed skills in AI, machine learning, and data science, culminating in the creation of a distracted drivers image recognition system as part of a team led by Stanford/MIT Alumni.
            </motion.p>
          </div>
        </motion.div>

        {/* Juniors Smart India Hackathon 2022 */}
        <motion.div 
          className="m-8 w-full md:w-3/4 flex flex-col md:flex-row items-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }} // Coming from right
          transition={{ duration: 1.5 }}
        >
          <div className="md:ml-8 mt-4 md:mt-0 md:w-full">
            <motion.h3 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.5 }}
              className="text-lg font-semibold mb-2"
            >
              Juniors Smart India Hackathon 2022 - Finalist
            </motion.h3>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }} // Coming from right
              transition={{ duration: 1.5 }}
              className="text-sm font-light"
            >
              Reached the finals in the Juniors Smart India Hackathon 2022, showcasing innovative problem-solving skills and teamwork in a competitive environment.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RelevantEcp;