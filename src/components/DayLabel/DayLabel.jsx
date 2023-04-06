import './DayLabel.css'

export default function DayLabel({ dayType, key }) {
        
    function selectDay() {
        let boldVals = [0,0,0,0]
        dayType.setBold(boldVals)
        boldVals[dayType.key] = 1
        dayType.setBold(boldVals)

        dayType.setColor(dayType.color)
    }

  return (
    <>
      <div className={dayType.bold ? 'day-label-card-bold' : 'day-label-card'} id={dayType.color} onClick={selectDay}>
        {dayType.day}
      </div>
    </>
  );
}
