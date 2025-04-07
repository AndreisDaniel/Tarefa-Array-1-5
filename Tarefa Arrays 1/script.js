const cidadeBrasileira = [
  "Porto Alegre",
  "Salvador",
  "São Paulo",
  "Florianópolis",
  "Rio de Janeiro",
];

const capitalEstrangeira = ["Lima", "Paris", "Roma", "Buenos Aires", "Pequim"];

const cidadeECapital = cidadeBrasileira.concat(capitalEstrangeira);

console.log(
  "Algumas cidades que são capitais de Estados do Brasil:",
  cidadeBrasileira
);
console.log("Cidades que são capitais pelo mundo:", capitalEstrangeira);
console.log(cidadeECapital);
