import React, { useState } from 'react';
import './AdminForm.css';

function AdminForm() {
    const [buses, setBuses] = useState([]);

    const addBus = (event) => {
        event.preventDefault();
        const newBus = {
            busID: event.target.busID.value,
            from: event.target.From.value,
            to: event.target.to.value,
            carry: event.target.carry.value,
            arrivalTime: event.target.arrivalTime.value,
            departureTime: event.target.departureTime.value,
        };
        setBuses([...buses, newBus]);
        event.target.reset();
    };

    const deleteBus = (index) => {
        const newBuses = [...buses];
        newBuses.splice(index, 1);
        setBuses(newBuses);
    };

    const editBus = (index, updatedBus) => {
        const newBuses = [...buses];
        newBuses[index] = updatedBus;
        setBuses(newBuses);
    };

    return (
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AdminForm</title>
  <link rel="stylesheet" href="style.css" />
  <form id="busForm">
    <label htmlFor="busID"><b>Bus ID</b></label><br />
    <input type="text" id="busID" required /><br /><br />
    <label htmlFor="From"><i>From</i></label><br />
    <input type="text" id="From" required /><br /><br />
    <label htmlFor="to"><i>To</i></label><br />
    <input type="text" id="to" required /><br /><br />
    <label htmlFor="carry">Passengers carry</label><br />
    <select id="carry" required>
      <option value="30p">30 Passenger </option>
      <option value="50p">50 Passenger</option>
    </select>
    <br /><br />
    <label htmlFor="arrivalTime">Bus arrival time:</label><br />
    <input type="time" id="arrivalTime" name="time" /><br /><br />
    <label htmlFor="departureTime">Bus Departure time:</label><br />
    <input type="time" id="departureTime" name="time" /><br /><br />
    <button type="button" onclick={addBus}>Add Bus</button>
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
        <th onclick={deleteBus}>Delete</th>
        <th onClick={editBus}>Edit</th>
      </tr>
    </thead>
    <tbody />
  </table>
</div>

    );
}

export default AdminForm;
