import "./Testimonial.scss";
import {dataTestimonials} from "../../Data"
import { FaLinkedinIn } from "react-icons/fa";

export default function Testimonials() {
  
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {dataTestimonials.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="right-arrow" />
              <img
                className="user"
                src={d.img}
                alt="testimonial"
              />
              <a href={d.link} rel="noreferrer" target="_blank" className="right"><FaLinkedinIn  /></a></div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
