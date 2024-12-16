// import express from 'express';
// import path from 'path';
// import fs from 'fs';

// const app = express();
// const PORT = 5000;

// // Middleware pour parse les requêtes JSON
// app.use(express.json());

// // Point de terminaison pour récupérer les todos
// app.get('/todos', (req, res) => {
//   const filePath = path.join(process.cwd(), 'db.json'); // Assurez-vous que le chemin est correct
  
//   // Lire le fichier db.json
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: 'Erreur de lecture du fichier' });
//     }
//     res.json(JSON.parse(data)); // Renvoyer les données du fichier comme réponse
//   });
// });

// // Démarrage du serveur
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

