export default function Contacts() {
  return (
    <div className="background-waves">
      <div className="app-container d-flex align-items-center justify-content-center">
        <div className="row w-75 h-75 d-flex align-items-center justify-content-center">
          <div className="col-6 h-100">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="quote-phrase h-25">
                <div>
                  <h2>
                    "EVERYBODY SHOULD LEARN TO PROGRAM A COMPUTER BECAUSE IT
                    TEACHES YOU HOW TO THINK"
                  </h2>
                  <h4>STEVE JOBS</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 h-100 d-flex flex-column justify-content-around">
            <h2>CONTATTAMI</h2>

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
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/M4ldrek">M4ldrek</a>
              </p>
            </div>
            <hr />
            <form action="" className="d-flex flex-column w-100">
              <div class="mb-3">
                <label for="fullName" class="form-label">
                  Nome completo:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Inserisci il tuo nome e cognome..."
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Indirizzo email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Inserisci la tua email..."
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Messaggio:
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="6"
                  placeholder="Inserisci un messaggio..."
                ></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-primary mb-3">
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <footer className="text-center pb-3">
          Copyright &#169; 2024 - Camillo Pisanu / M4ldrek - All rights
          reserved.
        </footer>
      </div>
    </div>
  );
}
