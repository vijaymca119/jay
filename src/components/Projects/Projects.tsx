import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Define types for project props
interface Project {
  imgPath: string;
  title: string;
  description: string;
  isBlog: boolean;
}

const Projects: React.FC = () => {
  // Define the projects array to hold the project data
  const projects: Project[] = [
    {
      imgPath: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
      title: "Flight Tracker System",
      description:
          "A real-time flight tracking application for Emirates Airlines, built with React.js and Spring Boot. The system provides seamless user interactions and real-time updates for flight statuses.",
      isBlog: false,
    },
    {
      imgPath: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      title: "E-commerce Platform",
      description:
          "Scaled an online store to handle 10,000+ concurrent users using React, Node.js, and MongoDB. The platform includes features like product search, cart management, and payment integration.",
      isBlog: false,
    },
    {
      imgPath: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
      title: "Verizon ATG Migration",
      description:
          "Migrated Verizon’s legacy ATG system to a modern Spring-based microservices architecture, achieving a 25% improvement in scalability and system reliability.",
      isBlog: false,
    },
    {
      imgPath: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      title: "Category Management Tool",
      description:
          "Built a robust category management system integrating React.js and Spring Boot. The tool allows dynamic configuration and management of product categories for large-scale e-commerce platforms.",
      isBlog: false,
    },
    {
      imgPath: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
      title: "Unplanned Leave Workflow",
      description:
          "Developed an approval workflow system with an intuitive React frontend and a scalable Java backend. The system streamlines leave requests and approvals for enterprise clients.",
      isBlog: false,
    },
  ];

  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
                <Col md={4} className="project-card" key={index}>
                  <ProjectCard
                      imgPath={project.imgPath}
                      title={project.title}
                      description={project.description}
                      isBlog={project.isBlog}
                  />
                </Col>
            ))}
          </Row>
        </Container>
      </Container>
  );
};

export default Projects;
