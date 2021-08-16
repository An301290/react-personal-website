import { useState } from "react";
import "./Portfolio.scss";


export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Tattoo App",
      projects: "Tattoon ",
      desc: "Implemented the design thinking process to design a tattoo app.  Conducted research, created user personas, architecture information, wireframes as well as prototypes and tested them.",
      image: "assets/UX_case_study.png",
      link: "https://www.behance.net/gallery/113687199/Tattoon-App",
    },
    {
      id: "2",
      title: "Make.garden",
      projects: "Make.garden",
      desc: "Delivered a project to our customer Fred Vincent together with 3 other team members. During the process, I contributed to the implementation of the Mapbox API, which included retrieving data from our database, implementing a cluster and displaying data in the sidebar.",
      image: "assets/Make.garden.png",
      link: "https://makegarden.herokuapp.com/",
    },
    {
      id: "3",
      title: "",
      projects: "Make.garden",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tools: "Javascript, Typescript, Api",
      image: "assets/Make.garden.png",
      link: "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 2);
  };

  return (
    <div className="works" id="works">
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
                  <img src={d.image} alt="project-image" />
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
