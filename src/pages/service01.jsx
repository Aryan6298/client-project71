// src/components/RechargeStructure.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img01 from "../assets/pic02-lnct.jpg";

const RechargeStructure = () => {
  return (
    <div className="recharge-page">
      {/* Page Heading */}
      <h2 className="page-heading text-center text-primary fw-bold">
        Recharge Structure Design & Construction
      </h2>

      {/* Top Image Section */}
      <div className="image-container">
        <img
          src={img01} // Replace with your own image
          alt="Recharge Structure"
          className="img-fluid top-image"
        />
      </div>

      {/* Content Section */}
      <div className="container content-section shadow-lg p-4 my-5 bg-white rounded">
        <p className="text-secondary">
          <strong>Recharge structures</strong> are engineered solutions designed
          to conserve and utilize rainwater effectively. These systems collect
          surface runoff and channel it into the ground, replenishing aquifers
          and ensuring sustainable groundwater levels. By implementing such
          structures, water scarcity issues can be minimized, while maintaining
          ecological balance.
        </p>
        <p className="text-secondary">
          The design process involves a thorough <em>survey of soil type,
          topography, rainfall patterns, and existing groundwater levels</em>.
          Based on this data, suitable structures like recharge wells,
          percolation tanks, check dams, and contour trenches are planned. The
          objective is to maximize infiltration while preventing waterlogging or
          surface erosion.
        </p>
        <p className="text-secondary">
          <strong>Construction techniques</strong> vary depending on site
          conditions. Proper selection of materials such as gravel, sand, and
          concrete ensures long-term durability. Additionally, filter chambers
          are often included to prevent contamination of groundwater during the
          recharge process.
        </p>
        <p className="text-secondary">
          Well-designed recharge structures provide multiple benefits: they
          improve soil moisture, enhance agricultural productivity, support
          biodiversity, and reduce dependency on external water sources. In
          urban areas, they also help mitigate flooding and promote sustainable
          water management practices.
        </p>
        <p className="text-secondary mb-0">
          Through scientific survey, careful planning, and quality construction,
          recharge structures become vital assets in ensuring water security for
          communities and ecosystems.
        </p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .recharge-page {
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
          height: 75vh;
          object-fit: cover; /* Prevents cropping */
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

export default RechargeStructure;
