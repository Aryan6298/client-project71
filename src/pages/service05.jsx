// src/components/PumpingTest.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img01 from "../assets/pic12 pumping test .jpg"; // <-- Replace with your actual image

const PumpingTest = () => {
  return (
    <div className="pumping-test-page">
      {/* Page Heading */}
      <h2 className="page-heading text-center text-primary fw-bold">
        Pumping Test
      </h2>

      {/* Top Image Section */}
      <div className="image-container">
        <img
          src={img01}
          alt="Pumping Test"
          className="img-fluid top-image"
        />
      </div>

      {/* Content Section */}
      <div className="container content-section shadow-lg p-4 my-5 bg-white rounded">
        <p className="text-secondary">
          <strong>Pumping test</strong> is a scientific method used to determine
          the hydraulic properties of an aquifer. By pumping water from a well
          and observing changes in water levels in nearby observation wells, the
          test provides valuable data for groundwater management.
        </p>
        <p className="text-secondary">
          The main objectives include estimating{" "}
          <em>aquifer transmissivity, storativity, yield capacity, and
          groundwater recharge potential</em>. These parameters help in
          evaluating whether the aquifer can sustainably support irrigation,
          drinking, or industrial requirements.
        </p>
        <p className="text-secondary">
          Different types of pumping tests are conducted such as{" "}
          <strong>constant rate tests, step-drawdown tests, and recovery tests</strong>. 
          Each test provides insights into well efficiency, aquifer response, and
          long-term sustainability.
        </p>
        <p className="text-secondary">
          Data analysis involves applying methods like <strong>Theis, Cooper-Jacob,
          or Darcy’s Law</strong> to interpret drawdown curves and predict future
          performance of the aquifer system.
        </p>
        <p className="text-secondary mb-0">
          Pumping tests are essential for <strong>designing recharge structures,
          planning groundwater extraction, and preventing over-exploitation</strong>. 
          When combined with resistivity surveys and well monitoring, they provide
          a complete understanding of groundwater dynamics.
        </p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .pumping-test-page {
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
          height: 100vh;
          object-fit: cover; 
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

export default PumpingTest;
