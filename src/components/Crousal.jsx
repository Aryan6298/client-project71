import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import img1 from "../assets/crousal-img1.jpg";
import img2 from "../assets/crousal-img2.jpg";
import img3 from "../assets/crousal-img3.jpg";

const HeroCarousel = () => {
  const navigate = useNavigate();
  const carouselStyle = {
    height: "100vh",
    overflow: "hidden",
  };

  const imageStyle = {
    objectFit: "cover",
    height: "100vh",
    width: "100%",
    animation: "zoomEffect 15s ease-in-out infinite",
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          @keyframes zoomEffect {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .custom-caption {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            background: rgba(0, 0, 0, 0.4);
            padding: 30px 50px;
            border-radius: 15px;
          }

          .custom-caption h3 {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
            margin-bottom: 20px;
            animation: fadeInUp 1s ease forwards;
          }

          .custom-caption p {
            font-size: 1.2rem;
            color: #f0f0f0;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease forwards;
            animation-delay: 0.5s;
            opacity: 0;
          }

          .btn-group-animated {
            animation: fadeIn 1s ease forwards;
            animation-delay: 1s;
            opacity: 0;
          }

          .custom-btn {
            display: inline-block;
            padding: 12px 25px;
            margin: 5px;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            border: 2px solid #fff;
            background: transparent;
            border-radius: 30px;
            transition: all 0.4s ease;
          }

          .custom-btn:hover {
            background: #ff4d4d;
            border-color: #ff4d4d;
            color: white;
            transform: scale(1.05);
            box-shadow: 0px 4px 20px rgba(255,77,77,0.7);
          }
        `}
      </style>

      <Carousel fade interval={3000} controls indicators pause={false}>
        <Carousel.Item style={carouselStyle}>
          <img className="d-block w-100" src={img1} alt="First slide" style={imageStyle} />
          <div className="custom-caption">
            <h3>Expert Management Solutions</h3>
            <p>System Organization of Management delivers excellence through a skilled and talented team committed to innovative solutions.</p>
            <div className="btn-group-animated">
              <button onClick={() => navigate("/about")} className="custom-btn">Know More</button>
              <button onClick={() => navigate("/contact")} className="custom-btn">Contact Us</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item style={carouselStyle}>
          <img className="d-block w-100" src={img2} alt="Second slide" style={imageStyle} />
          <div className="custom-caption">
            <h3>Multidisciplinary Team</h3>
            <p>Our professionals include Engineers, Environmental Scientists, Geologists, Hydrogeologists, GIS Analysts, and Groundwater Experts.</p>
            <div className="btn-group-animated">
              <button onClick={() => navigate("/about")} className="custom-btn">Know More</button>
              <button onClick={() => navigate("/contact")} className="custom-btn">Contact Us</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item style={carouselStyle}>
          <img className="d-block w-100" src={img3} alt="Third slide" style={imageStyle} />
          <div className="custom-caption">
            <h3>Precision & Innovation</h3>
            <p>From advanced GIS analysis to on-site technical expertise, our team ensures accuracy and efficiency in every project.</p>
            <div className="btn-group-animated">
              <button onClick={() => navigate("/about")} className="custom-btn">Know More</button>
              <button onClick={() => navigate("/contact")} className="custom-btn">Contact Us</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroCarousel;
