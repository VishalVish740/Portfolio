import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Vishwakarma </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently looking for an opportunities in tech industries for Web Developer | Python Developer | Technical Support | React JS etc.
            <br />
            I have completed my BSc in Computer Science from Patkar Varde College and completed my MSc in Computer Science From Thakur College of Science and Commerce.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Code
            </li>
            <li className="about-activity">
              <ImPointRight /> Listining Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Typing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
