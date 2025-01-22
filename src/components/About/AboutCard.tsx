import React from "react";
import Card from "react-bootstrap/Card";

const AboutCard: React.FC = () => {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Vijay Kumar</span>,
              a <span className="purple">Senior Software Engineer | Full Stack Developer</span> based in{" "}
              <span className="purple">Dubai, UAE</span>.
              <br />
              With over <span className="purple">8+ years of experience</span>, I specialize in designing, developing, and deploying scalable web and mobile applications. My expertise spans across Java backend development, modern JavaScript frameworks, and cloud-native solutions.
              <br />
              I am currently driving innovation at <span className="purple">Emirates Airlines</span> as a Senior Software Engineer, where I lead the architecture and development of scalable microservices and responsive web interfaces.
              <br />
              My technical toolkit includes:
              <ul>
                <li><span className="purple">Programming Languages:</span> Java (Spring Boot, Hibernate), JavaScript (React.js, Node.js, Angular), TypeScript</li>
                <li><span className="purple">Frontend Development:</span> React.js, Next.js, Tailwind CSS, HTML5, CSS3</li>
                <li><span className="purple">Backend Development:</span> RESTful APIs, GraphQL, Microservices Architecture</li>
                <li><span className="purple">Mobile Development:</span> React Native, Expo</li>
                <li><span className="purple">Databases:</span> MySQL, PostgreSQL, MongoDB, Oracle 11g</li>
                <li><span className="purple">DevOps:</span> Docker, Kubernetes, Jenkins, CI/CD Pipelines</li>
                <li><span className="purple">Cloud Platforms:</span> AWS (EC2, Lambda, S3), Azure</li>
                <li><span className="purple">Testing:</span> JUnit, Jest, Cypress</li>
                <li><span className="purple">Tools & Libraries:</span> Git, Jira, IntelliJ, SonarQube, Hibernate Envers</li>
              </ul>
              I am passionate about leveraging cutting-edge technologies to solve complex business problems and deliver high-quality software solutions.
            </p>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"
            </p>
            <footer className="blockquote-footer">Vijay Kumar</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
};

export default AboutCard;
