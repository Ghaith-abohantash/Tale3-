import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Adminform.css';

function AdminForm() {
    const [buses, setBuses] = useState([]);
    const [formInputs, setFormInputs] = useState({
        busID: '',
        origin: '',
        destination: '',
        passengerCount: '30 Passenger',
        arrivalTime: '',
        departureTime: '',
        cost: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        // Fetch buses from the backend on component mount
        axios.get('http://localhost:4000/api/buses')
            .then(response => setBuses(response.data))
            .catch(error => console.error('Error fetching buses:', error));
    }, []);

    const addBus = (event) => {
        event.preventDefault();
        // Add a new bus
        axios.post('http://localhost:4000/api/buses', formInputs)
            .then(response => {
                setBuses([...buses, response.data]);
                resetForm();
            })
            .catch(error => console.error('Error adding bus:', error));
    };

    const deleteBus = (index) => {
        axios.delete(`http://localhost:4000/api/buses/${buses[index]._id}`)
            .then(() => {
                const newBuses = [...buses];
                newBuses.splice(index, 1);
                setBuses(newBuses);
            })
            .catch(error => console.error('Error deleting bus:', error));
    };

    const editBus = (index) => {
        setFormInputs(buses[index]);
        setEditIndex(index);
    };

    const handleInputChange = (event) => {
        setFormInputs({
            ...formInputs,
            [event.target.id]: event.target.value
        });
    };

    const resetForm = () => {
        setFormInputs({
            busID: '',
            origin: '',
            destination: '',
            passengerCount: '30 Passenger',
            arrivalTime: '',
            departureTime: '',
            cost: ''
        });
        setEditIndex(null);
    };

    return (
        <div className="all">
            <form id="Form" onSubmit={addBus}>
                <label htmlFor="busID"><b>Bus ID</b></label><br />
                <input type="text" id="busID" value={formInputs.busID} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="origin"><i>From</i></label><br />
                <input type="text" id="origin" value={formInputs.origin} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="destination"><i>To</i></label><br />
                <input type="text" id="destination" value={formInputs.destination} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="passengerCount">Passengers passengerCount</label><br />
                <select id="passengerCount" value={formInputs.passengerCount} required onChange={handleInputChange}>
                    <option value="30 Passenger">30 Passenger</option>
                    <option value="50 Passenger">50 Passenger</option>
                </select><br /><br />
                <label htmlFor="arrivalTime">Bus arrival time:</label><br />
                <input type="time" id="arrivalTime" value={formInputs.arrivalTime} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="departureTime">Bus Departure time:</label><br />
                <input type="time" id="departureTime" value={formInputs.departureTime} required onChange={handleInputChange} /><br /><br />
                <label htmlFor="cost">Cost</label><br />
                <input type="number" min="0" id="cost" value={formInputs.price} required onChange={handleInputChange} /><br /><br />
                <button type="submit">{editIndex === null ? 'Add Bus' : 'Update Bus'}</button>
                {editIndex !== null && <button type="button" onClick={resetForm}>Cancel Edit</button>}
            </form>
            <table id="busTable">
                <thead>
                <tr>
                    <th><b>Bus ID</b></th>
                    <th><i>From</i></th>
                    <th>To</th>
                    <th>passengerCount</th>
                    <th>Arrives at</th>
                    <th>Departure at</th>
                    <th>Cost</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {buses.map((bus, index) => (
                    <tr key={index}>
                        <td>{bus.busID}</td>
                        <td>{bus.origin}</td>
                        <td>{bus.destination}</td>
                        <td>{bus.passengerCount}</td>
                        <td>{bus.arrivalTime}</td>
                        <td>{bus.departureTime}</td>
                        <td>{bus.price}</td>
                        <td><button onClick={() => deleteBus(index)}>Delete</button></td>
                        <td><button onClick={() => editBus(index)}>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminForm;
