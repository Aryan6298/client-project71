import React from "react";

const Clients = () => {
  const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"];

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

        .client-box {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 20px 0;
          margin: 10px auto;
          max-width: 140px;
          font-weight: 700;
          font-size: 1.2rem;
          color: #f0f7ff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
          cursor: default;
          user-select: none;
        }

        .client-box:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          color: #002244;
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
              <div key={idx} className="col-6 col-sm-4 col-md-2">
                <div className="client-box">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
