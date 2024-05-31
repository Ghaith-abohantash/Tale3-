import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMoneyBillAlt, faChair, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


import './schedule.css';

const BusScheduleTable = ({ buses }) => {
  return (
    <div className="S-table">
      <div className="sschedule-table">
        <div className="Name">
          <h1>جدول الحافلات</h1>
        </div>
        {buses.map((bus, index) => (
          <div key={index} className="sbus-row">
            <div className="sbus-info">
              <div className="info-text">
                <div>وجهة الباص: {bus.destination}</div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />``
              </div>
            </div>
            <div className="bus-info">
              <div className="info-text">
                <div>سعر التذكرة: {bus.ticketPrice}</div>
                <FontAwesomeIcon icon={faMoneyBillAlt} />
              </div>
            </div>
            <div className="bus-info">
              <div className="info-text">
                <div>عدد المقاعد الفارغة: {bus.passengerCount}</div>
                <FontAwesomeIcon icon={faChair} />
              </div>
            </div>
            
            <div className="bus-info">
              <div className="info-text">
                <div>وقت الإنطلاق: {bus.departureTime}</div>
                <FontAwesomeIcon icon={faClock} />
              </div>
            </div>
            <Link  to="/booking" className="S-link"> أحجز الأن</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusScheduleTable;
