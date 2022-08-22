const scrollDolphins = (80 + 112 + 97) / 3;
const scrollKoals = (109 + 95 + 50) / 3;
console.log(scrollKoals, scrollDolphins);

if (scrollDolphins > scrollKoals && scrollDolphins >= 100) {
  console.log("Dolphines win the trophy");
} else if (scrollKoals > scrollDolphins && scrollKoals >= 100) {
  console.log("Koals win the trophy");
} else if (
  scrollDolphins === scrollKoals &&
  scrollDolphins >= 100 &&
  scrollKoals >= 100
) {
  console.log("both win the trophy");
} else {
  console.log("No one win");
}
