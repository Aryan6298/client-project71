import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Environmental Scientist",
      feedback:
        "SOM's team delivered outstanding solutions for our groundwater sustainability project. Their expertise and professionalism exceeded expectations.",
    },
    {
      name: "Rajesh Kumar",
      role: "Hydrogeologist",
      feedback:
        "The level of technical skill and dedication shown by SOM's professionals is unmatched. Highly recommend their services.",
    },
    {
      name: "Priya Verma",
      role: "Project Manager",
      feedback:
        "Working with SOM has been a game-changer for our environmental projects. Their talented team always delivers top-quality work.",
    },
  ];

  return (
    <>
      <h2 style={styles.heading} className="section-heading">
        OUR REVIEWS
      </h2>
      <div style={styles.section}>
        <Container>
          <Row>
            {reviews.map((review, index) => (
              <Col md={4} sm={12} key={index} className="mb-4">
                <Card style={styles.card} className="review-card">
                  <Card.Body>
                    <Card.Title style={styles.name}>{review.name}</Card.Title>
                    <Card.Subtitle style={styles.role}>
                      {review.role}
                    </Card.Subtitle>
                    <Card.Text style={styles.feedback}>
                      "{review.feedback}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Internal CSS */}
        <style>{`
          /* Section heading with centered underline */
          .section-heading {
            font-weight: 600;
            font-size: 1.75rem;
            margin-bottom: 1rem;
            text-align: center;
            color: white !important;
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
          }
          .section-heading::after {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #00aaff, #66ccff);
            transition: all 0.3s ease;
          }
          .section-heading:hover::after {
            width: 80%;
           
          }
        `}</style>
      </div>
    </>
  );
};

const styles = {
  section: {
    backgroundColor: "#f8faff",
    padding: "60px 0",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#004e75",
  },
  card: {
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    padding: "20px",
    backgroundColor: "#ffffff",
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#004e75",
  },
  role: {
    fontSize: "0.95rem",
    color: "#007bbf",
    marginBottom: "15px",
  },
  feedback: {
    fontStyle: "italic",
    fontSize: "1rem",
    color: "#333",
  },
};

export default ReviewsSection;
