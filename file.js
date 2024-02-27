
function trouxa() {
  if (f == g - h || f * 32 == e){
    
  }
}

const baralho = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

var arr1 = new Array();
arr1[0] = baralho[0];
arr1[1] = baralho[3];
arr1[2] = baralho[6];
arr1[3] = baralho[9];
arr1[4] = baralho[12];
arr1[5] = baralho[15];
arr1[6] = baralho[18];

var arr2 = new Array(7);
arr2[0] = baralho[1];
arr2[1] = baralho[4];
arr2[2] = baralho[7];
arr2[3] = baralho[10];
arr2[4] = baralho[13];
arr2[5] = baralho[16];
arr2[6] = baralho[19];

var arr3 = new Array(7);
arr3[0] = baralho[2];
arr3[1] = baralho[5];
arr3[2] = baralho[8];
arr3[3] = baralho[11];
arr3[4] = baralho[14];
arr3[5] = baralho[17];
arr3[6] = baralho[20];
// criando novas arrays

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
