import React, { useState, useEffect } from 'react';
import './clientTable.css';
import { useNavigate } from 'react-router-dom';

const ClientTable = () => {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
   
   
    const userData = JSON.parse(localStorage.getItem("userData"));
    let email = null;
    if (userData) {
      email = userData.email || userData.nameid;
    }
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch(`https://localhost:7244/api/viewClients?userEmail=${email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }

                );
                if (!response.ok) {
                    throw new Error('Failed to fetch clients');
                }

                const data = await response.json();
                setClients(data.clients);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchClients();
    }, []);

    return (
        <>
            <div className='cclient-table-wrap'>
                <div className='cclient-table-head-wrap'>
                    <ul className='cclient-table-head-list'>
                        <li>Name</li>
                        <li>Portfolio value</li>
                        <li>Subscribed on</li>
                        <li>Types of investment done</li>
                    </ul>
                </div>
                {clients.map((client, index) => (
                    <div key={index} className='cclient-table-data-wrap'>
                        <ul className='cclient-table-head-list'>
                            <li>{client.clientName}</li>
                            <li>{client.portfolioValue}</li>
                            <li>{client.subscribedOn}</li>
                            <li>{client.typeOfInvestment}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ClientTable;
