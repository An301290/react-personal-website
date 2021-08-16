import "./Testimonial.scss";
import { FaLinkedinIn } from "react-icons/fa";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Pierre Giddio",
      title: "Senior Developer",
      img:
        "assets/Pierre.JPEG",
      desc:
        "I have seen Angel eager to learn new techniques and to go above solving technical problems. I was consistently delighted by his dedication and good humor! It is a pleasure to recommend such a positive person to any team looking for a hardworking developer.",
        link: "https://www.linkedin.com/in/pierregiddio/",
         featured: true,
    },
    {
      id: 2,
      name: "Szumiao Chen",
      title: "UX Designer",
      img:
        "assets/Pierre.JPEG",
      desc:
        "I have seen Angel eager to learn new techniques and to go above solving technical problems. I was consistently delighted by his dedication and good humor! It is a pleasure to recommend such a positive person to any team looking for a hardworking developer.",
        link: "https://www.linkedin.com/in/pierregiddio/",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
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
