// teste para aula 2

console.clear();
const pc = require('prompt-sync')();

console.log(`Em um planeta não tão distante da terra, estavam acontecendo um verdadeiro caos.
Jack Hannaford comandava seu batalhão para proteger a civilização dos goblins que ja destruiram outros continentes com muita facilidade.
Mas dessa vez pode ser diferente! Você pode ajudar Jack a salvar essa nação e retomar forças para expurgar essas terriveis pragas da Centaurum 23-19.
Você esta preparado?!`);

var p1
var p2
p1 = pc("Você conseguiu aprimorar seu equipamento de nivel 2 para o nivel 3 (max)? ");

if (p1 == "sim"){
    console.log("Legal, então você ja tem seu item de proteção e com o GPS embutido para encontrar a Star Ship");
} else if (p2 == "nao"){
    console.log("Não tem problema, temos chances de derrotar os goblins de outras maneiras");
    
}
