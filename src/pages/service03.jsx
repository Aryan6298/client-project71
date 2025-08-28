// src/components/ResistivitySurvey.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img01 from "../assets/pic03 resistivity survey.jpg"; // <-- Replace with your actual image

const ResistivitySurvey = () => {
  return (
    <div className="resistivity-page">
      {/* Page Heading */}
      <h2 className="page-heading text-center text-primary fw-bold">
        Resistivity Survey
      </h2>

      {/* Top Image Section */}
      <div className="image-container">
        <img
          src={img01}
          alt="Resistivity Survey"
          className="img-fluid top-image"
        />
      </div>

      {/* Content Section */}
      <div className="container content-section shadow-lg p-4 my-5 bg-white rounded">
        <p className="text-secondary">
          <strong>Resistivity survey</strong> is a widely used geophysical
          technique for investigating subsurface conditions by measuring the
          electrical resistance of soil and rock. This method helps in locating
          groundwater, understanding aquifer properties, and identifying suitable
          sites for recharge structures.
        </p>
        <p className="text-secondary">
          The survey is carried out by passing an electrical current into the
          ground through electrodes and measuring the potential difference at
          the surface. The resistivity of subsurface layers depends on{" "}
          <em>moisture content, porosity, mineral composition, and water quality</em>.
        </p>
        <p className="text-secondary">
          Common configurations like <strong>Wenner</strong> and{" "}
          <strong>Schlumberger arrays</strong> are used for field measurements.
          The collected data is then analyzed to estimate the depth and thickness
          of aquifers, soil layers, and rock formations.
        </p>
        <p className="text-secondary">
          This technique is cost-effective, non-destructive, and provides
          reliable information for sustainable groundwater exploration,
          agricultural planning, and environmental studies.
        </p>
        <p className="text-secondary mb-0">
          By combining resistivity surveys with hydrological and geological data,
          communities can make informed decisions for water resource management
          and recharge structure planning.
        </p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .resistivity-page {
          background-color: #f9fafc;
          margin-top: 70px; 
          padding-top: 20px;
        }
        .page-heading {
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        .image-container {
          text-align: center;
        }
        .top-image {
          width: 100%;
          height: 80vh;
          
           
        }
        .content-section {
          border-radius: 16px;
          line-height: 1.7;
          font-size: 1.05rem;
        }
      `}</style>
    </div>
  );
};

export default ResistivitySurvey;
