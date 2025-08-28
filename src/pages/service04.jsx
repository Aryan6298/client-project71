// src/components/WellMonitoring.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img01 from "../assets/pic04 well monitoring.jpg"; // <-- Replace with your actual image

const WellMonitoring = () => {
  return (
    <div className="well-monitoring-page">
      {/* Page Heading */}
      <h2 className="page-heading text-center text-primary fw-bold">
        Well Monitoring
      </h2>

      {/* Top Image Section */}
      <div className="image-container">
        <img
          src={img01}
          alt="Well Monitoring"
          className="img-fluid top-image"
        />
      </div>

      {/* Content Section */}
      <div className="container content-section shadow-lg p-4 my-5 bg-white rounded">
        <p className="text-secondary">
          <strong>Well monitoring</strong> is a crucial process for tracking and
          managing groundwater resources. By regularly observing water levels,
          quality, and recharge rates, it ensures sustainable utilization and
          protection of aquifers.
        </p>
        <p className="text-secondary">
          Monitoring involves the use of <em>piezometers, observation wells, and
          digital sensors</em> to record fluctuations in groundwater levels over
          time. These measurements help identify seasonal variations, recharge
          efficiency, and the impact of pumping or rainfall.
        </p>
        <p className="text-secondary">
          Water quality testing is also an important component of well
          monitoring. Parameters like <strong>pH, salinity, turbidity, and
          contamination levels</strong> are regularly checked to ensure the
          water remains safe for agricultural, domestic, and industrial use.
        </p>
        <p className="text-secondary">
          Data collected from well monitoring is analyzed and visualized through
          graphs and hydrogeological models. This information supports{" "}
          <strong>groundwater management, drought prediction, and planning for
          recharge structures</strong>.
        </p>
        <p className="text-secondary mb-0">
          With continuous and scientific monitoring, communities can maintain
          groundwater sustainability, prevent over-extraction, and safeguard
          water security for the future.
        </p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .well-monitoring-page {
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
          height: 60vh;
          object-fit: contain; 
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

export default WellMonitoring;
