// // let name = "Dawa";
// // switch (name) {
// //   case "Tashii":
// //     console.log("Tashii");
// //     break;
// //   case "Kinley":
// //     console.log("Kinley");
// //     break;
// //   case "Sonam":
// //     console.log("Sonam");
// //   default:
// //     console.log("its not a name");
// // }

// // for (let i=0; i<10; i++){
// //   console.log("Tashi Yuden");
// // }

// let names = [
//   "Phurba",
//   "Tashii",
//   "Jamyang",
//   "Norbu",
//   "Karma",
//   "Peyma",
//   "Tshering",
//   "Pema",
//   "Tek Nath",
//   "Galey",
//   "Tenzin",
//   "Chimmi",
//   "Kuenzang",
//   "Sonam",
//   "Ugyen",
//   "Yeshi",
//   "Sangay",
//   "Jigme",
// ];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let i = 2; i <= 50; i+=2){
//   console.log(i)
// }

// for (let i = 3; i <= 50; i+=3){
//   console.log(i)
// }

// function countEvenNumbers(numbers){
//   let count = 0;
//  for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] % 2 ===0){
//      count = count + 1;
//   }
//  }
//  return count;
//  }
//   console.log(countEvenNumbers([2,2,2,5,4,6,8]));

// for (let times = 0; times <= 10; times++) {
//   console.log(times);
// }

// let names = ["Jamyang", "Tashi", "Pratap", "Susma"];

// // a++ -> a = a + 1;

// // index++ -> index = index + 1
// for (let index = 0; index < names.length; index++) {
//   // index = 4
//   console.log(names[index]); // Susma
// }

// let endDate = new Date(); // Get current date and time;
// endDate.setSeconds(endDate.getSeconds() + 15);

// let isRaining = true;

// while (isRaining) {
//   let currentTime = new Date();
//   if (currentTime > endDate) {
//     console.log("It has now stopped raining");
//     isRaining = false;
//   } else {
//     console.log("It is still raining");
//   }
// }

// function fizzBuzz(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "fizzBuzz";
//   } else if (number % 3 === 0) {
//     return "Fizz";
//   } else if (number % 5 === 0) {
//     return "Buzz";
//   } else {
//     return number;
//   }
// }

// console.log(fizzBuzz(15));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(30));
// console.log(fizzBuzz(9));
// console.log(fizzBuzz(7));
// console.log(fizzBuzz(8));

// for (let i = 2; i <= 10; i++){
//   if (i%2===0){
//     console.log(i);
//   }

// }

// for (let i = 2; i <= 20; i++){
//   if (i%2!==0){
//     console.log(i)
//   }
// }

// let i = 5;
// while (i <= 50) {
//   let num = i * 2;
//   if (num <= 50) {
//     i = num;
//   }
// }
// console.log(i);

let i= 3;
while(i<=500){
  console.log(i);

   if (i % 3 === 0){
    i = i * 2;
   }
}

 