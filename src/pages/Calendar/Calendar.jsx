import DayCard from "../../components/DayCard/DayCard";
import DayLabel from "../../components/DayLabel/DayLabel";
import "./Calendar.css";

export default function Calendar() {
  const days = [
    {
      name: "Sunday",
    },
    {
      name: "Monday",
    },
    {
      name: "Tuesday",
    },
    {
      name: "Wednesday",
    },
    {
      name: "Thursday",
    },
    {
      name: "Friday",
    },
    {
      name: "Saturday",
    },
  ];

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({ length: 28 }, (x, i) => i + 1);
  const dayTypes = [
    {day: 'Holiday', color: 'yellow'}, 
    {day: 'Work', color: 'blue'}, 
    {day: 'Errands', color: 'green'}, 
    {day: 'Sick', color: 'red'}
]

  // Creates an Array of Dates
  const dateObjs = dates.map(
    (date, key) => (date = { day: days[key % 7].name, idx: key + 1 })
  );

  return (
    <>
      <div className="App">
        <div className="react-calendar">
          <h1>React Calendar</h1>
        </div>
        <div className="day-label">
            {dayTypes.map((dayType, idx) => (
            <DayLabel dayType={dayType} key={idx} />
            ))}
        </div>
        <div className="day-card-list">
          {dateObjs.map((dateObj, idx) => (
            <DayCard dateObj={dateObj} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
