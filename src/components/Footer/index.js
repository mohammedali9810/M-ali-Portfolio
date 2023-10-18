import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="row  p-5 text-light fs-7">
        <div className="col text-start pl-3  ">
          <h3 className="mb-5">MY CONTACTS</h3>
          <p className="ms-4 d-flex align-items-center">
            <i className="material-icons me-1">email</i> mohammedaly9810@gmail.com{" "}
          </p>
          <p className="ms-4 d-flex align-items-center">
            <i className="material-icons me-1">contact_mail</i> +20 1111143574
          </p>
        </div>
        <div className="col text-center my-auto  ">
          <a
            className="btn py-3 fs-3 px-5  align-middle btn-lg  btn-outline-light"
            href="mailto:mohammedaly9810@gmail.com"
            role="button"
          >
            Contact Me
          </a>
        </div>
        <div className=" col my-auto text-end pe-3">
          <div className="me-5">
            <a href="https://www.linkedin.com/in/mohammed-aly-9810/" >
              <i className="fa fa-linkedin-square text-light me-1"></i>
            </a>{" "}
            <a href="https://www.facebook.com/mohamed.a.younes.7/">
              <i className="fa fa-facebook-square text-light me-1"></i>
            </a>{" "}
            <a href="https://twitter.com/Mohamedali9810">
              <i className="fa fa-twitter me-1" style={{ color: "white" }}></i>
            </a>
          </div>
        </div>
        <div className="w-100" />
      </div>
    </div>
  );
};

export default Footer;
