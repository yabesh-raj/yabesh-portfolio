import about from "../images/about.webp";
// import RoundedText from "../images/text2.svg";
// import work from "../images/working.png";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={about} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>Hi,</h4>
              <p>
              I'm a dedicated and results-driven Data Analyst with a passion
              for transforming raw data into meaningful insights.
              My journey in the world of data has equipped me with
              a unique blend of technical skills, analytical thinking, and a keen eye for detail.
              As a data enthusiast, I thrive on unraveling complex datasets to uncover hidden patterns and trends.
              Recently, I successfully completed the Google Data Analytics Professional Certificate, enhancing my skills and knowledge in the field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
