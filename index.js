const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o nome do heroi? : ', (nomedoheroi) => {
    rl.question('Qual o nivel do heroi? : ', (niveldoheroi) => {

        const numeroInteiro = parseInt(niveldoheroi, 10);

        console.log('O nome do heroi é:', nomedoheroi);
        console.log('O nivel do heroi é:', niveldoheroi);

  rl.close();
    });
});