// our connect server
let connect = require('connect');

let app = connect();
const port = 3000;

app.listen(port);
console.log(`Server listening at port: ${port}`);

// hello route
app.use('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World!");
  next();
});

// main route for the root of my website
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!");
  next();
});


