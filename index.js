function SaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

var vitorias = 130;
var derrotas = 5;
var saldoRankeadas = SaldoRankeadas(vitorias, derrotas);

if (saldoRankeadas <= 10){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Ferro`);
} 
else if ((saldoRankeadas >= 11) && (saldoRankeadas <= 20)){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Bronze`);
}
else if ((saldoRankeadas >= 21) && (saldoRankeadas <= 50)){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Prata`);
}
else if ((saldoRankeadas >= 51) && (saldoRankeadas <= 80)){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Ouro`);
}
else if ((saldoRankeadas >= 81) && (saldoRankeadas <= 90)){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Diamante`);
}
else if ((saldoRankeadas >= 91) && (saldoRankeadas <= 100)){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Lendário`);
}
else if (saldoRankeadas >= 101){
    console.log(`O saldo de ranqueadas do jogador é ${saldoRankeadas} e o nível é Imortal`);
}
