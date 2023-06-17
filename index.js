// code your solution here
function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork (activity ='go to the office') {
    return `This Monday, I will ${activity}.`

}

/* we want to create a function that wraps the sentence, you are a hardworker between *.
   we also want to create a second function that wraps the phrase you are a dedicated programmer between || */


function wrapAdjective (wrap = '*') {        // here i am naming the functin and equaling the parameter to *, because we want ti wrap this around the next 
    return function phrase ( phrase= 'a hard worker')  {
            return `You are ${wrap}${phrase}${wrap}!`;
    };
    }
    
  
