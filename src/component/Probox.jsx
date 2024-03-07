import { useState } from "react";
import eye from "../images/eye.svg"
import Insights from "./Insights";
function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  Analysis,
  Dashboard,
  scrollY,
  cName,
  icon,
}) {
  const [scroll, setScroll] = useState(false);
  const [showInsights, setShowInsights] = useState(false)
  const handleInsights = () => {
    setShowInsights(!showInsights);
  };
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={Dashboard} rel="noreferrer">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 3s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} {icon}
          </h3>
          <p>{description}</p>
          <div className="stack">
            <p>{techno1}</p>
            <p>{techno2}</p>
          </div>
          <div className="links">
            <a target="_blank" href={Analysis} rel="noreferrer">
              Analysis <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" className="btn-insights" onClick={handleInsights} rel="noreferrer">
              Insights
              <i class="fa-solid fa-eye"></i>
            </a>
            <a target="_blank" href={Dashboard} rel="noreferrer">
              Dashboard
              <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
            </a>
          </div>
        </div>
      </div>
      {showInsights ? <Insights show={showInsights} /> : null}
    </>
  );
}

export default ProBox;
