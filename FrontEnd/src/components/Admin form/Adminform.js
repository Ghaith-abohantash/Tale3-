import React, { useState, useEffect } from 'react';
import './AdminForm.css';
import axios from 'axios';

function AdminForm() {
    const [buses, setBuses] = useState([]);
    const [formInputs, setFormInputs] = useState({
        busNumber: '',
        From: '',
        to: '',
        carry: '30 Passenger',
        arrivalTime: '',
        departureTime: '',
        cost: ''
    });

    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const response = await axios.get('/api/bus');
            setBuses(response.data);
        } catch (error) {
            console.error('Error fetching buses:', error);
        }
    };

    const addBus = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/bus', formInputs);
            fetchBuses();
            setFormInputs({
                busNumber: '',
                From: '',
                to: '',
                carry: '30 Passenger',
                arrivalTime: '',
                departureTime: '',
                cost: ''
            });
        } catch (error) {
            console.error('Error adding bus:', error);
        }
    };

    const deleteBus = async (id) => {
        try {
            await axios.delete(`/api/bus/${id}`);
            fetchBuses();
        } catch (error) {
            console.error('Error deleting bus:', error);
        }
    };

    const editBus = (bus) => {
        setFormInputs(bus);
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormInputs((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div>
            <form id="busForm" onSubmit={addBus}>
                <label htmlFor="busNumber">Bus Number</label><br />
                <input type="text" id="busNumber" value={formInputs.busNumber} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="From">From</label><br />
                <input type="text" id="From" value={formInputs.From} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="to">To</label><br />
                <input type="text" id="to" value={formInputs.to} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="carry">Passengers carry</label><br />
                <select id="carry" value={formInputs.carry} required onChange={handleInputChange}>
                    <option value="30 Passenger">30 Passenger</option>
                    <option value="50 Passenger">50 Passenger</option>
                </select><br /><br />
                <label htmlFor="arrivalTime">Arrival Time</label><br />
                <input type="time" id="arrivalTime" value={formInputs.arrivalTime} onChange={handleInputChange} /><br /><br />
                <label htmlFor="departureTime">Departure Time</label><br />
                <input type="time" id="departureTime" value={formInputs.departureTime} onChange={handleInputChange} /><br /><br />
                <label htmlFor="cost">Cost</label><br />
                <input type="number" min="0" id="cost" value={formInputs.cost} required onChange={handleInputChange} /><br /><br />
                <button type="submit">Add Bus</button>
            </form>
            <table id="busTable">
                <thead>
                    <tr>
                        <th>Bus Number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Carry</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                        <th>Cost</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus) => (
                        <tr key={bus._id}>
                            <td>{bus.busNumber}</td>
                            <td>{bus.From}</td>
                            <td>{bus.to}</td>
                            <td>{bus.carry}</td>
                            <td>{bus.arrivalTime}</td>
                            <td>{bus.departureTime}</td>
                            <td>{bus.cost}</td>
                            <td><button onClick={() => deleteBus(bus._id)}>Delete</button></td>
                            <td><button onClick={() => editBus(bus)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminForm;
