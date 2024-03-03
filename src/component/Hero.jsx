import Waving from "../images/waving.png";
import python from "../images/python.svg";
import pandas from "../images/pandas.svg";
import sql from "../images/sql.svg";
import tableau from "../images/tableau.svg";
import msexcel from "../images/msexcel.svg";
import powerbi from "../images/powerbi.svg";
import jupyter from "../images/jupyter.svg";
import Resume from "../File/yabesh_raj.pdf";
function Hero() {
  const skillsIcons = [
    {
      img: python,
      title: "Python",
    },
    {
      img: pandas,
      title: "Pandas",
    },
    {
      img: sql,
      title: "SQL",
    },
    {
      img: tableau,
      title: "Tableau",
    },
    {
      img: powerbi,
      title: "Power BI",
    },
    {
      img: msexcel,
      title: "MS Excel",
    },
    {
      img: jupyter,
      title: "Jupyter Notebook",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Data Analyst</h1>
                
                <p>
                  I'm Yabesh, a passionate data analyst with expertise in creating
                  compelling dashboards. {" "}
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/yabeshraj/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    target="_blank"
                    href="https://github.com/yabesh-raj"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={Resume} download={Resume}>
                    <i className="fa-solid fa-file"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img">
          
              </div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Skills</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
