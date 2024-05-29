import BusScheduleTable from '../components/Busschedule/schedule';




const Schedulepage = ()=>{
    const buses = [
        {
          destination: 'الجامعة القديمة',
          ticketPrice: 3,
          passengerCount: 10,
          departureTime: 4
        },
        {
          destination: 'الاكاديمية',
          ticketPrice: 4,
          passengerCount: 5,
          departureTime:  5 
        },
        {
          destination: 'الاكاديمية',
          ticketPrice: 4,
          passengerCount: 8,
          departureTime: 5
        }
      ];
return(
    <>
<BusScheduleTable buses={buses} />
</>
)
}
export default Schedulepage;
