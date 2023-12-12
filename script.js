// script.js
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000; // ou qualquer porta de sua escolha

app.get('/criar-arquivo', (req, res) => {
  const conteudo = 'Conteúdo do arquivo.\n';

  fs.writeFile('meu_arquivo.txt', conteudo, (err) => {
    if (err) {
      return res.status(500).send('Erro ao criar o arquivo.');
    }

    res.send('Arquivo criado com sucesso.');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
