import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJava,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPostgresql,
    DiGit,
} from "react-icons/di";
import {
    SiTypescript,
    SiAngular,
    SiSpringboot,
    SiHibernate,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiMysql,
} from "react-icons/si";

const Techstack: React.FC = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
                <p>Java</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
                <p>Spring Boot</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHibernate />
                <p>Hibernate</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <p>JavaScript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
                <p>TypeScript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <p>React.js</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAngular />
                <p>Angular</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
                <p>Node.js</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
                <p>MySQL</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPostgresql />
                <p>PostgreSQL</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
                <p>MongoDB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
                <p>Docker</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
                <p>Kubernetes</p>
            </Col>
           {/* <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws />
                <p>AWS</p>
            </Col>*/}
            <Col xs={4} md={2} className="tech-icons">
                <SiJenkins />
                <p>Jenkins</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <p>Git</p>
            </Col>
        </Row>
    );
};

export default Techstack;
