// calculadora IMC
let peso = 72;
let altura = 1.72;
let imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));


// Fahrenheit x Celsius
let celsius = 30;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit.toFixed(2));

// Desconto do tênis
let preco = 80;
let desconto = 0.15;

console.log(preco * (1 - desconto));

// Calcular juros compostos 
let capital = 110000;
let tempoMeses = 12;
let taxaDeJurosMensal = 0.015;
let montante = capital * Math.pow((1 + taxaDeJurosMensal), tempoMeses);
let jurosTotal = montante - capital

console.log(`O valor total do montante final é de ${montante.toFixed(2)}, e o juros total ao final da operação é de ${jurosTotal.toFixed(2)}`);

// Calcular a distância entre dois pontos

let xa = 2;
let xb = 5;
let ya = 1;
let yb = 3;

let dx = (xb - xa) ** 2;
let dy = (yb - ya) ** 2;

let d = Math.sqrt(dx + dy);

console.log(d.toFixed(2));

// Velocidade média

//** Contudo, as informações de distância que você recebe estão em metros e 
//o tempo em segundos. Ou seja, ao aplicar esta fórmula, a velocidade 
//estará em metros por segundo. O ideal é que o seu usuário veja a 
//velocidade em km/h **

let distanciaMetros = 5000;
let tempoSeg = 1030;

let distanciaKm = distanciaMetros / 1000;
let tempoHora = tempoSeg / (60 * 60);

let velocidade = distanciaKm / tempoHora;

console.log(`O atleta correu a uma velocidade média de ${velocidade.toFixed(2)}`);


// Casos de COVID-19

// Po = a população incial de pessoas infectadas
// X = quantidade de pessoas paras as quais um paciente infectado pode transmitir
// t = tempo percorrido dias

// -----


// Calculo do perímetro e área de um círculo
// ** Faça um programa que, a partir do raio de um círculo, 
// calcula o comprimento (C) e a área (Ao) deste círculo.**

let raio = 5;
const pi = 3.1415;
let r = 10;
let comprimento = 2 * pi * r;
let areaCirculo = pi * Math.pow(r, 2);

console.log(areaCirculo.toFixed(2), "e", comprimento.toFixed(2));


// Soma dos ângulos internos de um polígono
let númeroLados = 7
let S = (númeroLados - 2) * 180

console.log(S);


// Delta



// Volume de uma esfera


// Taxa de juros


// Área total de um cilindro















