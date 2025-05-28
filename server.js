const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const globalLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 500, // 100 requêtes max par IP
  standardHeaders: true, // Renvoie les headers RateLimit dans la réponse
  legacyHeaders: false, // Désactive les X-RateLimit-* headers
  message: {
    status: 429,
    error: "Trop de requêtes — merci de réessayer plus tard.",
  },
});

app.use(globalLimiter);

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
