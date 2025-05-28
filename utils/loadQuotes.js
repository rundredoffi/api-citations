const fs = require('fs');
const path = require('path');

function loadAllQuotes() {
  const dataDir = path.join(__dirname, '../data');
  const files = fs.readdirSync(dataDir);

  const quotesByType = {};

  files.forEach((file) => {
    if (file.endsWith('.json')) {
      const type = path.basename(file, '.json');
      const filePath = path.join(dataDir, file);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed)) {
          quotesByType[type] = parsed;
        } else {
          console.warn(`❗ Ignoré ${file}: contenu non valide (doit être un tableau).`);
        }
      } catch (err) {
        console.error(`❌ Erreur de lecture/parsing pour ${file} :`, err.message);
      }
    }
  });

  return quotesByType;
}

module.exports = loadAllQuotes;
