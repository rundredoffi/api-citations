# 📚 API de Citations en Français 🇫🇷

Bienvenue dans cette petite API open source qui fournit aléatoirement des citations en langue française.

Cette API est hébergée sur Render et accessible publiquement à l'URL suivante :

🔗 **[https://api-citations.onrender.com/citation/random](https://api-citations.onrender.com/citation/random)**

---

## 🔄 Utilisation

### ➕ Endpoint disponible :

```http
GET /citation/random
````

### 🔁 Exemple de réponse :

```json
{
  "auteur": "Victor Hugo",
  "citation": "La liberté commence où l'ignorance finit."
}
```

---

## 🚀 Déploiement local

### 🔧 Prérequis

* Node.js (version 16+ recommandée)
* npm

### ▶️ Lancer en local :

```bash
git clone https://github.com/votre-utilisateur/api-citations.git
cd api-citations
npm install
npm start
```

Le serveur démarrera sur [http://localhost:3000](http://localhost:3000)

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! 🎉

Si tu veux ajouter des citations ou améliorer le code :

### 💡 Étapes pour contribuer :

1. **Fork** ce dépôt
2. Crée une branche :

   ```bash
   git checkout -b ajout-nouvelle-citation
   ```
3. Ajoute ta citation dans `citations.json` :

   ```json
   {
     "auteur": "Auteur",
     "citation": "Texte de la citation"
   }
   ```
4. Commit et pousse tes changements :

   ```bash
   git commit -m "Ajout citation de X"
   git push origin ajout-nouvelle-citation
   ```
5. Crée une **Pull Request** sur GitHub 🧑‍💻

## 📜 Licence

Ce projet est sous licence [MIT](LICENSE).

---

## 🙌 Merci !

Merci à tous les contributeurs et utilisateurs !
Ajoute ta citation préférée et partage ton savoir 🧠