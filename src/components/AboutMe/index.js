import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./AboutMe.css";
import CV from "./cv.pdf";

const AboutMe = () => {
  return (
    <div className="container d-flex">
      <section className="leftSection ">
        <h1 className="text-dark text-center "> About Me </h1>
      </section>

      <section className="rightSection mx-4">
        <p>
          
        Hi I'm Mohammed Ali, I'm a Software Engineer, I am seeking opportunities and positions in Cyber Security, Artificial Intelligence & Machine Learning, in addition any projects combining both applications, moreover continuous development to my skills by exploring more aspects of the field .
        </p>
          <a className="btn btn-lg btn-dark" href={CV} download="cv.pdf">Download CV</a>
      </section>
    </div>
  );
};
export default AboutMe;
