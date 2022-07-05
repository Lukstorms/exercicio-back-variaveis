let po = 1000; //população inicial de infectados
let x = 4 ; //quantidade de pessoas para a qual uma pessoa pode transmitir
let t = 100; //tempo percorrido
let p = po * Math.pow(x , t/7);
console.log(p);
//P = Po * x ^\frac{t}{7}