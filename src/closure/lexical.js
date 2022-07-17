const global = 0;

function myFunction(){
    const number = 1;
    console.log(global);

    function parent (){
        const inner = 2;
        console.log(global, number);

        function child(){
            console.log(global, number, inner)
        }

        return child();
    }
    return parent();
}

myFunction();