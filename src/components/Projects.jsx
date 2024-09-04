import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Elementary School Manager",
      imageUrl: "https://img.freepik.com/free-vector/education-technology-futuristic-background-vector-gradient-blue-digital-remix_53876-114092.jpg?t=st=1724777099~exp=1724780699~hmac=83b3b39618a425d8e1361d90350e29c59cd12bdb9c5b4b89d816e323db577f28&w=2000",
      githubLink: "https://github.com/adhirajsingh11224/Elementary-School-Mgmt-System-JAVA-SQL",
      description: "A school database management system using Java and MySQL, featuring a Java Swing GUI for handling tasks like attendance, grading, and award distribution.",
      concepts: ["Java", "Java Swing", "MySQL", "GUI Design", "Database Management"]
    },
    {
      title: "Python Trading Bot",
      imageUrl: "https://images.pexels.com/photos/7887801/pexels-photo-7887801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      githubLink: "https://github.com/adhirajsingh11224/Python-Trading-Bot",
      description: "A trading bot that integrates sentiment analysis from financial news with market indicators to make informed trading decisions. Built using the Lumibot framework and the Alpaca API, it simulates trades in a paper trading environment and uses a pre-trained ML model (FinBERT) for sentiment analysis.",
      concepts: ["Python", "Lumibot", "Alpaca API", "Machine Learning", "Sentiment Analysis", "Algorithmic Trading"]
    },
    {
      title: "Python Image Filter Algorithm",
      imageUrl: "https://images.pexels.com/photos/7026467/pexels-photo-7026467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      githubLink: "https://github.com/adhirajsingh11224/Python-Image-Filters",
      description: "Python Project that uses multi-dimensional array manipulation to mirror, greyscale, invert, merge, and compress images.",
      concepts: ["Python", "Matrices", "Linear Algebra", "Complex Lists/Arrays"]
    },
    {
      title: "PyGame Snake Game",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/027/174/599/non_2x/pixel-art-illustration-snake-pixelated-snake-snake-reptile-animal-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-free-vector.jpg",
      githubLink: "https://github.com/adhirajsingh11224/Snake-Game-Skeleton---Editable-",
      description: "Made the Snake Game, describing the logic/lines of code in a way that makes it generic enough to be altered and tinkered around with.",
      concepts: ["Python", "PyGame", "2D Game Development"]
    },
    {
      title: "Basic Small Office Home Office Network Model",
      imageUrl: "https://t4.ftcdn.net/jpg/03/01/37/85/360_F_301378507_DZhiIJQrpdD0EbB9o3YWh41EAFrFTdBW.jpg",
      githubLink: "https://github.com/adhirajsingh11224/SOHO-Model",
      description: "A SOHO Network model I made using the CISCO Packet Tracer wherein I divided the network into 3 sectors - Finances, Customer Service and Administration. Used a single router and switch to ensure wireless connectivity and ascertain every sector was on a separate VLAN.  Ensured all hosts in the network automatically obtained an IPv4 address. Ensured devices can cross-communicate with others on different subnets.",
      concepts: ["Network Design/Layers", "Packet Tracer", "2D Game Development"]
    },
  ];

  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r from-rose-800 via-pink-800 to-rose-800 bg-clip-text text-transparent my-20 text-center text-3xl font-light"
      >
        Projects
      </motion.h2>
      <motion.h3 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="text-center text-sm font-light mb-8"
      >
        Click on the project photo for the source code
      </motion.h3>
      <div className="flex flex-col items-center">
        {projectData.map((project, index) => (
          <motion.div 
            key={index} 
            className="m-8 w-full md:w-3/4 flex flex-col md:flex-row items-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left for even, right for odd
            transition={{ duration: 1.5 }}
          >
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="md:w-1/2">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </a>
            <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2">
              <motion.h3 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                className="text-lg font-semibold mb-2"
              >
                {project.title}
              </motion.h3>
              <p className="text-sm font-light mb-2">Key Concepts:</p>
              <ul className="text-sm font-light list-disc ml-5 mb-2 text-violet-600">
                {project.concepts.map((concept, conceptIndex) => (
                  <motion.li
                    key={conceptIndex}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: conceptIndex % 2 === 0 ? -50 : 50 }} // Alternate direction
                    transition={{ duration: 1.5 }}
                  >
                    {concept}
                  </motion.li>
                ))}
              </ul>
              <p className="text-sm font-light">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;