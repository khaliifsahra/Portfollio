import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./pages/about/About";

import Project from "./pages/Projects/Project";
import MyWork from "./pages/Mywork/Mywork";
import Contact from "./pages/Contect/Contact";
import Footer from "./pages/Footar/Footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About/>
           
              <Project />
              <MyWork />
              <Contact />
              <Footer />
            </>
          }
        />

         <Route path="/About" element={<About/>}/>
         <Route path="/Project" element={<Project/>}/>

        
      </Routes>
    </Router>
  );
};

export default App;
