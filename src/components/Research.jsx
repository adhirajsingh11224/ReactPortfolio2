import { motion } from "framer-motion";

const Research = () => {
  return (
    <div className="pb-4"> {/* Removed border-b border-neutral-700 */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light"
      >
        Research
      </motion.h2>
      <div className="text-center text-base px-4 font-semibold">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <strong>Assessing the Relationship Between Sanskrit and Computer Programming Languages for Recounting Its Significance in Artificial Intelligence</strong>
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mb-4 font-light"
        >
          <strong>Abstract:</strong> Sanskrit is a valuable, unambiguous ancient Indian (Hindu) language, from which an abundance of Hindu scriptures and knowledge has been produced. Enriched and revised by the sage Maharishi Panini, Sanskrit’s potential in logic and computing remains largely unexplored. This review serves as an ode to the usefulness of Sanskrit in Natural Language Processing (NLP), its syntactic similarities with computer programming languages, and its potential for space communication and enhancing graphics processing units (GPUs). The reviewed data provides contextual and historical insights into Sanskrit and its intersections with NLP and programming concepts.
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4 font-light"
        >
          <strong>Skills:</strong> Programming · Artificial Intelligence (AI) · Document Review · Language History · Research · Review Research
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          href="https://docs.google.com/document/d/1ED124PJbcuem8v8i-ZOVmo2FxIhyiuQkCXsUVgApSxs/edit?usp=sharing" // Replace with your Google Doc link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Read Paper
        </motion.a>
      </div>
    </div>
  );
};

export default Research;