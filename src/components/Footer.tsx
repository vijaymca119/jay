import {Container, Row, Col} from 'react-bootstrap';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from 'react-icons/ai';
import {FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Vijay Kumar</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} SB</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/vijaymca119"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/vijay-kumar-3258b196/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/vijay4v"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
