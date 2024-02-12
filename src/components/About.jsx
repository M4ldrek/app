import ArrowDown from "../assets/images/ArrowDown.png";

export default function About() {
  return (
    <div>
      <div className="app-container position-relative d-flex align-items-center justify-content-center">
        <div className="row w-75 h-75 align-items-center ">
          <div className="col-4 h-75 d-flex justify-content-between flex-column">
            <h2>PROFILO</h2>
            <div>
              <h4>INFO</h4>
              <div>
                <p>
                  <strong>Data di nascita:</strong> 31 Marzo 1996
                </p>
                <p>
                  <strong>Nazionalità:</strong> Italiana
                </p>
                <p>
                  <strong>Residenza:</strong> Livorno, Italia
                </p>
                <p>
                  <strong>Domicilio:</strong> Milano, Italia
                </p>
              </div>
            </div>
            <div>
              <h4>LINGUE</h4>
              <div>
                <p>
                  <strong>Italiano:</strong> Madrelingua
                </p>
                <p>
                  <strong>Inglese:</strong> Reading C2, Listening C1, Speaking
                  B2
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 h-75 d-flex justify-content-between flex-column">
            <h4>ISTRUZIONE</h4>
            <div>
              <p>
                <strong>Titolo di studio:</strong> Diploma di scuola superiore
              </p>
              <p>
                <strong>Indirizzo di studi:</strong> Scienze Umane
              </p>
              <p>
                <strong>Istituzione:</strong> ISIS Niccolini Palli
              </p>
              <p>
                <strong>Città:</strong> Livorno, Italia
              </p>
              <p>
                <strong>Valutazione:</strong> 72/100
              </p>
            </div>
            <div>
              <p>
                <strong>Indirizzo di studi:</strong> Informatica
              </p>
              <p>
                <strong>Istituzione:</strong> Università di Pisa
              </p>
              <p>
                <strong>Città:</strong> Pisa, Italia
              </p>
              <p>
                <strong>Valutazione:</strong> PERCORSO DI STUDI NON CONCLUSO
              </p>
            </div>
            <div>
              <p>
                <strong>Titolo di studio:</strong> Certificazione Master
              </p>
              <p>
                <strong>Indirizzo di studi:</strong> Full stack web developer
                trainee
              </p>
              <p>
                <strong>Istituzione:</strong> Boolean Carrers
              </p>
              <p>
                <strong>Città:</strong> Online
              </p>
              <p>
                <strong>Valutazione:</strong> Attestato di superamento
              </p>
            </div>
          </div>

          <div className="col-4 h-75 d-flex justify-content-between flex-column">
            <h4>COMPETENZE TECNICHE</h4>
            <div>
              <p>
                <strong>Programmazione:</strong> HTML, Javascript, JQuery, PHP,
                Laravel, VueJS, ReactJS, Redux, React Native, NextJS, MySQL
              </p>
              <p>
                <strong>Stile:</strong> CSS, SCSS, Bootstrap, React-Bootstrap,
                MaterialUI
              </p>
            </div>
            <h4>COMPETENZE PERSONALI</h4>
            <div>
              <p>
                Ho una grande passione per l’informatica e per le nuove
                tecnologie. Ho un’ottima capacità di problem solving e riesco a
                mantenere la calma e la lucidità anche in condizioni di forte
                stress. Sono una persona molto curiosa, precisa e attenta ai
                dettagli.
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute arrow-down-position">
          <div className="slideUpDown-animation">
            <img src={ArrowDown} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
