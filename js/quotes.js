const quotes = [
  {
    quote: "What though life conspire to cheat you, Do not sorrow or complain.",
    author: "- Alexander Pushkin -",
  },
  {
    quote: "Youth isn’t always all it’s touted to be.",
    author: "- Lawana Blackwell -",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "- Maya Angelou -",
  },
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "- Zeno -",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "- Lawana Blackwell -",
  },
  {
    quote: "This too shall pass.",
    author: "- Et hoc transibit -",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "- Lilly Pulitzer -",
  },
  {
    quote: "Fall 7 times, stand up 8.",
    author: "- Anonymous -",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "- Michael Jordan -",
  },
  {
    quote:
      "Despite the forecast, live like it’s spring.",
    author: "- Lilly Pulitzer -",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// quotes.length = Array 총합 (굳이 갯수 안샐수있도록)
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
