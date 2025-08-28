import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crousal from '../components/Crousal';
import Clients from '../components/Clientmarque';
import ServicesPage from '../components/Servicetable';
import ExperienceSection from '../components/Experiencesection';
import Reviewsection from '../components/Reviewsection';
const Home = () => {
    return (
        <div>           
            <Crousal />
            <ExperienceSection />
            <Clients />
            <ServicesPage />
            <Reviewsection />
        </div>
    );
};
export default Home;