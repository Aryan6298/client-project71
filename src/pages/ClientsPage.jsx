import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from '../components/Clientsection';
const ClientsPage = () => {
    return (
        <div style={{backgroundColor: "#002244",marginTop:"50px"}}>           
            
            <Clients />
            

            
        </div>
    );
};
export default ClientsPage;