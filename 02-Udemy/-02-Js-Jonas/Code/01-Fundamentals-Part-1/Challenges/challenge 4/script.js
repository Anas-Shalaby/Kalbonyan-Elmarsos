const bills = 430;
const tips = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
console.log(
  `The bill was ${bills}, the tip was ${tips}, and the total value ${
    bills + tips
  }`
);
