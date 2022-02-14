const express = require("express");

const HOST = "0.0.0.0";
const PORT = 4000;

const app = express();
app.get("/daedra", (req, res) => {
  res.json({
    daedra: [
      "Azura",
      "Boethiah",
      "Clavicus Vile",
      "Hermaeus Mora",
      "Hircine",
      "Jyggalag",
      "Malacath",
      "Mehrunes Dagon",
      "Mephala",
      "Meridia",
      "Molag Bal",
      "Namira",
      "Nocturnal",
      "Peryite",
      "Sanguine",
      "Sheogorath",
      "Vaermina",
    ],
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
