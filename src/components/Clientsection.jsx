import React from "react";
import client1 from "../assets/clients-logos/Abhinav-homes-logo.png";
import client2 from "../assets/clients-logos/Anik-milks-pvt-ltd-logo.jpg";
import client3 from "../assets/clients-logos/Indian-oil-logo.png";
import client4 from "../assets/clients-logos/LNCT-logo.png";
import client5 from "../assets/clients-logos/Nahar-poly-film-logo.jpg";
import client6 from "../assets/clients-logos/Nahar-spinning-mills-logo.png";
import client7 from "../assets/clients-logos/REGAL-HOMES-logo.png";
import client8 from "../assets/clients-logos/Ramco-industries-logo.png";
import client9 from "../assets/clients-logos/Regent-beer-Logo.png";
import client10 from "../assets/clients-logos/Rudraksh-Kingston-logo.jpg";
import client11 from "../assets/clients-logos/choitram-hospital-indore-logo.png";
import client12 from "../assets/clients-logos/himalayan-foods-logo.png";
import client13 from "../assets/clients-logos/jehan-numa-palace-logo.jpg";
import client14 from "../assets/clients-logos/sayaji-hotel-indore-logo.png";

const Clients = () => {
  const clients = [
    client1, client2, client3, client4, client5, client6, client7,
    client8, client9, client10, client11, client12, client13, client14
  ];

  return (
    <>
      <style>{`
        .clients-section {
          background: transparent;
          padding: 50px 0;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
        }

        .clients-title {
          position: relative;
          font-style: italic;
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 40px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: color 0.4s ease;
        }

        .clients-title::after {
          content: "";
          position: absolute;
          width: 0;
          height: 4px;
          left: 50%;
          bottom: -12px;
          background: rgb(79, 217, 255);
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

        .client-box {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 15px;
          padding: 20px;
          margin: 15px auto;
          max-width: 280px;   /* increased width */
          height: 220px;      /* increased height */
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .client-box:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .client-logo {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          border-radius: 8px;
        }

        .clients-row {
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <section className="clients-section">
        <h2 className="clients-title">Our Clients</h2>
        <div className="container">
          <div className="row clients-row text-center">
            {clients.map((client, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-4">
                <div className="client-box">
                  <img src={client} alt={`Client ${idx + 1}`} className="client-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
