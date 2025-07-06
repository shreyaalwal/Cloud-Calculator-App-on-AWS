const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;
  let result = 0;
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  switch (operation) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "Cannot divide by zero"; break;
  }

  res.send(`<h1>Result: ${result}</h1><a href="/">Back</a>`);
});

app.listen(3000, () => console.log("Calculator running on port 3000"));
