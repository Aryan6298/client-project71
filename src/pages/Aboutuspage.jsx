import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg3 from '../assets/crousal-img1.jpg';
import aboutImg1 from '../assets/crousal-img1.jpg';
import aboutImg2 from '../assets/crousal-img1.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showVideo, setShowVideo] = useState(false);
  const [videoDismissed, setVideoDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !showVideo && !videoDismissed) {
        setShowVideo(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showVideo, videoDismissed]);

  return (
    <>
      <style>
        {`
          .pop-hover {
            transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
            filter: brightness(0.92) contrast(0.95);
          }

          .pop-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0,153,255,0.4);
            filter: brightness(1) contrast(1);
          }

          .about-heading {
            font-size: 2.8rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            color: #ffffff;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
            animation: fadeInDown 1.2s ease-out;
          }

          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }

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

          /* Section heading with animated underline */
          .section-heading {
            font-weight: 600;
            font-size: 1.75rem;
            margin-bottom: 1rem;
            color: #ffffff;
            position: relative;
          }
          .section-heading::after {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #00aaff, #66ccff);
            transition: width 0.3s ease;
          }
          .section-heading:hover::after {
            width: 100%;
          }

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #e0f7ff;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          }

          /* Blue-theme text overlay */
          .text-overlay {
            background: linear-gradient(135deg, rgba(0, 45, 85, 0.85), rgba(0, 102, 204, 0.85));
            padding: 20px;
            border-radius: 12px;
            border-left: 5px solid #00aaff;
            box-shadow: 0 4px 20px rgba(0, 102, 204, 0.4);
            transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          }
          .text-overlay:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 25px rgba(0, 153, 255, 0.5);
          }

          /* Floating Video */
          .floating-video {
            position: fixed;
            bottom: 16vh;
            right: 2vw;
            z-index: 9999;
            width: 10%;
            max-width: 320px;
            aspect-ratio: 16 / 9;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            border-radius: 10px;
            overflow: hidden;
            animation: fadeIn 0.5s ease-in-out;
            background: black;
          }
          .floating-video iframe {
            width: 100%;
            height: 100%;
            display: block;
            border: none;
          }
          .close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 22px;
            color: white;
            cursor: pointer;
            z-index: 10;
            user-select: none;
            transition: color 0.3s ease;
          }
          .close-btn:hover {
            color: #ffc107;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .floating-video {
              width: 60vw;
              right: 8vw;
              bottom: 12vh;
            }
          }
          @media (max-width: 400px) {
            .floating-video {
              width: 40vw;
              right: 5vw;
              bottom: 10vh;
            }
          }
        `}
      </style>

      <div className="container py-5 mt-5" style={{ width: '100%' }}>
        <h2 className="mb-5 text-center fw-bold heading-overlay" data-aos="fade-down">
          About Us
        </h2>

        {/* Section 1 */}
        <div className="row align-items-center mb-5" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={aboutImg1} alt="Our Mission" className="img-fluid rounded shadow pop-hover" />
          </div>
          <div className="col-md-6">
            <div className="text-overlay" data-aos="fade-right">
              <h3 className="section-heading">Our Mission</h3>
              <p>
                At SOM, our mission is to deliver sustainable solutions
                in water management and environmental engineering. We strive to
                protect natural resources while offering top-notch technical
                expertise and project execution.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center flex-md-row-reverse" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={aboutImg2} alt="Our Team" className="img-fluid rounded shadow pop-hover" />
          </div>
          <div className="col-md-6">
            <div className="text-overlay" data-aos="fade-left">
              <h3 className="section-heading">Our Team</h3>
              <p>
                Our team comprises highly skilled and experienced professionals, including hydrogeologists, engineers, GIS analysts, environmental scientists, geologists, and technical experts. Together, we deliver a broad spectrum of consultancy services such as groundwater exploration, hydrogeological and geophysical surveys, rainwater harvesting, geotechnical studies, and water resource management. We specialize in GIS-based geo-mapping, flood and stormwater mapping, watershed management, and CGWA compliance. Our collaborative approach ensures sustainable solutions tailored to meet our clients’ environmental and infrastructural needs.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mt-5" data-aos="fade-up">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={aboutImg3} alt="Our Vision" className="img-fluid rounded shadow pop-hover" />
          </div>
          <div className="col-md-6">
            <div className="text-overlay" data-aos="fade-right">
              <h3 className="section-heading">Our Vision</h3>
              <p>
                We envision a future where sustainable water use and responsible environmental practices are the standard, not the exception. Through innovation, integrity, and collaboration, SOM is committed to shaping a cleaner and more resilient planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
