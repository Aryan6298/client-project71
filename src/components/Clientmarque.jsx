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

  // Duplicate array so it loops seamlessly
  const marqueeClients = [...clients, ...clients];

  return (
    <>
      <style>{`
        .clients-section {
          background: transparent;
          padding: 40px 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          overflow: hidden;
          position: relative;
        }

        .clients-title {
          text-align: center;
          font-style: italic;
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 30px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
          color: white;
        }

        .marquee {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .client-box {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 15px;
          padding: 20px;
          margin: 0 20px;
          width: 220px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .client-box:hover {
          transform: scale(1.05);
        }

        .client-logo {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          border-radius: 8px;
        }
      `}</style>

      <section className="clients-section">
        <h2 className="clients-title">Our Clients</h2>
        <div className="marquee">
          {marqueeClients.map((client, idx) => (
            <div key={idx} className="client-box">
              <img src={client} alt={`Client ${idx + 1}`} className="client-logo" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
