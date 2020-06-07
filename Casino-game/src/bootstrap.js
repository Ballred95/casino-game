// class SlotMachine{
//     constructor()
// }
const _ = require('lodash');

function randomNumberGenerator(){
    let container = []
    let numArray =_.times(5, ()=>container.push((Math.floor(Math.random() * 10))))
    return container
    }
     
    
    


console.log(randomNumberGenerator())


