import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Assets/toolkit.css";
import {
    SiPostman,
    SiIntellijidea,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiGit,
    SiJira,
} from "react-icons/si";

interface Tool {
    icon: JSX.Element;
    name: string;
}

const Toolstack: React.FC = () => {
    const tools: Tool[] = [
        { icon: <SiIntellijidea />, name: "IntelliJ" },
     //   { icon: <SiVisualstudiocode />, name: "VS Code" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiJenkins />, name: "Jenkins" },
      //  { icon: <SiAmazonaws />, name: "AWS" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiJira />, name: "Jira" },
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((tool, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    {tool.icon}
                    <p>{tool.name}</p>
                </Col>
            ))}
        </Row>
    );
};

export default Toolstack;
