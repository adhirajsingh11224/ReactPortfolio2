import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pb-4 flex items-center justify-center h-screen">
      <div>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.55 }}
            className="w-full lg px-4"
          >
            <p className="text-center my-2 py-6 max-w-3xl font-light">
              As a full-stack developer with a strong foundation in artificial intelligence, cybersecurity, and software development, I am passionate about solving real-world problems through technology. My diverse skill set includes computer vision, machine learning, and deep learning using TensorFlow, along with proficiency in Python, Java, and JavaScript. I also have a solid understanding of databases and web development frameworks like Flask and Flutter. Through hands-on job simulations, I’ve explored various facets of cybersecurity, including cryptography, network security, and incident management. While my knowledge of blockchain technology is still developing, it complements my broader interest in emerging technologies. My experience as a student leader has honed my problem-solving, leadership, and communication skills, and I am eager to apply and expand my abilities in a professional setting.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;