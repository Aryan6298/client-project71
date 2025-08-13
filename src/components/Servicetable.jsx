import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import portfolio1 from "../assets/logo-main.jpg";
import portfolio2 from "../assets/logo-main.jpg";
import portfolio3 from "../assets/logo-main.jpg";
import portfolio4 from "../assets/logo-main.jpg";
import portfolio5 from "../assets/logo-main.jpg";
import portfolio6 from "../assets/logo-main.jpg";
import portfolio7 from "../assets/logo-main.jpg";
import portfolio8 from "../assets/logo-main.jpg";
import portfolio9 from "../assets/logo-main.jpg";
import portfolio10 from "../assets/logo-main.jpg";
import portfolio11 from "../assets/logo-main.jpg";
import portfolio12 from "../assets/logo-main.jpg";
import portfolio13 from "../assets/logo-main.jpg";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoDismissed, setVideoDismissed] = useState(false);

  const handleShowClients = () => {
    setShowAllClients(true);
    setTimeout(() => setShowAllClients(false), 4000);
  };

  const handleShowPortfolio = () => {
    setShowAllPortfolio(true);
    setTimeout(() => setShowAllPortfolio(false), 4000);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoDismissed(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !showVideo && !videoDismissed) {
        setShowVideo(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showVideo, videoDismissed]);



  const servicesData = [
    ["1", "Hydrogeological Investigation, Impact Assessment, and Groundwater NOC Compliance for Industry, Infrastructure, and Mining Projects", "Groundwater Management", "Studies underground water systems, assesses impacts, and ensures compliance with CGWA regulations for NOC.", "Industry, Infrastructure, Mining"],
    ["2", "Rainwater Harvesting and Ground Water Recharging (Study, Installation, Pits Construction, and Roof Top Harvesting)", "Water Conservation", "Designs and implements systems to collect and recharge rainwater into the ground, including pits and roof top setups.", "Residential, Commercial, Agriculture"],
    ["3", "Environmental and Water Impact Assessment and Audit", "Environmental Assessment", "Evaluates the environmental and water-related impacts of projects and audits compliance.", "Industry, Infrastructure, Mining"],
    ["4", "Aquifer and Well Hydraulic Testing and Geophysical Survey for Water Resource Assessment (Including Electromagnetic and Groundwater Surveys)", "Groundwater Management", "Tests aquifer performance, conducts geophysical surveys, and assesses water resources using various methods.", "Industry, Agriculture, Research"],
    ["5", "Soil Resistivity Testing Service", "Soil and Water Testing", "Measures soil resistivity to assess subsurface conditions for grounding or water-related projects.", "Infrastructure, Research"],
    ["6", "Recharge Structure Design and Construction (Including Recharge Shaft)", "Water Conservation", "Designs and builds structures like recharge shafts to enhance groundwater replenishment.", "Residential, Commercial, Agriculture"],
    ["7", "Water Body Regeneration, Rejuvenation, and Beautification (Ponds and Bawadi Repairing and Cleaning)", "Environmental Restoration", "Restores and beautifies water bodies like ponds and bawadis through repair and cleaning.", "Community, Environmental Projects"],
    ["8", "DWLR, Flow Meter Supply, Installation, and Remote Display, and Water Level Recording", "Water Monitoring", "Supplies and installs devices to monitor groundwater levels and flow, including remote display systems.", "Industry, Agriculture, Research"],
    ["9", "Borewell Site Selection", "Groundwater Management", "Identifies optimal locations for borewells based on groundwater availability.", "Agriculture, Residential, Industry"],
    ["10", "Drilling, Borehole Logging, Litholog Preparation, and Geotechnical Investigation", "Groundwater Management", "Drills boreholes, logs data, prepares lithologs, and investigates soil properties for water projects.", "Industry, Infrastructure, Agriculture"],
    ["11", "GIS, GPS Survey, Sedimentation Studies through Remote Sensing, and Satellite Data Interpretation", "Survey and Mapping", "Uses GIS, GPS, remote sensing, and satellite data to study sedimentation and map water resources.", "Research, Environmental Projects"],
    ["12", "Water Quality Analysis", "Water Monitoring", "Tests water samples to assess quality and ensure safety for use.", "Industry, Agriculture, Residential"],
    ["13", "Mining Plans", "Mining Support", "Develops plans for mining operations, often including water management strategies.", "Mining"],
    ["14", "Percolation and Soil Infiltration Testing", "Soil and Water Testing", "Measures how water infiltrates soil to assess suitability for recharge or drainage.", "Agriculture, Environmental Projects"]
  ];

  const portfolioItems = [
    { image: portfolio1, title: "Resistivity Survey" },
    { image: portfolio2, title: "Electromagnetic Survey for Ground Water" },
    { image: portfolio3, title: "Lithological 3D Modeling" },
    { image: portfolio4, title: "Hydrogeological Study" },
    { image: portfolio5, title: "Consultancy ETP and STP Works" },
    { image: portfolio6, title: "Resistivity Survey" },
    { image: portfolio7, title: "Geological 2D Cross Sections" },
    { image: portfolio8, title: "Geophysical Investigation Service" },
    { image: portfolio9, title: "Groundwater Survey Services" },
    { image: portfolio10, title: "Recharge Structure Construction" },
    { image: portfolio11, title: "Ground Water Detection Services" },
    { image: portfolio12, title: "Borewell Construction Service" },
    { image: portfolio13, title: "Roof Water Rain Water Harvesting" }
  ];

  const logoStyle = {
    height: "110px",
    margin: "0 8px", // reduced spacing
    objectFit: "contain",
    borderRadius: "15px",
    transition: "transform 0.5s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const portfolioItemStyle = {
    width: "280px",
    margin: "0 20px",
    textAlign: "center",
    transition: "transform 0.4s ease"
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease"
  };

  return (
    <>
      <div className="container my-5">
        <style>{`
          .clients-title {
          position: relative;
          font-style: italic;
          font-size: 2.8rem;
          font-weight: 800;
          color: white;
          text-align: center;
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
          .portfolio-caption {
            margin-top: 10px;
            font-weight: 600;
            color: #d4edda;
            transition: color 0.3s ease;
          }
          .portfolio-image:hover {
            transform: scale(1.08);
            box-shadow: 0 10px 35px rgba(0,0,0,0.4);
          }
          .marquee-logo:hover {
            transform: scale(1.12);
            filter: brightness(1.1);
          }
          .service-table {
            background-color: rgba(255, 255, 255, 0.) !important;
            border-radius: 12px;
            overflow: hidden;
            color: #fff;
          }
          .service-table thead,
          .service-table thead th {
            background-color: rgba(255, 255, 255, 0.6) !important;
            color: black !important;
            font-weight: bold;
            border-color: rgba(255, 255, 255, 0.7) !important;
            background-clip: padding-box;
          }
          .service-table tbody tr:nth-child(even) {
            background-color: rgba(255, 255, 255, 0.8) !important;
          }
          .service-table tbody tr:nth-child(odd) {
            background-color: rgba(255,255,255,0.8) !important;
          }
          .service-table tbody tr:hover {
            background-color: rgba(255, 255, 255, 0.9) !important;
          }
          .service-table td {
            background-color: transparent !important;
            padding: 12px 16px;
            vertical-align: middle;
          }
          .service-table td:nth-child(2) {
            font-weight: 600;
          }
        `}</style>

       

        {/* Services Table */}
        <div className="table-responsive mb-5" data-aos="fade-up">
          <h3 className="clients-title">Our Services</h3>
          <table className="table table-bordered shadow-sm service-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Service Description</th>
                <th>Category</th>
                <th>Purpose</th>
                <th>Sector</th>
              </tr>
            </thead>
            <tbody>
              {servicesData.map((service, index) => (
                <tr key={index}>
                  {service.map((field, i) => (
                    <td key={i}>{field}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Portfolio Section */}
        <div className="mb-5" data-aos="fade-up" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", cursor: 'pointer' }} onClick={handleShowPortfolio}>
          <h3 className="clients-title">Project Portfolio (Click to Expand)</h3>
          {showAllPortfolio ? (
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {portfolioItems.map((item, index) => (
                <div key={index} style={portfolioItemStyle}>
                  <Link to={`/portfolio/${index + 1}`}>
                    <img src={item.image} alt={`Portfolio ${index + 1}`} className="portfolio-image" style={imageStyle} />
                  </Link>
                  <div className="portfolio-caption">{index + 1}. {item.title}</div>
                </div>
              ))}
            </div>
          ) : (
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {portfolioItems.map((item, index) => (
                <div key={index} style={portfolioItemStyle}>
                  <Link to={`/portfolio/${index + 1}`}>
                    <img src={item.image} alt={`Portfolio ${index + 1}`} className="portfolio-image" style={imageStyle} />
                  </Link>
                  <div className="portfolio-caption">{index + 1}. {item.title}</div>
                </div>
              ))}
            </Marquee>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
