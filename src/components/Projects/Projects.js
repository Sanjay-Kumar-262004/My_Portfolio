import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webture from "../../Assets/Projects/webture.jpg";
import decode from "../../Assets/Projects/decode.jpg";
import sensors2 from "../../Assets/Projects/sensors2.jpg";
import sensors from "../../Assets/Projects/sensors.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Workshops & Hackathons</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Workshops & Hackathons I've attended
        </p>
        {/* Workshop contents */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webture}
              isBlog={false}
              title= <strong className="purple">WEBTURE</strong>
              description="Completed a comprehensive Web Development bootcamp conducted by IEEE SRMIST Student Branch . The program covered a wide range of topics including HTML, CSS, JavaScript, and various web development frameworks. Throughout the course, I gained hands-on experience working on various projects, which helped me build a strong foundation in web development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decode}
              isBlog={false}
              title=<strong className="purple">DECODE HOUR</strong>
              description="Participated in a Codeathon conducted by Newton School Coding Club SRMIST and it was an incredible experience!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={sensors} 
              isBlog={false}
              title=<strong className="purple">Sensors and IoT For Smart Healthcare</strong>
              description="Participated in a Workshop conducted by IE(I) on the Topic Senors & IoT for smart Healthcare gained Hands on experience!"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
