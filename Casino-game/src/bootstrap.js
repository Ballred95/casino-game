// class SlotMachine{
//     constructor()
// }
const _ = require('lodash');

function randomNumberGenerator(){
    let container = []
    let numArray =_.times(5, ()=>container.push(_.random(0,10)))
    return container
    }
     
    
    


    console.log(randomNumberGenerator())


