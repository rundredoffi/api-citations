# 🤝 Guide de contribution

Merci de ton intérêt pour ce projet d'API de citations en français !  
Tu veux contribuer ? C’est simple, ce guide t’explique tout ce qu’il faut savoir 👇

---

## ✨ Que peut-on faire dans ce projet ?

Tu peux :
- Ajouter de nouvelles citations françaises
- Corriger des fautes dans les citations existantes
- Proposer des améliorations sur l’API ou sa documentation

---

## 📝 Ajouter une citation

1. Va dans le fichier `citations.json`
2. Ajoute une nouvelle citation sous forme d’objet :

```json
{
  "auteur": "Nom de l’auteur",
  "citation": "Texte de la citation"
}
````

> ✍️ Merci de garder un style cohérent avec les autres citations, sans doublons.

---

## 🚀 Étapes pour contribuer

1. **Fork** le dépôt GitHub
2. Clone ton fork :

   ```bash
   git clone https://github.com/ton-pseudo/api-citations.git
   ```
3. Crée une nouvelle branche :

   ```bash
   git checkout -b ajout-citation-x
   ```
4. Fais tes modifications (ajout citation, correctif, etc.)
5. Commit :

   ```bash
   git commit -m "Ajout citation de Victor Hugo"
   ```
6. Pousse ta branche :

   ```bash
   git push origin ajout-citation-x
   ```
7. Va sur GitHub et crée une **Pull Request** vers `main`

---

## ✅ Bonnes pratiques

* Une citation par PR si possible
* Utiliser un français correct
* Respecter les règles de typographie (`« ... »`, espaces insécables, etc.)
* Vérifier le JSON avec un validateur [comme celui-ci](https://jsonlint.com)

---

## 🧪 Test en local (facultatif)

Si tu veux tester l’API en local avant de proposer ta PR :

```bash
npm install
npm start
```

Va ensuite sur [http://localhost:3000/citation/random](http://localhost:3000/citation/random)

---

## 🙋‍♀️ Besoin d'aide ?

Tu peux ouvrir une **Issue** sur GitHub si :

* Tu veux discuter d’une idée avant de l’implémenter
* Tu ne sais pas par où commencer

---

Merci encore pour ton envie de contribuer 🙏
Chaque citation ajoutée aide ce projet à grandir 📚

```