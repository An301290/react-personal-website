import { useState } from "react";
import "./Portfolio.scss";
import { dataPortfolio } from "../../Data"



export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
      : setCurrentSlide(currentSlide < dataPortfolio.length - 1 ? currentSlide + 1 : 2);
  };

  return (
    <div className="works" id="portfolio">
      <h1 className="main-title">Portfolio</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {dataPortfolio.map((d) => (
          <div className="container">
            <div className="item" >
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.title}</h1>
                  <h2>{d.projects}</h2>
                  <br></br>
                  <p>{d.desc}</p>
                  <br></br>
                   <a href={d.link} rel="noreferrer" target="_blank">
                  <span>Projects</span></a>
                </div>
              </div>
              <div className="right">
                <a href={d.link} rel="noreferrer" target="_blank">   <img src={d.image} alt="project" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="aqrrow-left"
        onClick={() => handleClick("left")}
      />
       <img
        src="assets/arrow.png"
        className="arrow right"
        alt="arrow-right"
        onClick={() => handleClick("right")}
      /> 
    </div>
   
    
  );
}


 