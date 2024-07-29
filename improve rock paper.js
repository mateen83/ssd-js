function myFunc1(playGame){

    const ranMove = Math.random();
    let comMove = '';
    if (ranMove >= 0 && ranMove < 1/3 ){
       comMove ="rock"
    }
    else if (ranMove >= 1/3 && ranMove < 2/3 ){
        comMove ="paper"
     }
     else if (ranMove >= 2/3 && ranMove < 1 ){
        comMove ="scissor"
     }
    
     let result = '';
    if (playGame === 'rock')
     if (comMove === 'rock'){
        result = 'you win!';
     }
     else if (comMove === 'paper'){
        result = 'you tie!';
     }
     else if (comMove === 'scissor'){
        result = 'you loss!';
     }
    
    
     else if(playGame === 'scissor')
    
       if (comMove === 'rock'){
          result = 'you loss!';
       }
       else if (comMove === 'paper'){
          result = 'you win!';
       }
       else if (comMove === 'scissor'){
          result = 'you tie!';
       }
    
       else if(playGame === 'paper')
            
          if (comMove === 'rock'){
             result = 'you tie!';
          }
          else if (comMove === 'paper'){
             result = 'you win!';
          }
          else if (comMove === 'scissor'){
             result = 'you loss!';
          }
    
    alert(`you pick ${playGame} , computer pick ${comMove} , and ${result} `)
    }
    