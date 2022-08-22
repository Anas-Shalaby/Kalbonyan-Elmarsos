const Average = (a, b, c) => (a + b + c) / 3;
console.log(Average(3, 4, 5));
let scoreForDolphins = Average(44, 23, 71);
let scorForKoalas = Average(65, 54, 49);
console.log(scoreForDolphins, scorForKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreForDolphins, scorForKoalas);

checkWinner(576, 111);
