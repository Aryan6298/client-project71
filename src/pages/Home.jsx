import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crousal from '../components/Crousal';
import Clients from '../components/Clientmarque';
import ServicesPage from '../components/Servicetable';
const Home = () => {
    return (
        <div>           
            <Crousal />
            <Clients />
            <ServicesPage />

            
        </div>
    );
};
export default Home;