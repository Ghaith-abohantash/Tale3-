import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Booking.css";
import ImgBus from "../photo/bus.png";

const BookingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: ""
  });
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [busDetails, setBusDetails] = useState({ destination: " ", price: 3.5 });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/api/Bbook/busDetails")
      .then((response) => setBusDetails(response.data))
      .catch((error) => console.error("Error fetching bus details:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value.replace(/\D/g, "").slice(0, name === "number" ? 16 : 4)
    }));
  };

  const incrementNumberOfPeople = () => setNumberOfPeople((prev) => Math.min(prev + 1, 25));
  const decrementNumberOfPeople = () => setNumberOfPeople((prev) => Math.max(prev - 1, 1));
  const calculateTotal = () => numberOfPeople * busDetails.price;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      paymentMethod,
      name: e.target.name.value, 
      phoneNumber: e.target.phoneNumber.value,
      numberOfPeople,
      cardDetails: paymentMethod === "card" ? cardDetails : null,
      busDestination: busDetails.destination,
      price: busDetails.price
    };

    axios.post("http://localhost:4000/api/BBook/booking", bookingData)
      .then((response) => {
        setFeedbackMessage("Booking successful!");
        console.log("Booking successful:", response.data);
        setPaymentMethod("cash");
        setCardDetails({ number: "", expiry: "", cvc: "" });
        setNumberOfPeople(1);
        e.target.reset();
      })
      .catch((error) => {
        setFeedbackMessage("Error booking. Please try again.");
        console.error("Error booking:", error);
      });
  };

  return (
    <div className="booking">
      <div className="card-container">
        <div className="left-section">
          <img src={ImgBus} alt="bus" />
        </div>
        <div className="right-section">
          <form className="was-validated" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-around mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="paymentCash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                <label className="form-check-label" htmlFor="paymentCash">
                  Cash
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="paymentCard"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <label className="form-check-label" htmlFor="paymentCard">
                  Card
                </label>
              </div>
            </div>

            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name is required"
              pattern="[A-Za-z\s]+"
              required
            />
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              placeholder="Phone number is required"
              pattern="[0-9]+"
              required
            />

            {paymentMethod === "card" && (
              <>
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="number"
                  placeholder="Card number"
                  value={cardDetails.number}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  className="form-control"
                  name="expiry"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-label">CVC</label>
                <input
                  type="text"
                  className="form-control"
                  name="cvc"
                  placeholder="CVC"
                  value={cardDetails.cvc}
                  onChange={handleInputChange}
                  required
                />
              </>
            )}
            <table className="table table-hover mt-3">
              <tbody>
                <tr>
                  <td>Bus Destination</td>
                  <td>{busDetails.destination}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{busDetails.price}</td>
                </tr>
                <tr>
                  <td>Number of People</td>
                  <td>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary" type="button" onClick={decrementNumberOfPeople}>
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control"
                        value={numberOfPeople}
                        readOnly
                      />
                      <button className="btn btn-outline-secondary" type="button" onClick={incrementNumberOfPeople}>
                        +
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>{calculateTotal()}</td>
                </tr>
              </tbody>
            </table> 
            {feedbackMessage && <div className="alert alert-info">{feedbackMessage}</div>}
            <button className="btn btn-primary mt-3" type="submit">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
