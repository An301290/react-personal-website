import { useState } from "react";
import "./Portfolio.scss";


export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
       id: "1",
      title: "Make.garden",
      projects: "Web Development",
      desc: "Delivered to our customer Fred Vincent together with 3 other team members. I contributed to the implementation of the Mapbox API, retrieving data from our database, implementing a cluster in the Map and displaying data in the sidebar.",
      image: "assets/Make.garden.png",
      link: "https://makegarden.herokuapp.com/",
      
    },
    {
       id: "2",
      title: "AllYouNeed",
      projects: "Web Development",
      desc: "Built an online shop, which allows to add or remove items to the shopping cart and calculates the total amount to pay, using a store API, Typescript, Material UI, Styled Components and React-Query.",
      image: "assets/AllYouNeed.png",
      link: "https://an301290.github.io/online-shop/",
    },
    {
     id: "3",
      title: "Tattoo App",
      projects: "UX Design",
      desc: "Implemented the design thinking process to design a tattoo app.  Conducted research, created user personas, architecture information, wireframes as well as prototypes and tested them.",
      image: "assets/Tattoon.png",
      link: "https://www.behance.net/gallery/113687199/Tattoon-App",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 2);
  };

  return (
    <div className="works" id="portfolio">
      <h1 className="main-title">Portfolio</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
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
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
    
  );
}
