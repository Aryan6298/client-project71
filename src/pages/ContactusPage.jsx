import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    

      {/* Custom styles */}
      <style>{`
        

        .subheading {
          color: #e2e2e2;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .subheading:hover {
          color: #d4edda;
          transform: scale(1.03);
        }

        .info-card {
          border-radius: 20px;
          background-color: #f8f9fa;
          padding: 30px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }

        .inner-box {
          background: #ffffff;
          padding: 25px;
          border-radius: 15px;
          margin-top: 20px;
        }

        .contact-label {
          font-weight: 600;
          font-size: 1.1rem;
          color: #343a40;
        }

        .icon {
          color: #007bff;
          margin-right: 8px;
        }

        .contact-link {
          color: #007bff;
          text-decoration: none;
          display: inline-block;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .text-muted {
          color: #6c757d !important;
        }
              .clients-title {
          position: relative;
          font-style: italic;
          font-size: 2.8rem;
          color: #ffffff;
          padding-top: 50px;
          font-weight: 800;
          margin-bottom: 40px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: color 0.4s ease;
        }
        /* Underline effect using a pseudo element */
        .clients-title::after {
          content: "";
          position: absolute;
          width: 0;
          height: 4px;
          left: 50%;
          bottom: -12px;
          background:rgb(79, 217, 255);
          border-radius: 2px;
          transition: width 0.4s ease, left 0.4s ease;
          box-shadow: 0 0 8px rgb(79, 208, 255);
        }
        .clients-title:hover {
          color: rgb(79, 217, 255);
        }
        .clients-title:hover::after {
          width: 60%;
          left: 20%;
        }
      `}</style>

      <Container className="my-5 text-center" data-aos="fade-up">
        <h1 className="clients-title mb-2">Get In Touch</h1>
        <p className="subheading mb-4">
          We are here to assist you. Feel free to reach out anytime!
        </p>

        <Card className="info-card mx-auto" style={{ maxWidth: '700px' }}>
          <h4 className="text-primary mb-2">Contact Information</h4>
          <p className="mb-3 text-dark">We are available 7 days a week!</p>

          <div className="inner-box">
            <div className="mb-3">
              <span className="contact-label">
                <FaMapMarkerAlt className="icon" /> Address
              </span>
              <p className="text-muted mt-1 mb-3">
              Flat No. 3, GOPAL NAGAR B SECTOR  KAHJURI KALAN ,<br />
              Bhopal, Madhya Pradesh <br /> Pincode: 452022
              </p>
            </div>

            <div className="mb-3">
              <span className="contact-label">
                <FaEnvelope className="icon" /> Mail ID
              </span>
              <p className="mt-1 mb-3">
                <a href="mailto:systemomanage@gmail.com" className="contact-link">
                  systemomanage@gmail.com
                </a>
              </p>
            </div>

            <div>
              <span className="contact-label">
                <FaPhoneAlt className="icon" /> Phone
              </span>
              <p className="mt-1 mb-0">
                <a href="tel:+919827004138" className="contact-link d-block">
                  +91 98270-04138
                </a>
                <a href="tel:+919827786556" className="contact-link d-block">
                  +91 98277-86556
                </a>
              </p>
            </div>
          </div>
        </Card>
      </Container>

      
    </>
  );
};

export default ContactPage; 