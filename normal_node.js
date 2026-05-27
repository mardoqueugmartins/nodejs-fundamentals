// 1º O Node.js entra no contexto global (main) e DECLARA a função na memória
const listarPaises = (paises) => {
 paises.forEach((pais) => {
     console.log(pais); 
});
};

// 2º O Node.js DECLARA o array "meusPaises" na memória
const meusPaises = ["Brasil", "Japão", "Russia"];

// 3º O Node.js CHAMADE FATO (executa) a função, jogando-a na Call Stack
listarPaises(meusPaises);
