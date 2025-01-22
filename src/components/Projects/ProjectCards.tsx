import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

// Define types for props to ensure type safety
interface ProjectCardsProps {
    imgPath: string; // URL or path to the image
    title: string; // Title of the project
    description: string; // Description of the project
    demoLink?: string; // Optional demo link
    isBlog: boolean; // Indicates if the link is a blog
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
                                                       imgPath,
                                                       title,
                                                       description,
                                                       demoLink,
                                                       isBlog,
                                                   }) => {
    return (
        <Card className="project-card-view">
            {/* Project Image */}
            <Card.Img variant="top" src={imgPath} alt={`${title} image`} />

            <Card.Body>
                {/* Project Title */}
                <Card.Title>{title}</Card.Title>

                {/* Project Description */}
                <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

                {/* Conditional Demo Button */}
                {!isBlog && demoLink && (
                    <Button
                        variant="primary"
                        href={demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                        aria-label={`Link to demo for ${title}`}
                    >
                        <CgWebsite /> &nbsp; Demo
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default ProjectCards;
