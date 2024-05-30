import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMoneyBillAlt, faChair, faClock } from '@fortawesome/free-solid-svg-icons';
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
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <div>وجهة الباص: {bus.destination}</div>
                            </div>
                        </div>
                        <div className="bus-info">
                            <div className="info-text">
                                <FontAwesomeIcon icon={faMoneyBillAlt} />
                                <div>سعر التذكرة: {bus.price}</div>
                            </div>
                        </div>
                        <div className="bus-info">
                            <div className="info-text">
                                <FontAwesomeIcon icon={faChair} />
                                <div>عدد المقاعد الفارغة: {bus.passengerCount}</div>
                            </div>
                        </div>
                        <div className="bus-info">
                            <div className="info-text">
                                <FontAwesomeIcon icon={faClock} />
                                <div>وقت الإنطلاق: {bus.departureTime}</div>
                            </div>
                        </div>
                        <button>أحجز مقعدك الآن</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusScheduleTable;