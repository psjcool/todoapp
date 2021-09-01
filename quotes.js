const quotes=[
  {
    quote: "He not busy being born is busy dying.",
    author: "Bob Dylan"
  },
  {
    quote: "The supreme irony of life is that hardly anyone gets out of it alive.",
    author: "Robert Heinlein"
  },
  {
    quote: "Dost thou love life? Then do not squander time, for that is the stuff life is made of.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Life is a long lesson in humility.",
    author: "ames M. Barrie"
  },
  {
    quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
    author: "Albert Einstein"
  },
  {
    quote: "Life is like playing a violin in public and learning the instrument as one goes on.",
    author: "Samuel Butler"
  },
  {
    quote: "By nature, men are nearly alike; by practice, they get to be wide apart.",
    author: "Confucius"
  },
  {
    quote: "Security is mostly a superstition. It does not exist in nature.... Life is either a daring adventure or nothing.",
    author: "Helen Keller"
  },
  {
    quote: "Life is a moderately good play with a badly written third act.",
    author: "Truman Capote"
  },
  {
    quote: "Thanks to the Interstate Highway System, it is now possible to travel from coast to coast without seeing anything.",
    author: "Charles Kuralt"
  }
  ];

  const quote = document.querySelector("#quote p:first-child")
  const author = document.querySelector("#quote p:last-child")

  const selectedQuote = quotes[Math.floor( Math.random() * quotes.length )]
  quote.innerText = selectedQuote.quote
  author.innerText = selectedQuote.author
  






  let counter = []

  for(let i = 0 ; i <= 99 ; i++){
    counter.push(Math.floor(Math.random()* 10)) 
    
  }

  function spliter(){
    const zero = counter.filter( (arg) => arg === 0 )
    const one = counter.filter( (arg) => arg === 1 )
    const two = counter.filter( (arg) => arg === 2 )
    const three = counter.filter( (arg) => arg === 3 )
    const four = counter.filter( (arg) => arg === 4 )
    const five = counter.filter( (arg) => arg === 5 )
    const six = counter.filter( (arg) => arg === 6 )
    const seven = counter.filter( (arg) => arg === 7 )
    const eight = counter.filter( (arg) => arg === 8 )
    const nine = counter.filter( (arg) => arg === 9 )
    console.log(zero.length ,one.length, two.length, three.length, four.length, five.length, six.length, seven.length, eight.length, nine.length)
    console.log(zero.length +one.length+ two.length+ three.length+ four.length+ five.length+ six.length+ seven.length+eight.length+nine.length)   
  }

  // spliter()