import { useRef, useState } from "react";
import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";

const Projects = () => {
  const projectsRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - projectsRef.current.offsetLeft);
    setScrollLeft(projectsRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed of scrolling
    projectsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX - projectsRef.current.offsetLeft);
    setScrollLeft(projectsRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDown || !e.touches[0]) return;
    e.preventDefault();
    const x = e.touches[0].pageX - projectsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed of scrolling
    projectsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDown(false);
  };

  return (
    <section id="projects">
      <h1>Recent Projects</h1>
      <div
        className="projects-container"
        ref={projectsRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="project">
          <img src={projectImage1} alt="Project 1" />
          <div className="project-info">
            <h3>Project Title 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              urna at velit rutrum facilisis.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="project">
          <img src={projectImage2} alt="Project 2" />
          <div className="project-info">
            <h3>Project Title 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              urna at velit rutrum facilisis.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="project">
          <img src={projectImage3} alt="Project 3" />
          <div className="project-info">
            <h3>Project Title 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              urna at velit rutrum facilisis.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="project">
          <img src={projectImage4} alt="Project 4" />
          <div className="project-info">
            <h3>Project Title 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              urna at velit rutrum facilisis.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
        <div className="project">
          <img src={projectImage5} alt="Project 5" />
          <div className="project-info">
            <h3>Project Title 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              urna at velit rutrum facilisis.
            </p>
            <a href="#">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
