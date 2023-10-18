import "./skills.css";
import { useState } from "react";
import { skillArray } from "./data.js";
const Skills = () => {
  const [skills] = useState(skillArray);
  return (
    <div className="skills  my-5 p-5">
      <h1 className="text-center text-light  my-4 fs-1 ">Skills</h1>
      <p className="text-center text-light mx-5 my-5 fs-4 ">
        I Have worked on Couple of Projects and Applications that include machine learning concepts and ideas while also creating apps that utilise Tensorflow & Tensorflow JS/lite for Mobile Apps that use the power of Computer vision in aiding into real-life AI experiences in the palms of average user on his smartphone!
      </p>

      <div className="text-light my-5 p-3 d-flex">
        <section className="skillsLeftSection text-center">
          <h3 className="my-4">Skill Summary & Certifications</h3>
          <h3 className=" mb-5">________________</h3>
          <h3 className="my-4">Machine Learning EngineerUdacity - 2019</h3>
          <h3 className="my-4">Python Programming Specialization - 2016</h3>
          <h3 className="my-4">Flutter Coursera Google Cloud specialization</h3>
          <h3 className="my-4">Kaspersky SECUR’IT CUP’19 - 4th - Place</h3>
        </section>

        <section className="skillsRightSection ">
          {skills.map((skill) => { 
            return(
            <div className="d-flex align-items-center">
              <h4
                className="bg-secondary px-3 py-3 text-center "
                style={{ width: "30%" }}
              >
                {skill.name}
              </h4>
              <div
                className="progress flex-grow-1 "
                style={{ borderRadius: "0", height: "1.5rem", width: "70%" }}
              >
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{
                    width: skill.value,
                    borderRadius: "5px",
                    backgroundColor: "grey",
                  }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>);
          })}
        </section>
      </div>
    </div>
  );
};
export default Skills;
