const _ = require('lodash');

class SlotMachine{
    constructor(slot1, slot2, slot3, slot4, slot5){
        this.slot1=slot1
        this.slot2=slot2
        this.slot3=slot3
        this.slot4=slot4
        this.slot5=slot5
        
    }
    
    
}


// function randomNumberGenerator(){
//     let container = []
//     let numArray =_.times(5, ()=>container.push(_.random(0,5)))
//     return container
    
// }


let slotResults =function (){
    resultArr=[]
    let slotAssignment = new SlotMachine(_.random(0,5), _.random(0,5), _.random(0,5), _.random(0,5), _.random(0,5))
    switch(slotAssignment.slot1){
        case 0:
            resultArr.push('Haunted Mansion');
            break;
        case 1:
            resultArr.push('Space Mountain')
            break;
        case 2:
            resultArr.push('Thunder Mountain')
            break;
        case 3:
            resultArr.push('Matterhorn')
            break;
        case 4:
            resultArr.push('Pirates of the Caribbean')
            break;
        case 5:
            resultArr.push('Splash Mounatin')
            break;
        default:
            console.log('nonexistent')
    }
    switch(slotAssignment.slot2){
        case 0:
            resultArr.push('Haunted Mansion');
            break;
        case 1:
            resultArr.push('Space Mountain')
            break;
        case 2:
            resultArr.push('Thunder Mountain')
            break;
        case 3:
            resultArr.push('Matterhorn')
            break;
        case 4:
            resultArr.push('Pirates of the Caribbean')
            break;
        case 5:
            resultArr.push('Splash Mounatin')
            break;
        default:
            resultArr.push('nonexistent')
    }
    switch(slotAssignment.slot3){
        case 0:
            resultArr.push('Haunted Mansion');
            break;
        case 1:
            resultArr.push('Space Mountain')
            break;
        case 2:
            resultArr.push('Thunder Mountain')
            break;
        case 3:
            resultArr.push('Matterhorn')
            break;
        case 4:
            resultArr.push('Pirates of the Caribbean')
            break;
        case 5:
            resultArr.push('Splash Mounatin')
            break;
        default:
            resultArr.push('nonexistent')
    }
    switch(slotAssignment.slot4){
        case 0:
            resultArr.push('Haunted Mansion');
            break;
        case 1:
            resultArr.push('Space Mountain')
            break;
        case 2:
            resultArr.push('Thunder Mountain')
            break;
        case 3:
            resultArr.push('Matterhorn')
            break;
        case 4:
            resultArr.push('Pirates of the Caribbean')
            break;
        case 5:
            resultArr.push('Splash Mounatin')
            break;
        default:
            resultArr.push('nonexistent')
    }
    switch(slotAssignment.slot5){
        case 0:
            resultArr.push('Haunted Mansion');
            break;
        case 1:
            resultArr.push('Space Mountain')
            break;
        case 2:
            resultArr.push('Thunder Mountain')
            break;
        case 3:
            resultArr.push('Matterhorn')
            break;
        case 4:
            resultArr.push('Pirates of the Caribbean')
            break;
        case 5:
            resultArr.push('Splash Mounatin')
            break;
        default:
            resultArr.push('nonexistent')
    }
    return resultArr
}

let gmResults = slotResults()
console.log(gmResults)

function splashWin(){
    let container=[]
gmResults.forEach((ride)=>{
    
    if(ride === 'Splash Mounatin'){
        container.push(ride)
    }
    
})
    if(container.length === 3){
        return 'Youve won with 3 splash mountains!'
    }
    else{
        return 'you got no splash'
    }
}

console.log(splashWin())



















    
    

