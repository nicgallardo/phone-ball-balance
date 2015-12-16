var obj = {
  1: {
    "x": 10,
    "y": 10
  },
  2: {
    "x": 100,
    "y": 101
  },
  3: {
    "x": 1,
    "y": 14
  }
}

for (var key in obj) {
  if(obj[key].x == 10 && obj[key].y == 10){
    console.log("match");
  }
  console.log(obj[key].x);
}



// for (var hand in hands) {
//     for (var card in hands[hand]) {
//         for (var prop in hands[hand][card]) {
//             console.log(hands[hand][card][prop]);
//         }
//     }
// }
