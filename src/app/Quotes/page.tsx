function Quotes() {
    const quotes = [
      "Love is not about how much you say 'I love you,' but how much you can prove that it's true.",
      "The secret to a long life is to stay busy, get plenty of exercise, and don't drink too much. Then again, don't drink too little.",
      "Family is not an important thing. It's everything.",
      "The best way to predict your future is to create it.",
    ]
  
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-amber-800 text-center font-serif">Words of Wisdom</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <div key={index} className="border border-amber-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <blockquote className="italic text-stone-700">"{quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Quotes
  
  