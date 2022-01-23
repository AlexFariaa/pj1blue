console.clear();
const pc = require('prompt-sync')();

console.log(`Instruções do jogo
Quando no terminal aparecer "..." voce aperta ENTER, para
dar um ar de mais interatividade entre jogo e usuario
como por exemplos dialogos e atualizações de vida e glória`)
console.log()
var r9 = pc("Aperte enter para criar seu usuario")
console.clear()
var nome
var senha
console.log("Crie seu usario para jogar.")
console.log("Usuario deve ter nome diferente da senha.")
console.log()
nome = pc("Digite seu nome de usuario: ")
senha = pc("Digite sua senha: ")

while (nome == senha)
{
    console.clear()
    console.log("USUARIO INVALIDO")
    nome = pc("Digite seu nome de usuario: ")
    senha = pc("Digite sua senha: ")
}
console.clear()
console.log(`Em um planeta não tão distante da terra, estavam acontecendo um verdadeiro caos.
Jack Hannaford comandava seu batalhão para proteger a civilização dos goblins que ja destruiram outros continentes com muita facilidade.
Mas dessa vez pode ser diferente! Você pode ajudar Jack a salvar essa nação e retomar forças para expurgar essas terriveis pragas da Centaurum 23-19.`);
console.log();
var r7 = pc("Você esta preparado para enfrentar essa guerra? ");
console.clear()
console.log()
if (r7 === 'nao')
{
    console.log("Você é um desertor e toda sua existencia foi em vão, você abandonou toda a civilização que te deu berço e alimento para transformar você em um guerreiro.")
} else {

var gloria = 0
var vida = 100
var suc = 0

let p1
let p2
let p3
let p4
let p5

console.log(`Você esta ajudando Jack nessa batalha, ele te pediu algumas coisas e te passou algumas informações, a primeira delas é
aparentemente para pegar algum objeto para Hannaford.`)
p1 = pc("Você conseguiu encontrar os sapatos voadores que Jack perdeu e pediu para voce buscar? ");
console.log();
if (p1 == 'sim')
{
    console.clear()
    gloria = gloria + 15
    console.log("Ótimo, pelo menos agora Jack pode ter alguma chance de sair vivo ou até mesmo de derrotar os goblins com mais facilidade");
    console.log()
    suc = suc + 1
}

console.log(`Seguindo, você recebe uma mensagem no seu traje dizendo que a Star Ship pode estar proxima, mas
você não sabe exatamente onde, terá de procurar e pode encontrar coisas que não seriam tão boas`)
p2 = pc("Você conseguiu encontrar a Star Ship? ");
console.log();
if (p2 == 'sim')
{
    console.log("==============================")
    console.log("Para encontrar a Star Ship você teve que batalhar com algumas criaturas e com isso perdeu uma pequena quantidade de vida");
    console.log("==============================")
    console.log()
    gloria = gloria + 10
    vida = vida - 15
    console.log("PERFEITO! A Star ship tem umas armas bem legais (vai por mim), mas você precisa procurar o cartão que da acesso ao armazem das armas");
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
console.clear();
console.log()
console.log("Ao seguir para o caminho do vilarejo você ouve esses honrrendos monstros atacando uma familia desconhecida");
console.log()
pp1 = pc("Você deseja ajudar a familia ou prefere focar em chegar rapidamente ao vilarejo no qual os goblins estão se aproximando? ")
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
console.log(`Sabe, sei que faço parte da sua mente e tudo mais e não existo REALMENTE, ou eu posso ser só um narrador
de uma historia... Mas, não sei se você sabe e nao quero te deixar triste com isso só que...
bem... você não existe, tudo é só uma ficção sabia?`)
console.log()
r8 = pc("...")
console.log(`não é porque eu seja algo que não exista que eu não mereço a devida IMPORTANCIA, OK?!`);
console.log("...")
var r2 = pc("Olha, eu posso até ser meio chato, mas me ouve, os goblins estão vindo te atacar em breve, acho melhor você correr e chegar la no vilarejo logo!\n...")

console.clear()
console.log(`Chegando la, você ve a nave mãe dos goblins com seu comandante a bordo!
Eles descem e começam o ataque, lembre-se que você tem uma quantidade de vida,
você chegou até aqui com ${vida}.`)
console.log()
console.log("Guerrear com eles agora fará você perder pelo menos 30 de vida.")
p3 = pc(`Deseja fazer isso?`);
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
        } else // nao tenho gloria o suficiente // é healado só até 80
        {
            vida = 80
        }
    }
    console.log()
    console.log(`Esse primeiro avanço as tropas contra os goblins foi dificil, você 
teve de dar seu sangue e usar todas as suas forças para tentar salvar essa nação!`);
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
console.clear()
console.log();
console.log("Seus pontos de vida e glória foram atualizados...");
var r4 = pc("Tecle enter para ver os resultados");
console.log();
console.log(`Sua vida: ${vida}`);
console.log(`Sua glória: ${gloria}`);
var r5 = pc("...")

console.clear()
if (p3 == 'nao')
{
    console.log(`Não guerrear agora foi uma boa estrategia para planejar melhor o ataque.
Com isso, voce se junta a Jack e sua tropa para fazer um ataque furtivo pelo flanco de onde estão vindo
cada segundo importa.

Você e sua equipe avançam pelo flanco direito enquanto Jack tenta alcançar a nave mae pelo flanco esquerdo...`)
}

p4 = pc("Você conseguiu limpar a área na qual Jack Hannaford precisava para alcançar a nave mãe? ");
if (p4 == 'sim')
{
    suc = suc + 1
}
console.clear
p5 = pc("Você deu o impulso necessario e usou toda a sua gloria para desferir um ataque em massa contra os goblins que estavam descendo da nave mae? ")
if (p5 == 'sim')
{
    suc = suc + 1
}
console.clear
var r6 = pc("Aperte ENTER para ver como foi o final dessa batalha.")
console.clear();

//Professor, uma observação que não estou conseguindo resolver... aqui nessa parte de if's embaixo, ele mostra o resultado certo
//e depois mostra um outro resultado que nao era para aparecer... infelizmente terei que entregar assim, acabei indo longe demais
//no trabalho kkkkkk peço desculpas 

if (suc >= 5)
{
    console.log();
    console.log("A batalha foi um sucesso total, voce derrotou todos os invasores, conseguiu salvar a todos sem nenhuma dificuldade")
}
if (suc === 4)
{
    console.log();
    console.log("A batalha foi conquistada por vocês, tivemos algumas baixas, e Jack se machucou, mas nada que não possamos comemorar essa grande vitoria");
}
if (suc === 3)
{
    console.log();
    console.log("A batalha foi dificil, os goblins conseguiram unir forças para tentar nos derrotar, fizeram um bom estrago na nossa queria civilização, o capitão deles conseguiu fugir, mas voce limpou toda a área de 23-19");
}
if (suc === 2)
{
    console.log();
    console.log("Uma pena termos de anunciar isso, Jack esta gravemente ferido, vocês praticamente perderam a batalha, o capitão esta em 23-19. Até o momento vocês seguem procurando um abrigo para se esconder e tentar recomeçar.");
}
if (suc === 1)
{
    console.log();
    console.log("Jack sofreu um ataque fatal, perdendo a vida e enfraquecendo o seu batalhão. Você fugiu junto com alguns camponeses, mas o capitão ja esta indo atras de vocês, a morte esta a caminho e a exterminação de 23-19 ja é uma realidade.");
}
if (suc === 0);
{
    console.log();
    console.log("A batalha foi um fracasso total, vocês foram eliminados com uma facilidade tremenda. Toda a civilização de 23-19 foi exterminada e o capitão dos goblins tomaram o poder.")
}
}
