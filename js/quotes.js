const quotes = [
  {
    quote: "오늘도  ",
    author: "힘내자",
  },
  {
    quote: "나는",
    author: "할 수 있다.",
  },
  {
    quote: "포기란  ",
    author: "없다",
  },
  {
    quote: "도전하지도 않고  ",
    author: "포기하지마",
  },
  {
    quote: "두드리면  ",
    author: "열 릴 것이다.",
  },
  {
    quote: "해보자  ",
    author: "가보자",
  },
  {
    quote: "넓게 보고  ",
    author: "천천히 가자",
  },
  {
    quote: "오늘도  ",
    author: "고생했어",
  },
  {
    quote: "운동도 하고  ",
    author: "공부도 열심히",
  },
  {
    quote: "축구를 위해  ",
    author: "열심히 하자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
