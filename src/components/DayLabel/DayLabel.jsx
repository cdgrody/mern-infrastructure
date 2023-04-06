import './DayLabel.css'

export default function DayLabel({ dayType, key }) {
        
  return (
    <>
      <div className="day-label-card" id={dayType.color}>
        {dayType.day}
      </div>
    </>
  );
}
