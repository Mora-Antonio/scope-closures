// function moneybox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Tienes ahorrado ${saveCoins}`)
// };
// moneybox(100);
// moneybox(100);

function moneybox(){
    let saveCoins = 0;
    return function countCoins(coins)
    {
        saveCoins += coins;
        console.log(`Tienes ahorrado $ ${saveCoins}`)
    }
}
const money = moneybox();
money(5);
money(50);
money(80);

const moneyJulio = moneybox();
moneyJulio(6);
moneyJulio(78);

function saludar()
{
    let name = 'Antonio';
    return function saludos()
    {
        let hola = 'Hola';
        console.log(`${hola}, ${name}`)
    }
}
let funcion = saludar();
funcion();
