import QuoteLine from "../assets/images/QuoteLine.png";

export default function Contacts() {
  return (
    <div>
      <div className="app-container d-flex align-items-center justify-content-center">
        <div className="row w-75 h-75 d-flex align-items-center justify-content-center">
          <div className="col-6 h-100">
            <h2>CONTATTI</h2>
            <div className="h-100 position-relative">
              <div>
                <p>
                  <strong>Email:</strong> camillo.pisanu.dev@gmail.com
                </p>
                <p>
                  <strong>Telefono:</strong> (+39) 345-2204327
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a href="https://www.linkedin.com/in/camillo-pisanu">
                    Camillo Pisanu
                  </a>
                </p>
                <p>
                  <strong>GitHub</strong>{" "}
                  <a href="https://github.com/M4ldrek">M4ldrek</a>
                </p>
              </div>
              <div className="quote-phrase position-absolute ">
                <div className="position-relative">
                  <img
                    src={QuoteLine}
                    alt=""
                    className="position-absolute img-fluid"
                  />
                  <h2>
                    "EVERYBODY SHOULD LEARN TO PROGRAM A COMPUTER BECAUSE IT
                    TEACHES YOU HOW TO THINK"
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 h-100"></div>
        </div>
      </div>
    </div>
  );
}
