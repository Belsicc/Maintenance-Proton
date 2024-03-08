const express = require('express');
const app = express();
const port = 5500; // Tu peux changer le port selon tes préférences

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Proton !');
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
