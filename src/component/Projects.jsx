import ProBox from "./Probox";
import toy from "../images/toy.jpg";
import prime from "../images/prime.jpg";
import loan from "../images/loan.jpg";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>List of Data Analysis Projects 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Movies/TV Shows Analysis"
                img={prime}
                description="This is an Exploratory Data Analysis done using Python, which focuses on exploring and visualizing a dataset related to Movies and TV shows. And it employs popular data analysis libraries such as pandas, seaborn, and matplotlib."
                techno1="Python"
                techno2="Tableau"
                Analysis="https://github.com/yabesh-raj/Exploratory-Data-Analysis--Python/blob/main/Prime_EDA.ipynb"
                Insights="https://movies-app-001.netlify.app/"
                Dashboard="https://public.tableau.com/views/PrimeVideoDashboard_16961550552740/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
                scrollY="-50%"
                // icon="🎁"
              />
              <ProBox
                title="Toy Sales Analysis"
                img={toy}
                description="This project contains information about sales transactions, including details such as product information, order dates, sales amounts, and customer details."
                techno1="SQL"
                techno2="Tableau"
                Analysis="https://github.com/yabesh-raj/SQL-Toy-Sales-Analysis-Project/blob/main/Analysis%20of%20Toy%20Sales%20Dataset.sql"
                Insights="https://shopping-site-001.netlify.app/"
                Dashboard="https://public.tableau.com/views/ToysSales_17074759273440/Dashboard12?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
                scrollY="-50%"
                // icon="🧧"
              />
              <ProBox
                title="Loan Applicants Analysis"
                img={loan}
                description="This analysis utilizes calculated fields, filters, actions, and various chart types in Tableau to provide a comprehensive view of key trends in loan applications."
                techno1="MS Excel, SQL"
                techno2="Tableau"
                Analysis="https://github.com/yabesh-raj/Loan-Applicants-Analysis-Tableau-Dashboard"
                Insights="https://blog-site-002.netlify.app/"
                Dashboard="https://public.tableau.com/views/LoanApplicantAnalysisinIndia/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
                scrollY="-50%"
                // icon=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
