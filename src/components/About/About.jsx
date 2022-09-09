import React from "react";
import "./About.css";
//image
import Scarf from "../../images/scarf.png";
import Arrow from "../../images/arrow.png"

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="About-images About-images2">
          <img src={Scarf} alt="" className="images" />
        </div>
        <div className="About-info">
          <h2 className="About_info-title">O наши компани</h2>
          <p className="About_info-text">
            World Textile Marketing Agency основан в 2019 году молодыми
            специалистами в области маркетинга, текстильной индустрии,
            веб-программирования, организации мероприятий, дизайна одежды и
            полиграфии. Наша команда специализируется в продвижении предприятий
            легкой промышленности на зарубежные рынки.
          </p>
          <div className="buttons">
            <img src={Arrow} alt="" className="btn-image" />
            <button className="btn">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
