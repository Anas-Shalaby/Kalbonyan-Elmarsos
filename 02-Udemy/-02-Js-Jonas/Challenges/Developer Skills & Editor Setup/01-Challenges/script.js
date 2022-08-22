const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}C ...${data1[1]}C ...${data1[2]}C ...`);

const printForCast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`;
  }

  console.log("..." + str);
};
