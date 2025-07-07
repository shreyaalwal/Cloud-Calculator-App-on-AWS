const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Route to serve the calculator UI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Calculation route
app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;

  switch (operation) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Cannot divide by zero'; break;
    default: result = 'Invalid operation';
  }

  res.send(`<h1>Result: ${result}</h1><a href="/">Back</a>`);
});

app.listen(PORT, () => {
  console.log(`Calculator app listening on port ${PORT}`);
});

