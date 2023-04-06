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

  // Creates an Array of Dates
  const dateObjs = dates.map(
    (date, key) => (date = { day: days[key % 7].name, idx: key + 1 })
  );

  return (
    <>
      <div className="App">
        <h1>React Calendar</h1>
      </div>
    </>
  );
}
