function t() {}

const num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
const num2 = [
  22, 23, 35, 42, 57, 64, 73, 82, 97, 49, 88, 66, 44, 55, 75, 96, 87, 68, 99,
  80, 61,
];
const names = [
  "Apple",
  "Banana",
  "Pineapple",
  "khaki",
  "Mango",
  "Watermelon",
  "Kiwi",
  "Strawberry",
  "Blueberry",
  "Lemon",
  "Grape",
  "Avocado",
  "Tangerine",
  "Orange",
  "Olive",
  "Gooseberry",
  "Jackfruit",
  "Blackberry",
  "Fig",
  "Apricot",
  "Pear",
];

  const a = num2
  var arr1 = new Array();
  arr1[0] = a[0];
  arr1[1] = a[3];
  arr1[2] = a[6];
  arr1[3] = a[9];
  arr1[4] = a[12];
  arr1[5] = a[15];
  arr1[6] = a[18];

  var arr2 = new Array(7);
  arr2[0] = a[1];
  arr2[1] = a[4];
  arr2[2] = a[7];
  arr2[3] = a[10];
  arr2[4] = a[13];
  arr2[5] = a[16];
  arr2[6] = a[19];

  var arr3 = new Array(7);
  arr3[0] = a[2];
  arr3[1] = a[5];
  arr3[2] = a[8];
  arr3[3] = a[11];
  arr3[4] = a[14];
  arr3[5] = a[17];
  arr3[6] = a[20];

const embaralhar = function (a01, a02, a03, a, b, c) {
  a01[0] = a[6];
  a01[1] = a[3];
  a01[2] = a[0];
  a01[3] = b[4];
  a01[4] = b[1];
  a01[5] = c[5];
  a01[6] = c[2];
  // array 2
  a02[0] = a[5];
  a02[1] = a[2];
  a02[2] = b[6];
  a02[3] = b[3];
  a02[4] = b[0];
  a02[5] = c[4];
  a02[6] = c[1];
  //array 3
  a03[0] = a[4];
  a03[1] = a[1];
  a03[2] = b[5];
  a03[3] = b[2];
  a03[4] = c[6];
  a03[5] = c[3];
  a03[6] = c[0];
};

export { arr1, arr2, arr3, embaralhar };
