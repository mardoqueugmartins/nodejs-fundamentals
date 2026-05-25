const fs = require('fs')
const path = require('path')

// Criar uma pasta em um diretório
fs.mkdir(path.join(__dirname, "new-folder"), () => {});

// Criar um arquivo nessa nova pasta
fs.writeFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "Hi there, Mardoqueu!",
  () => {}
);

// Adicionar mais conteúdo dentro do arquivo
fs.appendFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "\nHow are you?",
  () => {}
);

// Lê um arquivo
fs.readFile(path.join(__dirname, "new-folder", "new-file.txt"), "utf-8", 
(error, data) => {
    if (error) {
        return console.log(error)
    }
    console.log(data)
});