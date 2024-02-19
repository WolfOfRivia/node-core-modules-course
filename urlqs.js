// Looking at the URL and QueryString modules
const url = require('url');
const querystring = require('querystring');

// url.parse() (Returns an object on information about the URL)
const myURL = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myURL);

// url.format() (Creating an object and returning a URL string, opposite of what parse was doing)
const myURL2 = url.format({
  protocol: 'http',
  host: 'www.example.com',
  pathname: 'listing',
  query: {
    id: 1000,
    premium: true
  }
});

console.log(myURL2); // http://www.example.com/listing?id=1000&premium=true

// querystring.parse();
const myQs = 'year=2023&month=january&day=20';
const q = querystring.parse(myQs);

console.log(q); // returns an object { year: '2023', month: 'january', day: '20' }
// Get a single value
console.log(q.month) // january

// Using stringify to convert an object into a querystring (querystring.stringify())
const myQs2 = querystring.stringify({
  year: 2023,
  month: 'January',
  day: 20
});

console.log(myQs2); // year=2023&month=January&day=20
