const express = require("express");

const HOST = "0.0.0.0";
const PORT = 3000;

const app = express();
app.get('/aedra', (req, res) => {
  res.json({
    "aedra": [
      "Akatosh",
      "Arkay",
      "Dibella",
      "Julianos",
      "Kynareth",
      "Mara",
      "Stendarr",
      "Zenithar",
      "Talos",
    ]
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);