//const prizes = ['goat', 'sheep', 'car']


for(let loopvar=0;loopvar<10;loopvar++){
    const swap = true
    const options = [{item: 'goat',index: 1}, {item: 'sheep',index: 2},{item: 'car',index: 3}] 
    shuffle(options)
    let remove
    let revisedOptions = []
    let choiceIndex
    let revisedChoice    
    let choice = Math.floor(Math.random() * 3)
    choiceIndex = options[choice].index    
    revisedOptions = [...options] // need?
    shuffle(revisedOptions)
    console.log(loopvar)
    if (swap){ // remove one that's not the car or the choice
    //let temp
        do{
           remove = Math.floor(Math.random() * 2) 
        } while(revisedOptions[remove].item === 'car' || remove === choice)        
    //     revisedOptions.splice(remove, 1)
        //swap choice
       // revisedChoice = revisedOptions[0].index === choiceIndex ? revisedOptions[1].index - 1: revisedOptions[0].index - 1
    }
    console.log(...options)
    console.log(...revisedOptions)
    //console.log(options[choice].item)
 //   console.log(options[choice].item, options[revisedChoice].item)
}


function shuffle (inputArray){
    for(let i = inputArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp =  inputArray[i]
      inputArray[i] =  inputArray[j]
      inputArray[j] = temp
    }  
  }