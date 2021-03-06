import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="container-skills" id="about">
        <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__cover">
              <h4 class="card__heading">
                <span class="card__heading-span">Hola!</span>
              </h4>
            </div>
            <div class="card__details">
              <p>I’m Angel, a Web Developer with UX Design background. After years of working in sales, logistics as well as customer service areas and with a bachelor degree in International Relations, I have developed a strong customer focus and deep understanding of how to approach problems from a human-centered perspective.
</p>
            </div>
          </div>
          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">About me </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__cover">
              <h4 class="card__heading">
                <span class="card__heading-span">Hello World</span>
              </h4>
            </div>
            <div class="card__details">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>MySQL </li>
                <li>Node.Js</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__subject">Skills Set</p>
                <p class="card__title">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__cover">
              <h4 class="card__heading">
                <span class="card__heading-span">User Needs</span>
              </h4>
            </div>
            <div class="card__details">
              <ul>
                <li>User-Centered Design</li>
                <li>Competitive Analysis</li>
                <li>Research</li>
                <li>User Personas</li>
                <li>Information Architecture and User Flows</li>
                <li>Wireframing and Prototyping</li>
                <li>Sketch</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__subject">Skills set</p>
                <p class="card__title">UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
