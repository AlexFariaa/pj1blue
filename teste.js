console.clear();
const pc = require('prompt-sync')();

var cont = 0
console.log(cont)

var p = pc("Voce se chama alex? ")

if (p == 'sim')
{
    cont = cont + 1
    console.log(cont) 
}

console.log()
console.log(cont)

p2 = pc("voce se chama lazaro? ")

if (p2 == 'sim')
{
    cont = cont + 1
    console.log(cont)
} else 
{
    cont = cont - 1
    console.log(cont)
}

console.log(cont)

