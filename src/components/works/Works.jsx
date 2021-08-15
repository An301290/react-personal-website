import { useState } from "react";
import "./Work.scss";


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Web Design 1",
      projects: "Make.garden",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      tools: "Javascript, Typescript, Api",
      img: "assets/main.pic-removebg.png",
      link: "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react",
    },
    {
      id: "2",
      title: "Mobile Application 2",
      projects: "Make.garden",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tools: "Javascript, Typescript, Api",
      img: "assets/main.pic-removebg.png",
      link: "https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react",
    },
    {
      id: "3",
      title: "Branding 3",
      projects: "Make.garden",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tools: "Javascript, Typescript, Api",
      img: "assets/main.pic-removebg.png",
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
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <a href={d.link} rel="noreferrer" target="_blank">
                  <img src="assets/Angel_Samano-nobackground.png" alt="" />
                </a>
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
