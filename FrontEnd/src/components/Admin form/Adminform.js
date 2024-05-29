import React, { useState } from 'react';
import './Adminform.css';
function AdminForm() {
    const [buses, setBuses] = useState([]);
    const [formInputs, setFormInputs] = useState({
        busID: '',
        From: '',
        to: '',
        carry: '30 Passenger',
        arrivalTime: '',
        departureTime: '',
        cost: ''
    });

    const addBus = (event) => {
        event.preventDefault();
        setBuses([...buses, formInputs]);
        setFormInputs({
            busID: '',
            From: '',
            to: '',
            carry: '',
            arrivalTime: '',
            departureTime: '',
            cost: ''
        });
    };

    const deleteBus = (index) => {
        const newBuses = [...buses];
        newBuses.splice(index, 1);
        setBuses(newBuses);
    };

    const editBus = (index) => {
        setFormInputs(buses[index]);
    };

    const handleInputChange = (event) => {
        setFormInputs({
            ...formInputs,
            [event.target.id]: event.target.value
        });
    };

    return (
        <div className = "all">
            
            <form id="Form" onSubmit={addBus}>
                <label htmlFor="busID"><b>Bus ID</b></label><br />
                <input type="text" id="busID" required onChange={handleInputChange} /><br /><br />
                <label htmlFor="From"><i>From</i></label><br />
                <input type="text" id="From" required onChange={handleInputChange} /><br /><br />
                <label htmlFor="to"><i>To</i></label><br />
                <input type="text" id="to" required onChange={handleInputChange} /><br /><br />
                <label htmlFor="carry">Passengers carry</label><br />
                <select id="carry" required onChange={handleInputChange}>
                    <option value="30p">30 Passenger </option>
                    <option value="50p">50 Passenger</option>
                </select>
                <br /><br />
                <label htmlFor="arrivalTime">Bus arrival time:</label><br />
                <input type="time" id="arrivalTime" name="time" onChange={handleInputChange} /><br /><br />
                <label htmlFor="departureTime">Bus Departure time:</label><br />
                <input type="time" id="departureTime" name="time" onChange={handleInputChange} /><br /><br />
                <label htmlFor="cost">Cost</label><br />
                <input type="number" min="0" id="cost" required onChange={handleInputChange} /><br /><br />
                <button type="submit">Add Bus</button>
            </form>
            <table id="busTable">
                <thead>
                    <tr>
                        <th><b>Bus ID</b></th>
                        <th><i>From</i></th>
                        <th>To</th>
                        <th>Carry</th>
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
                            <td>{bus.From}</td>
                            <td>{bus.to}</td>
                            <td>{bus.carry}</td>
                            <td>{bus.arrivalTime}</td>
                            <td>{bus.departureTime}</td>
                            <td>{bus.cost}</td>
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