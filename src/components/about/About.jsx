import "./About.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "UX Design",
        "Javascript",
        "React",
        "Node.js",
        "MySQL",
        "Prototype",
        "Research",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="box">
          <div className="card">
            <div className="imgBx">
              <img src="assets/main.pic-removebg.png" alt="angel" />
            </div>
            <div className="details">
              <h2>Web Developer with UX Design background</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Angel Samano Hamud</h1>
          <h3>
            Web Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
