import { useState } from "react";
import eye from "../images/eye.svg"
function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  Analysis,
  Insights,
  Dashboard,
  scrollY,
  cName,
  icon,
}) {
  const [scroll, setScroll] = useState(false);
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
            <a target="_blank" href={Insights} rel="noreferrer">
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
    </>
  );
}

export default ProBox;
