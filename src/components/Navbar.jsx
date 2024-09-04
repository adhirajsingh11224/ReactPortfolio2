import logo from "../assets/A-2.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return( 
    <nav className="bm-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/adhirajsaharan/" // Replace with your LinkedIn profile URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/adhirajsingh11224" // Replace with your GitHub profile URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-100 hover:text-gray-600"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;