function saludar(){
    let username = 'Julio';

    return function displayUserName(){
        return `Hola, ${username}`; 
    }
};

const s = saludar();
console.log(typeof s);
console.log(s);
console.log(s());