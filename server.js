const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

app.get("/api/quotes/random", (req, res, next) => {
  const random = getRandomElement(quotes);
  res.send({
    quote: { quotes },
  });
});

app.get("/api/quotes", (req, res, next) => {
  const person = req.query.person;
  if (person) {
    const quotePerPerson = quotes.filter((quote) => quote.person === person);
    res.send({ quotes: quotePerPerson });
  } else {
    res.send({ quotes: quotes });
  }
});
