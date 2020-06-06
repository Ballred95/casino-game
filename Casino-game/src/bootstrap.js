// class SlotMachine{
//     constructor()
// }


function randomNumberGenerator(){
    let container = []
    for(let i=0; i>5; i++){
       let num = Math.floor(Math.random() * 10)
       container.push(num)
    }
     
    return container;
    
}

console.log(randomNumberGenerator())



