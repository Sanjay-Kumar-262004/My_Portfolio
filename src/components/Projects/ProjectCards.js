import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
          {props.slides && (
            <div style={{ marginTop: "10px" }}>
              {props.slides}
            </div>
          )}
          {props.descriptionText && (
            <p style={{ marginTop: "10px" }}>
              {props.descriptionText}
            </p>
          )}
        </Card.Text>
        {props.isProject && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
