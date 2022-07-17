function fruits(){
    if(true)
    {
        var fruit1 = 'pera'
        let fruit2 = 'manzana';
        let fruit3 = 'banana';
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
}
fruits();

//Global
var animal = 'perro';
let planeta = 'jupiter';
const fruta = 'manzana';
console.log(`${animal} ${planeta} ${fruta}`);


//Function
function saludo(){
    let nombre = 'Antonio';
    const apellido = 'Mora';
    var edad = 22;

    console.log(`Hola, ${nombre} ${apellido} de ${edad} años`);
}
saludo(); 
console.log(`Hola, ${nombre} ${apellido} de ${edad} años`);

//Block
for(let i = 0; i < 3; i++) 
{
    let color1 = 'azul';
    const color2 = 'rojo';
    var color3 = 'amarillo'
    console.log(`${color1} ${color2} ${color3} `);
}
console.log(`${color3}`);

let mascota = 'Julio';
console.log(mascota);
for(let i = 0; i < 1; i++)
{
    mascota = 'Boby';
    let pet = 'Gato';
    console.log(mascota +' ' + pet);
}

let pet = 'Perro';
mascota = 'Chiquis';
console.log(mascota +' ' + pet);