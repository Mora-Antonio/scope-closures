//variables
var a; // declarando la varible 'a' 
var b = 'b'; // declaramos la variable 'b' y la asignamos
b = 'bb' // reasignando 
var a = 'aa' //redeclaracion


//Global Scope
var fruit = 'apple'; //global

function bestFruit(){
    console.log(fruit)
}
bestFruit()

function countries()
{
    country = 'Colombia'; //global
    console.log(country);
}
countries();
console.log(country);
var a = 10;
a