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
    let slotAssignment = new SlotMachine(_.random(0,4), _.random(0,4), _.random(0,4), _.random(0,4), _.random(0,4))
    switch(slotAssignment.slot1){
        case 0:
            resultArr.push('Splash Mountain')
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
        
        default:  
            console.log('nonexistent')
    }
    switch(slotAssignment.slot2){
        case 0:
            resultArr.push('Splash Mountain')
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
        
        default:
            resultArr.push('nonexistent')
    }
    switch(slotAssignment.slot3){
        case 0:
            resultArr.push('Splash Mountain')
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
        
        default:
            resultArr.push('nonexistent')
    }
    switch(slotAssignment.slot4){
        case 0:
            resultArr.push('Splash Mountain')
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
            
        default:
            resultArr.push('nonexistent')
    }
    switch(slotAssignment.slot5){
        case 0:
            resultArr.push('Splash Mountain')
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
        
        default:
            resultArr.push('nonexistent')
    }
    return resultArr
}

let gmResults = slotResults()


function splashWin(){
    let container=[]
gmResults.forEach((ride)=>{
    
    if(ride === 'Splash Mountain'){
        container.push(ride)
    }
    
})
    if(container.length >= 3){
        return true
    }
    else{
        return false
    }
}

function spaceWin(){
    let container=[]
gmResults.forEach((ride)=>{
    
    if(ride === 'Space Mountain'){
        container.push(ride)
    }
    
})
    if(container.length >= 3){
        return True
    }
    else{
        return false
    }
}

function thunderhWin(){
    let container=[]
gmResults.forEach((ride)=>{
    
    if(ride === 'Thunder Mountain'){
        container.push(ride)
    }
    
})
    if(container.length >= 3){
        return true
    }
    else{
        return false
    }
}

function piratesWin(){
    let container=[]
gmResults.forEach((ride)=>{
    
    if(ride === 'Pirates of the Caribbean'){
        container.push(ride)
    }
    
})
    if(container.length >= 3){
        return true
    }
    else{
        return false
    }
}

function matterhornWin(){
    let container=[]
gmResults.forEach((ride)=>{
    
    if(ride === 'Matterhorn'){
        container.push(ride)
    }
    
})
    if(container.length >= 3){
        return true
    }
    else{
        return false
    }
}
    

console.log(gmResults)
console.log(splashWin())
console.log(matterhornWin())
console.log(piratesWin())
console.log(spaceWin())
console.log(thunderhWin())

        

let wallet =100

const calc = (win=true)=>{
    wallet
    if(win === true){
        wallet+=50
    }
    else{
        wallet-=50
    }
    
    return wallet
}

console.log(calc())

function gameBox(){

}

















    
    

