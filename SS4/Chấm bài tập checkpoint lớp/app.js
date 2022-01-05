// BÀI 1
function findEven(number){
    for (let i = 4; i <= number; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}
console.log(findEven(20))

                        // BÀI 2
var obj = document.getElementById('container');
obj.addEventListener('mouseover', function(){
    obj.style.color = 'red';
});

obj.addEventListener('mouseout', function(){
    obj.style.color = 'black';
});

                          // BÀI 3
document.write(".............................................")
document.write("</br>")

for (let i = 1; i < 6; i++){
    for (let j = i; j < 8; j++){
      document.write("...")
    }

    for (let j = 1; j <= (2 * i - 1); j++){
        document.writeln("*");
    }

    for (let j = i; j < 8; j++){
        document.write("...")
    }
    document.write("</br>")
}
document.write(".............................................")