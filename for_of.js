const userName = ["Joao Henique", "Vilma Rabelo", "Caique Rabelo"];

// for (let i = 0; i < userName.length; i++) {
//     console.log(userName[i]);
// }

// for (let i in userName){
//     console.log(userName[i])
// }
 
// for (let value of userName){
//     console.log(value);
// }

userName.forEach(function(value, index) {
    console.log(value, index )
})