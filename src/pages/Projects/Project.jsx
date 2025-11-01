import React, { useState, useRef, useEffect } from 'react';
import './Project.css';
import ServiceData from "../../Service_Data.json";

import icon from '../../assets/Imgs/icon.svg';
import pp from "../../assets/Imgs/pp.png";

const Project = () => {
  const [projects, setProjects] = useState(ServiceData);
  const [newProject, setNewProject] = useState({
    s_no: '',
    s_n: '',
    s_d: '',
    s_img: null,
    rating: 0
  });

  const [hoveredStars, setHoveredStars] = useState({});
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);

  // marka new project kudayo
  useEffect(() => {
    if(containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [projects]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === 's_img') {
      setNewProject({...newProject, s_img: files[0]});
    } else {
      setNewProject({...newProject, [name]: value});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!newProject.s_no || !newProject.s_n || !newProject.s_d) {
      alert('Please fill all required fields');
      return;
    }

    const projectToAdd = {
      ...newProject,
      s_img: newProject.s_img ? URL.createObjectURL(newProject.s_img) : null,
      rating: 0
    };

    setProjects(prev => [...prev, projectToAdd]);

  
    setNewProject({ s_no: '', s_n: '', s_d: '', s_img: null, rating: 0 });
    if(fileInputRef.current) fileInputRef.current.value = null;
  }

  const handleRating = (index, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].rating = value;
    setProjects(updatedProjects);
  }

  return (
    <div id='project' className='projects'>
      <div className='project-title'>
        <h1>My Service</h1>
        <img src={pp} alt="Logo" />
      </div>

      <div className="project-container" ref={containerRef}>
        {projects.map((service, index) => (
          <div key={service.s_no || index} className="service-format"> 
            <h3>{service.s_no}</h3>
            <h2>{service.s_n}</h2>
            <p>{service.s_d}</p>
            {service.s_img && <img src={service.s_img} alt={service.s_n} className="project-pic"/>}

            {/* Star rating */}
            <div className="stars">
              {[1,2,3,4,5].map(star => (
                <span
                  key={star}
                  className={(hoveredStars[index] || service.rating) >= star ? "star active" : "star"}
                  onClick={() => handleRating(index, star)}
                  onMouseEnter={() => setHoveredStars({...hoveredStars, [index]: star})}
                  onMouseLeave={() => setHoveredStars({...hoveredStars, [index]: null})}
                >
                  ★
                </span>
              ))}
            </div>

            <div className='readmore'>
              <p>Read more</p>
              <img src={icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="project-form">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="s_no"
            placeholder="Project Number"
            value={newProject.s_no}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="s_n"
            placeholder="Project Name"
            value={newProject.s_n}
            onChange={handleChange}
            required
          />
          <textarea
            name="s_d"
            placeholder="Project Description"
            value={newProject.s_d}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="s_img"
            accept="image/*"
            onChange={handleChange}
            ref={fileInputRef}
          />
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}

export default Project;
