// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }
// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }
// !!!next
// function countProps(object) {
//   let propCount = Object.keys(object);

//    return propCount.length;
// }
// !!!next

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salaryValues = Object.values(salaries);
//   for (const key of salaryValues) {
//     totalSalary += key;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// !!! next
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex)
// }
// const rgbColors = [];
// for (let color of colors) {
//   rgbColors.push(color.rgb)
// }
// *****next

const atTheOldToad = {
  potions: [],
  getPotions() {
    return 'List of all available potions';
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};
