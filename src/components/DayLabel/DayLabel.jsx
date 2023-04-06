import './DayLabel.css'

export default function DayLabel({ dayType, key }) {
        
    function selectDay() {
        dayType.setBold([0,1,0,1])
    }

  return (
    <>
      <div className={dayType.bold ? 'day-label-card-bold' : 'day-label-card'} id={dayType.color} onClick={selectDay}>
        {dayType.day}
      </div>
    </>
  );
}
