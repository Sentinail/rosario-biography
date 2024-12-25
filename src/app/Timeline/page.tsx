function Timeline() {
    const events = [
      { year: 1930, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { year: 1948, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { year: 1952, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { year: 1955, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { year: 1970, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { year: 1990, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { year: 2010, event: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ]
  
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-amber-800 text-center font-serif">Life's Journey</h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border border-amber-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
              <span className="text-2xl font-semibold mr-4 text-amber-700">{event.year}</span>
              <span className="text-stone-700">{event.event}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Timeline
  
  