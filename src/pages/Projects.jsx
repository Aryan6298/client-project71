// src/components/ProjectsPage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Importing images
import portfolio1 from "../assets/pic1 Rainwater harvesting.jpg";
import portfolio2 from "../assets/pic02-lnct.jpg";
import portfolio3 from "../assets/pic03 resistivity survey.jpg";
import portfolio4 from "../assets/pic04 well monitoring.jpg";
import portfolio5 from "../assets/pic05 geological 2d cross section.jpg";
import portfolio6 from "../assets/pic06-gismapping.jpg";
import portfolio7 from "../assets/pic07 Flowmeter installasiton and compliance.jpg";
import portfolio8 from "../assets/pic08 temography survay.jpg";
import portfolio9 from "../assets/pic09 piezometer.jpg";
import portfolio10 from "../assets/pic10 ground water noc.jpg";
import portfolio11 from "../assets/pic11 Water body rejuvenation.jpg";
import portfolio12 from "../assets/pic12 pumping test .jpg";
import portfolio13 from "../assets/pic13 mining plan.jpg";
import portfolio14 from "../assets/pic 14 Training any hydrogeological study.jpg";




const portfolioItems = [
  { image: portfolio1, title: "Rainwater Harvesting" },
  { image: portfolio2, title: "Recharge Structure Design and Construction" },
  { image: portfolio3, title: "Resistivity Survey" },
  { image: portfolio4, title: "Well Monitoring" },
  { image: portfolio5, title: "Geological 2D Cross Sections" },
  { image: portfolio6, title: "GIS Mapping" },
  { image: portfolio7, title: "Flowmeter Installation and Compliance" },
  { image: portfolio8, title: "2D image Survey" },
  { image: portfolio9, title: "Piezometer Installation and Compliance" },
  { image: portfolio10, title: "Groundwater NOC" },
    { image: portfolio11, title: "Water Body Rejuvenation" },
        { image: portfolio12, title: "Pumping Test" },
         { image: portfolio13, title: "Mining Plan" },
         { image: portfolio14, title: "Training any hydrogeological study" },    

    

];

const ProjectsPage = () => {
  return (
    <div className="projects-page container">
      {/* Page Heading */}
      <h2 className="mb-5 text-center fw-bold heading-overlay" data-aos="fade-down">
        Our Projects Portfolio
      </h2>

      {/* Projects Grid */}
      <div className="row g-4"  data-aos="fade-up">
        {portfolioItems.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card project-card shadow-sm h-100">
              <Link to={`/portfolio/${index + 1}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top project-image"
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{index + 1}. {item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internal CSS */}
      <style>{`
      
          /* Blue gradient heading background */
          .heading-overlay {
            display: inline-block;
            background: linear-gradient(90deg, #0056b3, #0099ff);
            padding: 10px 25px;
            border-radius: 10px;
            color: #fff;
            font-weight: bold;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
            box-shadow: 0 4px 15px rgba(0,153,255,0.5);
            transition: transform 0.3s ease;
          }
          .heading-overlay:hover {
            transform: scale(1.05);
          }
        .projects-page {
          margin-top: 90px;
          margin-bottom: 60px;
        }
        .page-heading {
          font-size: 2.4rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.15);
        }
        .project-card {
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #fff;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .project-image {
          height: 220px;
          object-fit: cover;
        }
        .card-title {
          font-size: 1.1rem;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
