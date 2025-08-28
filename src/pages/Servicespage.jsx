// src/pages/Services.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Import images (replace with your actual images)
import rechargeImg from "../assets/pic02-lnct.jpg";
import resistivityImg from "../assets/pic03 resistivity survey.jpg";
import wellMonitoringImg from "../assets/pic04 well monitoring.jpg";
import pumpingTestImg from "../assets/pic12 pumping test .jpg";
import rainwaterImg from "../assets/pic1 Rainwater harvesting.jpg"; // <-- New image

const Services = () => {
  const services = [
    {
      title: "Recharge Structure",
      image: rechargeImg,
      description:
        "Engineered systems to conserve rainwater, replenish aquifers, and ensure sustainable groundwater levels.",
      link: "/recharge-structure",
    },
    {
      title: "Resistivity Survey",
      image: resistivityImg,
      description:
        "A geophysical method to analyze subsurface conditions, locate aquifers, and assess groundwater potential.",
      link: "/resistivity-survey",
    },
    {
      title: "Well Monitoring",
      image: wellMonitoringImg,
      description:
        "Regular observation of water levels and quality to ensure long-term groundwater and thus leads to sustainability.",
      link: "/well-monitoring",
    },
    {
      title: "Pumping Test",
      image: pumpingTestImg,
      description:
        "A scientific method to determine aquifer properties, yield, and sustainable groundwater extraction rates.",
      link: "/pumping-test",
    },
    {
      title: "Rain Water Harvesting",
      image: rainwaterImg,
      description:
        "The collection and storage of rainwater for future use, reducing dependency on groundwater and supporting sustainability.",
      link: "/rainwater-harvesting",
    },
  ];

  return (
    <div className="services-page py-5">
      <div className="container">
        <h2
          className="mb-5 text-center fw-bold heading-overlay"
          data-aos="fade-down"
        >
          Our Services
        </h2>

        <div className="row g-4" data-aos="fade-up">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 d-flex justify-content-center"
            >
              <div
                className="card h-100 shadow-sm border-0 rounded-4"
                style={{ width: "18rem" }}
              >
                <img
                  src={service.image}
                  className="card-img-top rounded-top-4"
                  alt={service.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-dark">
                    {service.title}
                  </h5>
                  <p className="card-text text-secondary">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link to={service.link} className="btn btn-primary w-100">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .heading-overlay {
          display: inline-block;
          background: linear-gradient(90deg, #0056b3, #0099ff);
          padding: 10px 25px;
          border-radius: 10px;
          margin-left: 55px;
          color: #fff;
          font-weight: bold;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
          box-shadow: 0 4px 15px rgba(0,153,255,0.5);
          transition: transform 0.3s ease;
        }
        .heading-overlay:hover {
          transform: scale(1.05);
        }
        .services-page {
          margin-top: 70px;
          min-height: 100vh;
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

export default Services;
