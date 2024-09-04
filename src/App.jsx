import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import VirtualInternships from "./components/VirtualInternships";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RelevantEcp from "./components/RelevantEcp";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-400 antialiased
     selection:bg-cyan-400 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">

        
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#300_100%)]"></div>
      </div>
     <div className="container mx-auto px-8">
      <Navbar/>
      <Hero/>
      <About/>
      <TechStack/>
      <VirtualInternships/>
      <Research/>
      <Projects/>
      <RelevantEcp/>
      <Contact/>
      

     </div> 
     
    </div>
  );
};

export default App;