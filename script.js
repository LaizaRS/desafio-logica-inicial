let herois = [
  ["Janna", 500],
  ["Tempestuosa", 1500],
  ["Hextec", 3000],
  ["Rainha Gelida", 6000],
  ["Vitoriosa", 7500],
  ["Previsão do Tempo", 8500],
  ["Fnatic", 9500],
  ["Guardiã Estelar", 12000],
  ["Espada Sagrada", 999],
  ["Feiticeira", 2000],
  ["Guardiã das Areias", 5000],
  ["Rainha de Batalha", 7000],
  ["Rosa de Cristal", 8000],
  ["Aura Cibernética", 9000],
  ["Prestígio", 10001]
];

herois.forEach(function (heroi) {
  let nomeHeroi = heroi[0];
  let nivelDeXP = heroi[1];

  if (nivelDeXP < 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de ferro, com " + nivelDeXP + " xp");
  } else if (nivelDeXP <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de bronze, com " + nivelDeXP + " xp");
  } else if (nivelDeXP <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de prata, com " + nivelDeXP + " xp");
  } else if (nivelDeXP <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de ouro, com " + nivelDeXP + " xp");
  } else if (nivelDeXP <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de platina, com " + nivelDeXP + " xp");
  } else if (nivelDeXP <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de ascendente, com " + nivelDeXP + " xp");
  } else if (nivelDeXP <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de imortal, com " + nivelDeXP + " xp");
  } else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de radiante, com " + nivelDeXP + " xp");
  }
});
