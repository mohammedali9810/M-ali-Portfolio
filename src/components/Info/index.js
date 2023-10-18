import "./Info.css";

const Info = () => {
  return (
    <div className="index bg-image p-5  shadow-1-strong rounded mb-5 text-white">
      <div className="info text-center ms-5 p-3 w-30">
        <h1 className="mb-3 ">Mohammed Ali</h1>
        <h3>Software Engineer</h3>
        <a href="mailto:mohammedaly9810@gmail.com">
          <button type="button" className="btn mt-4 fs-3 btn-lg btn-outline-light">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;

