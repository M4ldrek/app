import "../assets/css/home.css";

import TechAngle1 from "../assets/images/TechAngle1.png";
import TechAngle2 from "../assets/images/TechAngle2.png";
import TechCircle from "../assets/images/Circle.png";
import ProfilePic from "../assets/images/ProfilePic.png";
import ArrowDown from "../assets/images/ArrowDown.png";

export default function Home({ ref }) {
  console.log(ref);
  return (
    <div className="background-waves2">
      {/* <div>
        <img
          src={Waves1}
          alt=""
          className="position-absolute fadeIn-animation w-100"
        />
      </div> */}

      <div className="app-container d-flex align-items-center justify-content-center">
        <div className="row w-75 h-75 d-flex align-items-center justify-content-center">
          <div className="col-6 h-100 position-relative">
            <div className="position-absolute w-50 tech1-angle-position fadeIn-animation">
              <img src={TechAngle1} alt="" className="img-fluid" />
            </div>

            <div className="position-absolute w-50 tech2-angle-position fadeIn-animation">
              <img src={TechAngle2} alt="" className="img-fluid" />
            </div>
            <div className="h-100 d-flex justify-content-center align-items-center flex-column">
              <div>
                <h1 style={{ fontSize: "80px" }}>
                  MI CHIAMO <br />
                  CAMILLO PISANU
                </h1>
                <h4>SONO UNO SVILUPPATORE WEB</h4>
              </div>
            </div>
          </div>

          <div className="col-6 h-100 position-relative">
            <div className="position-absolute tech-circle-photo w-100">
              <div className="rotate-animation">
                <img src={TechCircle} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="h-100 d-flex justify-content-center align-items-center">
              <img src={ProfilePic} alt="" className="img-fluid" />
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
