import CardBorder from "../assets/images/CardBorder.png";
import ArrowDown from "../assets/images/ArrowDown.png";

export default function Projects() {
  return (
    <div>
      <div className="app-container position-relative d-flex align-items-center justify-content-center">
        <div className="row w-75 h-75">
          <h2>PROGETTI</h2>
          <div className="h-75 d-flex justify-content-between align-items-center">
            <div className="project-card">
              <img src={CardBorder} alt="" className="img-fluid card-border" />
            </div>

            <div className="project-card">
              <img src={CardBorder} alt="" className="img-fluid card-border" />
            </div>

            <div className="project-card">
              <img src={CardBorder} alt="" className="img-fluid card-border" />
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
