import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import baloon from "../../Assets/Projects/baloon.png";
import diabities from "../../Assets/Projects/diabities.png";
import news from "../../Assets/Projects/news.png";
import warehouse from "../../Assets/Projects/warehouse.png";
import textutils from "../../Assets/Projects/textutils.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NewsApp"
              description=" NewsApp is website based on react js which will give information related to news of the mentioned country from the newsApi. user can see and read the
              news articles of different category by clicking the read more button."
              ghLink="https://github.com/VishalVish740/NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="TextUtils is word counter, character counter, remove extra spaces, convert uppercase to lowercase and lowercase to uppercase website based on react js and html and css. 
              You can use use text area to write something and perform the function with the help of buttons. "
              ghLink="https://github.com/VishalVish740/TextUtils"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabities}
              isBlog={false}
              title="Diabetes Prediction"
              description="Diabetes Prediction is a machine learning web application which predicts whether the patient whose details have been entered is diabetic or not. There are various parameters on which this model
              will predict the condition. Some of them include the BMI (Body Mass Index), the glucose intake, diastolic blood pressure,skin thickness, age etc."
              ghLink="https://github.com/VishalVish740/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title="Online-Warehouse"
              description="“Online Warehouse, E-Commerce Website for buying Products.” it is Django based website
              which is built using bootstrap, JavaScript and python framework library Django planned to control by the different Databases, which is sqlite"
              ghLink="https://github.com/VishalVish740/Online-Warehouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="JustScantIt"
              description="JustScantIt-A Barcode scanner android app for buying and Selling Products. It is a software which is
              planned to control by the different Databases, which will be in-builded into the software."
              ghLink="https://github.com/VishalVish740/ScanForPay"
            // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baloon}
              isBlog={false}
              title="Balloon-Shooter"
              description="A Balloon Shooter game in Python involves creating a simple arcade-style game where the player shoots colored Balloons at a cluster of Balloons. 
              The goal is to match three or more Balloons of the same color to make them disappear. The player wins by clearing all the Balloons or loses if the Balloons fill the screen."
              ghLink="https://github.com/VishalVish740/Balloon-Shooter"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
