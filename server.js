const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/citation/random', (req, res) => {
  fs.readFile('citations.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur serveur' });
    const citations = JSON.parse(data);
    const random = citations[Math.floor(Math.random() * citations.length)];
    res.json(random);
  });
});

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
