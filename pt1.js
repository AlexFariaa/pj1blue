console.clear();
const pc = require('prompt-sync')();

console.log("Instruções do jogo:")

console.log(`Em um planeta não tão distante da terra, estavam acontecendo um verdadeiro caos.
Jack Hannaford comandava seu batalhão para proteger a civilização dos goblins que ja destruiram outros continentes com muita facilidade.
Mas dessa vez pode ser diferente! Você pode ajudar Jack a salvar essa nação e retomar forças para expurgar essas terriveis pragas da Centaurum 23-19.
Você esta preparado?!`);
console.log();

var gloria = 0
var vida = 100
var suc = 0

let p1
let p2
let p3
let p4
let p5

p1 = pc("Você conseguiu aprimorar seu equipamento de nivel 2 para o nivel 3 (max)? ");
console.log();
if (p1 == 'sim')
{
    gloria = gloria + 15
    console.log("Muito bom, agora você abriu um slot que é capaz de acoplar o cristal que intensifica seu dano com a Vulcan e potencializar os sapatos voadores");
    console.log()
    suc = suc + 1
}

p2 = pc("Você conseguiu encontrar a Star Ship? ");
console.log();
if (p2 == 'sim')
{
    console.log("=======")
    console.log("Para encontrar a Star Ship você teve que batalhar com os x e com isso perdeu uma pequena quantidade de vida");
    console.log("=======")
    console.log()
    gloria = gloria + 10
    vida = vida - 10
    console.log("Legal, a Star ship tem umas armas bem legais (vai por mim), mas você precisa procurar o cartão que da acesso ao armazem das armas");
    console.log();
    var sp1 = pc("Você achou o cartão de acesso? ");
    if (sp1 == 'sim')
    {
        console.clear()
        gloria = gloria + 20
        console.log("ÓTIMO! Você agora tem acesso ao armazem, pode ir até la e pegar a sua Vulcan! (a belezinha vai fazer um estrago contra esses goblins AHAHAHAHH!) Ah, não se esqueça de pegar os sapatos daquele velhote do Hannaford");
        console.log()
        suc = suc + 1
    }
    console.log("Saindo da nave...");
    console.log();
}
console.clear()
console.log()
console.log("Ao seguir para o caminho do vilarejo você ouve esses honrrendos monstros atacando uma familia desconhecida");
console.log()
pp1 = pc("Você deseja ajudar a familia ou prefere focar em chegar rapidamente ao vilarejo no qual os goblins estão se aproximando?")
if (pp1 == 'sim')
{
    suc = suc + 1
    console.clear()
    console.log("Tudo certo, sempre temos um pouco de tempo, não é mesmo? vamos salvar essa pobre familia");
    gloria = gloria + 10
    vida = vida - 25
    console.log("===================================")
    console.log("Pai da familia: ó ceus!!! Muito obrigado!! você é um grande homem, um anjo!!!!")
    var r = pc("...");
    console.log("Não acredito que você conseguiu salvar a mim e a minha familia... eu sou um grande feiticeiro e quero lhe dar essa poção... não é muito mas acho que pode te ajudar em algo");
    console.log("...");
    var r1 = pc("Não há de que! Sempre que eu puder ajudar eu estarei ajudarei! isso não é problema para mim!")
    console.log("...")
}
console.clear()
console.log(`Sabe, sei que faço parte da sua mente e tudo mais e não existo REALMENTE, ou eu posso ser só um narrador de uma historia, bom, não sei se você sabe mas você não existe, certo? ei fala comigo!!
não é porque eu seja algo que não existe (e voce tambem hihi) que eu não mereço IMPORTANCIA nessa relação OK?!`)
console.log("...")
var r2 = pc("Olha, eu posso até ser meio chato, mas me ouve, os goblins estão vindo te atacar em breve, acho melhor você correr e chegar la no vilarejo logo!\n...")

console.clear()
p3 = pc(`Chegando la, você ve a nave mãe dos goblins com seu comandante a bordo!
Eles descem e começam o ataque, lembre-se que você tem uma quantidade de vida,
você chegou até aqui com ${vida}.
Guerrear com eles agora fará você perder pelo menos 30 de vida.
Deseja fazer isso?`);
console.log();

if (p3 == 'sim') // vou guerrear
{
    suc = suc + 1
    if (pp1 == 'sim') //salvei a familia
    {
    console.clear();
    console.log("Você tem uma poção que restaura a sua vida e te concede +15 de gloria")
        if (gloria >= 50) // tenho gloria o suficiente
        {
        console.log("Você atingiu a quantidade de gloria minima para restaurar sua vida no maximo, tambem te adicionou\n1 ponto na tabela de sucesso pela sua bravura!")
        vida = 100
        suc = suc + 1
        } else // nao tenho gloria o suficiente
        {
            vida = 80
        }
    }
    console.log()
    console.log(`Essa batalha foi dificil, você teve de dar seu sangue e usar todas as suas forças para
    tentar salvar essa nação!`);
    console.log()
    console.log("Seus pontos de vida e glória foram atualizados...")
    var r3 = pc("Tecle enter para ver os resultados")
    if (sp1 == 'sim') //Tenho a vulcan
    {
        console.clear();
        console.log();
        console.log("UAUUUU VOCE DERROTOU TODOS ESSES MONSTROS COM A VULCAN EM 1 SEGUNDO!! Te evitou perder uma vida, em?!")
        console.log(`Sua vida: ${vida}`);//criar tempo para apertar enter e limpar terminal
        console.log(`Sua glória: ${gloria}`);
    } else //Nao tenho a vulcan
        {
            vida = vida - 40
    console.log(`Sua vida: ${vida}`);
    console.log(`Sua glória: ${gloria}`);
        }
}

console.log()
console.log("Seus pontos de vida e glória foram atualizados...")
var r3 = pc("Tecle enter para ver os resultados")
console.clear()
console.log(`Sua vida: ${vida}`);
console.log(`Sua glória: ${gloria}`);

p4 = pc("Bom, ");
console.log();

p5 = pc("Você acertou em cheio a nave mãe dos goblins? ");
console.log();




