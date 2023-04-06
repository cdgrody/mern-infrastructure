import './DayCard.css'

export default function DayCard({ dateObj, key }) {
  return (
    <>
      <div className="day-card">
        <div className="day-name">{dateObj.day}</div>
        <div className="day-idx">{dateObj.idx}</div>
      </div>
    </>
  );
}
