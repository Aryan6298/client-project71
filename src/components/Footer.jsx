import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#0A3D62' }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

          {/* About Section */}
          <div className="col" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              About Us
            </h5>
            <p style={{ color: "white" }}>
              System Organization of Management (SOM) have skilled and talented professionals that include Engineers, Environmental Scientists, Geologists, Hydrogeologists, GIS analysts, Groundwater Experts, and Technicians.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              Contact Us
            </h5>
            <p>
              <a href="tel:9827004138" className="footer-link">
                <FaPhone className="me-2" /> +91 98270-04138
              </a>
            </p>
            <p>
              <a href="tel:9827786556" className="footer-link">
                <FaPhone className="me-2" /> +91 98277-86556
              </a>
            </p>
           
            <p>
              <a href="mailto:systemomanage@gmail.com" className="footer-link">
                <FaEnvelope className="me-2" /> systemomanage@gmail.com
              </a>
            </p>
          </div>

          {/* Social + Map Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              Connect with Us
            </h5>
            <div className="d-flex gap-3 mb-3">
             {/* <a
                href="https://www.instagram.com/geoconservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a> */}

              {/* <a
                href="https://www.facebook.com/geoconservices"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a> */}
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d393.79325505359924!2d77.50637455672842!3d23.23675378582924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x397c41005cbc0b1d%3A0x64518d73582ad807!2s6GP4%2BMMX%20Gopal%20Nagar%2C%20Khajuri%20Kalan%20Rd%2C%20Khajurikala%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!3m2!1d23.2367462!2d77.5067285!5e0!3m2!1sen!2sin!4v1755094620419!5m2!1sen!2sin"
                width="100%"
                height="150"
                
                style={{ border: 0,marginTop: '-20px' }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Address Section */}
          <div className="col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <h5 className="fw-bold mb-3 footer-heading" style={{ color: " #00FFFF" }}>
              Our Address
            </h5>
            <p style={{ color: "white"}}>
              <FaMapMarkerAlt className="me-2" />
              Flat No. 3, GOPAL NAGAR B SECTOR  KAHJURI KALAN ,<br />
              Bhopal, Madhya Pradesh <br /> Pincode: 452022
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-1" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} System Organization of Management. All rights reserved.
          </p>

          <Link to="/termsofservices" className="text-white">Terms of Service</Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .footer-heading {
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          }

          .footer-heading:hover {
            transform: translateY(-5px);
            color: #f8f9fa;
          }

          .footer-link {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #00d4ff;
            text-decoration: underline;
          }

          /* Social icons base style */
          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            font-size: 20px;
            color: white;
            border: 1.5px solid white;
            border-radius: 50%;
            transition: color 0.3s ease, border-color 0.3s ease;
          }

          /* Instagram hover - official gradient approximated by purple */
          .social-icon.instagram:hover {
            color: #E1306C; /* Instagram brand pink */
            border-color: #E1306C;
          }

          /* Facebook hover */
          .social-icon.facebook:hover {
            color: #1877F2; /* Facebook blue */
            border-color: #1877F2;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
