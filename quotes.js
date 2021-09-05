const quotes=[
  {
    quote: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.",
    author: "-L 론허바드"
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "-앙드레 말로"
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "–제임스 딘"
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "-나폴레옹"
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "-이소룡"
  },
  {
    quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다.",
    author: "-세르반테스"
  },
  {
    quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
    author: "–헬렌켈러"
  },
  {
    quote: "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
    author: "-루소"
  },
  {
    quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "–탈무드"
  },
  {
    quote: "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다. 단 하루면 인간적인 모든 것을 멸망시킬수도 다시 소생시킬수도 있다.",
    author: "-소포클레스"
  }
  ];

  const quote = document.querySelector("#quote p:first-child")
  const author = document.querySelector("#quote p:last-child")

  const selectedQuote = quotes[Math.floor( Math.random() * quotes.length )]
  quote.innerText = selectedQuote.quote
  author.innerText = selectedQuote.author