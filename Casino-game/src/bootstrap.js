class SlotMachine{
    constructor(slot1, slot2, slot3, slot4, slot5){
        this.slot1=slot1
        this.slot2=slot2
        this.slot3=slot3
        this.slot4=slot4
        this.slot5=slot5
    }
    
}


const _ = require('lodash');

function randomNumberGenerator(){
    let container = []
    let numArray =_.times(5, ()=>container.push(_.random(0,10)))
    return container
    }
     
    console.log(randomNumberGenerator())
    let disneySlots = new SlotMachine('hm', 'space', 'TOT', 'matterhorn', 'thunder')
    console.log(disneySlots)
    console.log(disneySlots.slot4)


