import BusScheduleTable from "./components/Bus schedule/schedule";
import Footer from "./components/Footer/footer";
import LoginForm from "./components/log in form/log";

function App() {
  const buses = [
    { destination: 'الأكاديمية الى الجامعة القديمة', ticketPrice: 2.5 , passengerCount: 20, emptySeats: 10, departureTime: '10:00 ص' },
    { destination: 'الأكاديمية الى المجمع الغربي', ticketPrice: 3, passengerCount: 15, emptySeats: 5, departureTime: '11:00 ص' },
    { destination: 'الأكاديمية إلى الدوار', ticketPrice: 4, passengerCount: 25, emptySeats: 15, departureTime: '12:00 ظ' },
  ];

  return (
    <div className="app">
      
      <BusScheduleTable buses={buses} />
      <Footer/>
    </div>
  );
};

export default App;
