//NUR HAZIRAH BINTI HARIS FADZILAH
//1714158

const readline = require('readline');

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});
  
    function calBMI(weight, height) {
        let BMI = weight / height / height * 10000;
        return BMI;
    }
 
rl.question('What is your weight? ',(weight) => {
    rl.question('What is your height? ', (height) => {
        console.log ('Your BMI: ' , calBMI (weight, height));
        rl.close();
    })
})
