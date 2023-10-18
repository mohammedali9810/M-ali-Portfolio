import "./Portfolio.css";
import { projectsRow1 } from "./projects";
import { projectsRow2 } from "./projects";

import { useState } from "react";
const Portfolio = () => {
  const [pRow1, setProjectsRow1] = useState(projectsRow1);
  const [pRow2, setProjectsRow2] = useState(projectsRow2);

  return (
    <>
      <h1 className="portfolioH1 text-start ms-5 ">Portfolio</h1>
      <div className=" portfolio container">
        <div className="row p-5 text-light fs-5">
          {pRow1.map((project) => {
            return project.id % 2 === 0 ? (
              <div className="paige bg-dark col m-4  p-5 text-center text-decoration-underline ">
                {project.name}
              </div>
            ) : (
              <div className="brown  col m-4  p-5 text-center text-decoration-underline ">
                {project.name}
              </div>
            );
          })}

          <div className="w-100" />
          {pRow2.map((project) => {
            return project.id % 2 === 0 ? (
              <div className=" paige col m-4  p-5 text-center ">
                {project.name}
              </div>
            ) : (
              <div className=" brown col m-4  p-5 text-center ">
                {project.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
