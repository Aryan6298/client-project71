import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ExperienceSection = () => {
  const sectionStyle = {
    backgroundImage: "url('/images/experience-bg.jpg')", // change path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "40px 0",
    color: "#fff",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 53, 77, 0.8)", // dark greenish overlay
    padding: "40px",
    borderRadius: "10px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.7",
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <div style={overlayStyle}>
              <h2 style={headingStyle}>
                5+ Years of Excellence in Geoscience & Environmental Solutions
              </h2>
              <p style={paragraphStyle}>
                With over fifteen years of specialized experience, we have successfully
                completed a wide range of projects across hydrogeology, geophysics,
                groundwater management, and environmental compliance. Our expert team
                integrates the latest technology with proven methodologies to deliver
                reliable, sustainable solutions tailored to your unique needs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;
