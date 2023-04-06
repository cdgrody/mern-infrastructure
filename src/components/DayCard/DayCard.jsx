import { useState } from 'react';
import './DayCard.css'

export default function DayCard({ dateObj, key }) {

    const [dayColor, setDayColor] = useState(dateObj.dayColor)

    function changeColor() {
        setDayColor(dateObj.colorState)
    }

  return (
    <>
      <div className="day-card" id={dayColor} onClick={changeColor}>
        <div className="day-name">{dateObj.day}</div>
        <div className="day-idx">{dateObj.idx}</div>
      </div>
    </>
  );
}
