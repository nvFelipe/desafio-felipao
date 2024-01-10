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

        if (niveldoheroi >= 0 && niveldoheroi <= 1000){
          console.log ("O heroi", nomedoheroi, "é FERRO");
        }
        else if (niveldoheroi > 1001 && niveldoheroi <= 2000){
          console.log ("O heroi", nomedoheroi, "é BRONZE");
        }
        else if (niveldoheroi > 2001 && niveldoheroi <= 5000){
          console.log ("O heroi", nomedoheroi, "é PRATA");
        }
        else if (niveldoheroi > 5001 && niveldoheroi <= 7000){
          console.log ("O heroi", nomedoheroi, "é OURO");
        }
        else if (niveldoheroi > 7001 && niveldoheroi <= 8000){
          console.log ("O heroi", nomedoheroi, "é PLATINA");
        }
        else if (niveldoheroi > 8001 && niveldoheroi <= 9000){
          console.log ("O heroi", nomedoheroi, "é ASCENDENTE");
        }
        else if (niveldoheroi > 9001 && niveldoheroi <= 10000){
          console.log ("O heroi", nomedoheroi, "é IMORTAL");
        }
        else{
          console.log ( "O heroi", nomedoheroi, "é RADIANTE")
        }

  rl.close();
    });
});

