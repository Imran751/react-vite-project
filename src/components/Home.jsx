import profileImage from "../assets/profile.jpg";

const skillsData = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Node.js & Express",
  "Responsive Design",
  "UI/UX Design Principles",
];

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="intro">
        <div className="profile-image">
          <img src={profileImage} alt="John Doe" className="profile-img" />
        </div>
        <div className="intro-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hello, I am John Doe, a passionate web developer with a focus on
            creating interactive and responsive web applications.
          </p>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-table">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
