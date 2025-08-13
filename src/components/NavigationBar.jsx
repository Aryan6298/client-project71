import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-main.jpg';
import { IoMdArrowDropdown } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavigationBarBootstrap = () => {
  const [marginTop, setMarginTop] = useState('30px');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const collapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (window.innerWidth < 992 && collapseRef.current) {
      const bsCollapse = window.bootstrap && window.bootstrap.Collapse
        ? window.bootstrap.Collapse
        : window.Collapse;
      if (bsCollapse) {
        new bsCollapse(collapseRef.current, { toggle: false }).hide();
      } else if (collapseRef.current.classList.contains('show')) {
        collapseRef.current.classList.remove('show');
      }
    }
    setMobileDropdownOpen(false);
  };

  const handleDropdownToggle = (e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      setMobileDropdownOpen((open) => !open);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setMarginTop('30px');
      } else {
        setMarginTop('0px');
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .logo-img {
          width: 3.2rem;
          height: 3.2rem;
          object-fit: cover;
          box-shadow: 0 0.13rem 0.5rem rgba(0, 0, 0, 0.07);
        }

        .brand-title {
          font-size: 1.3rem;
          letter-spacing: 0.5px;
          color: #1D2BAA;
          line-height: 1.2;
        }

        .tagline {
          font-size: 0.9rem;
          margin-top: 0.1rem;
        }

        /* Responsive company name size for mobile */
        @media (max-width: 576px) {
          .brand-title {
            font-size: 0.9rem;
            white-space: normal;
            max-width: 200px;
          }
          .tagline {
            font-size: 0.7rem;
          }
        }

        .nav-link {
          font-weight: 500;
          color: #1E90FF; /* Dodger Blue */
          position: relative;
          font-size: 1.15rem;
          transition: color 0.2s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #63B3ED; /* Soft Sky Blue */
          left: 0;
          bottom: 0;
          transform: scaleX(0);
          transition: transform 0.3s ease, background-color 0.3s ease;
          transform-origin: center;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        /* Active link styles */
        .nav-link.active {
          color: rgb(67, 91, 222) !important;
        }
        .nav-link.active::after {
          background-color: rgb(67, 91, 222) !important;
          transform: scaleX(1);
        }
        .nav-link.active:hover {
          color: rgb(67, 91, 222);
        }
        .nav-link.active:hover::after {
          background-color: rgb(67, 91, 222);
        }

        .nav-link:hover {
          color: rgb(67, 91, 222);
        }

        .dropdown-menu {
          border-radius: 8px;
          border: 1px solid #f3e6e0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
          opacity: 0;
          transform: translateY(10px) scaleY(0.98);
          transition: opacity 0.35s, transform 0.35s;
          display: block;
          pointer-events: none;
        }

        .nav-item.dropdown.show .dropdown-menu {
          opacity: 1;
          transform: translateY(0) scaleY(1);
          pointer-events: auto;
        }

        .dropdown-item:hover {
          background-color: rgb(20, 128, 205);
          color: rgb(255, 255, 255);
          font-weight: 600;
        }

        .dropdown-icon {
          transition: transform 0.3s ease;
        }

        .nav-dropdown-combo:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .nav-item.dropdown:hover .dropdown-menu {
          opacity: 1;
          transform: translateY(0) scaleY(1);
          pointer-events: auto;
          display: block;
        }

        .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s, opacity 0.25s;
        }

        .mobile-dropdown.open {
          max-height: 400px;
          opacity: 1;
        }

        @media (min-width: 992px) {
          .mobile-dropdown {
            display: none !important;
          }
        }

        .nav-dropdown-combo {
          position: relative;
        }

        .dropdown-toggle::after {
          display: none !important;
        }

        .nav-dropdown-combo::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: #63B3ED;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: center;
        }

        .nav-dropdown-combo:hover::after {
          transform: scaleX(1);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top" style={{ zIndex: 1090, marginTop }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-start gap-2" to="/" onClick={handleNavLinkClick}>
            <img src={logo} alt="Logo" className="rounded logo-img" />
            <div className="d-flex flex-column align-items-start">
              <span className="fw-bold brand-title">SYSTEM ORGANIZATION OF MANAGEMENT</span>
              <small className="text-success fst-italic tagline">"Your Partner for Sustainable Development"</small>
            </div>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar" ref={collapseRef}>
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item"><NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
              <li className="nav-item dropdown">
                <div className="nav-dropdown-combo d-flex align-items-center position-relative">
                  <NavLink className="nav-link d-flex align-items-center gap-1" to="/programs" onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault(); setMobileDropdownOpen(!mobileDropdownOpen);
                    } else {
                      handleNavLinkClick();
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                    }
                  }}>Services</NavLink>
                  <span className="dropdown-toggle d-flex align-items-center" role="button" onClick={handleDropdownToggle}>
                    <IoMdArrowDropdown className="dropdown-icon" style={{ color: '#1E90FF', transform: mobileDropdownOpen ? 'rotate(180deg)' : undefined }} />
                  </span>
                </div>
                <ul className={`mobile-dropdown dropdown-menu${mobileDropdownOpen ? ' open' : ''} d-lg-none`}>
                  <li><NavLink className="dropdown-item" to="/programs#capacity" onClick={handleNavLinkClick}>Capacity Building</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#carbon" onClick={handleNavLinkClick}>Carbon Footprint</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#livelihood" onClick={handleNavLinkClick}>Livelihood</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#cleanup" onClick={handleNavLinkClick}>Clean-Up Drives</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#treeplantation" onClick={handleNavLinkClick}>Tree Plantation</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#wastemanagement" onClick={handleNavLinkClick}>Waste Management</NavLink></li>
                </ul>
                <ul className="dropdown-menu d-none d-lg-block">
                  <li><NavLink className="dropdown-item" to="/programs#capacity" onClick={handleNavLinkClick}>Capacity Building</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#carbon" onClick={handleNavLinkClick}>Carbon Footprint</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#livelihood" onClick={handleNavLinkClick}>Livelihood</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#cleanup" onClick={handleNavLinkClick}>Clean-Up Drives</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#treeplantation" onClick={handleNavLinkClick}>Tree Plantation</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#wastemanagement" onClick={handleNavLinkClick}>Waste Management</NavLink></li>
                </ul>
              </li>
              <li className="nav-item"><NavLink className="nav-link" to="/instruments" onClick={handleNavLinkClick}>Instruments</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>About Us</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/projects" onClick={handleNavLinkClick}>Projects</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/clients" onClick={handleNavLinkClick}>Clients</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBarBootstrap;
