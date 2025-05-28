const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const loadAllQuotes = require("./utils/loadQuotes");

const fs = require("fs");
const app = express();
const quotesByType = loadAllQuotes();
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

app.use(express.static("public"));

app.get("/", (req, res) => {
  const htmlPath = __dirname + "/public/index.html";
  fs.readFile(htmlPath, "utf8", (err, html) => {
    if (err) return res.status(500).send("Erreur serveur");

    // ✅ Utiliser quotesByType directement
    const types = Object.keys(quotesByType);
    const scriptInjection = `<script>window.availableTypes = ${JSON.stringify(types)};</script>`;
    const modifiedHtml = html.replace("</body>", `${scriptInjection}\n</body>`);

    res.send(modifiedHtml);
  });
});


app.get("/citation/random", (req, res) => {
  // Fusion de toutes les citations dans un seul tableau
  const allQuotes = Object.values(quotesByType).flat();

  if (!allQuotes.length) {
    return res.status(404).json({ error: "Aucune citation disponible." });
  }

  // Sélection aléatoire
  const types = Object.keys(quotesByType);
  const allQuotesLabeled = types.flatMap((type) =>
    quotesByType[type].map((q) => ({ ...q, type }))
  );
  const randomQuote = allQuotesLabeled[Math.floor(Math.random() * allQuotesLabeled.length)];
  res.json(randomQuote);
});

app.get("/citation/:type", (req, res) => {
  const type = req.params.type;
  const quotes = quotesByType[type];

  if (!quotes || quotes.length === 0) {
    return res
      .status(404)
      .json({ error: `Aucune citation trouvée pour le type '${type}'.` });
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
