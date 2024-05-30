import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusScheduleTable from '../components/Busschedule/schedule';

const Schedulepage = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/buses') // Ensure this URL matches your backend
            .then(response => {
                setBuses(response.data);
            })
            .catch(error => {
                console.error('Error fetching buses:', error);
            });
    }, []);

    return (
        <>
            <BusScheduleTable buses={buses} />
        </>
    );
};

export default Schedulepage;
