// src/components/RainWaterHarvesting.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img01 from "../assets/pic1 Rainwater harvesting.jpg";
import img02 from "../assets/pic01-lnct.jpg"; // <-- replace with your own image

const RainWaterHarvesting = () => {
  return (
    <div className="rainwater-page">
      {/* Page Heading */}
      <h2 className="page-heading text-center text-primary fw-bold">
        Rain Water Harvesting
      </h2>

      {/* Top Image Section */}
      <div className="image-container">
        <img
          src={img01}
          alt="Rain Water Harvesting"
          className="img-fluid top-image"
        />
        <img
          src={img02}
          alt="Rain Water Harvesting"
          className="img-fluid top-image"
        />
      </div>
     

      {/* Content Section */}
      <div className="container content-section shadow-lg p-4 my-5 bg-white rounded">
        <p className="text-secondary">
          <strong>Rain Water Harvesting (RWH)</strong> is the practice of
          collecting and storing rainwater from rooftops, paved surfaces, or
          open catchment areas for later use. This sustainable approach helps
          reduce dependency on groundwater and promotes efficient utilization of
          natural rainfall.
        </p>
        <p className="text-secondary">
          The harvested water can be stored in tanks for direct use or diverted
          into recharge pits, trenches, and wells to replenish groundwater
          levels. Effective rainwater harvesting systems typically include
          <em> catchment areas, conveyance systems, first-flush arrangements,
          and filtration units</em> to ensure water quality.
        </p>
        <p className="text-secondary">
          <strong>Benefits of Rain Water Harvesting</strong> include water
          conservation, reduced urban flooding, improved groundwater recharge,
          and enhanced water availability for drinking, irrigation, and
          industrial purposes. In drought-prone regions, it acts as a reliable
          backup water source.
        </p>
        <p className="text-secondary">
          The design and implementation of RWH systems depend on factors such as
          rainfall patterns, catchment surface area, soil type, and intended use
          of water. With proper planning, rainwater harvesting can significantly
          contribute to sustainable water management and environmental
          protection.
        </p>
        <p className="text-secondary mb-0">
          By adopting rainwater harvesting techniques, communities can secure
          water resources, minimize water scarcity, and move towards a more
          sustainable and resilient future.
        </p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .rainwater-page {
          background-color: #f9fafc;
          margin-top: 70px;
          padding-top: 20px;
        }
        .page-heading {
          font-size: 2.2rem;
          margin-bottom: 20px;
        }
        .image-container {
      display:flex;
      justify-content: center;
      align-items: center;
      
        }
        .top-image {
          width: 60%;
          margin: auto;
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

export default RainWaterHarvesting;
