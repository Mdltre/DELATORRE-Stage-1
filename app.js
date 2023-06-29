const http = require('http');

const PORT = 3000;
const FAVORITE_LANGUAGE = 'Python';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`My favorite programming language is ${FAVORITE_LANGUAGE}!\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// to run the program: node app.js