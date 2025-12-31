const { parse } = require('path');

let Nome = "Thallys";
let Xp;
let nivel;

 const linhaDeLeitura = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
 });

 linhaDeLeitura.question('Digite o xp do personagem ', Xp => {

   Xp = parseInt(Xp);

    switch(true){

    case Xp <= 1000:
        nivel = `Ferro`;
        break;
        
    case Xp <=2000:
        nivel = `Bronze`;
        break;
        
    case Xp<= 5000:
        nivel = `Prata`;
        break;
        
    case Xp<= 7000:
        nivel = `Ouro`;
        break;
        
    case Xp<= 8000:
        nivel = `Platina`;
        break;
        
    case Xp <= 9000:
        nivel = `Ascendente`;
        break;
        
    case Xp <= 10000:
        nivel = `Imortal`;
        break;

        
    default:
        nivel = `Radiante`;
}


    console.log(`O Herói de nome ${Nome} está no nível de ${nivel} `);
    linhaDeLeitura.close();
 });
    
 