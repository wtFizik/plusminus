let min = +prompt('vedite min')
let max = +prompt('vedite max')

function rand(min, max){
    return Math.floor(math.random()* (max + 1 - min) + min)
}
const operator = {
    1: Math.random() > 0.5 ? '+' : '-',
    2: '*',
    3: '/',
    4: '%'};

for (let i = 0; i < 5; i++ ){
    let randNum1 = rand(min,max)
    let randNum2 = rand(min,max)
 
   

    let pr =+prompt(randNum1 + operator + randNum2)
     
    let answer = (randNum1 + operator +randNum2)  == pr ? 'molodec' : 'oshibka'
    let trueAnswer = randNum1 + operator + randNum2

    alert(randNum1 + operator + randNum2 + '=' + trueAnswer + 'bash otvet:' + pr + '!' + answer)
  }