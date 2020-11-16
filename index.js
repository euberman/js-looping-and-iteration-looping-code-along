// Code your solutions in this file
function writeCards(aList, eventName){
  let result = [];
  for (let i = 0; i < aList.length; i++) { 
    let newMessage = `Thank you, ${aList[i]}, for the wonderful surprise gift!`;
    result.push(newMessage);
  }
  return result;
};

function countDown(num){
  let i = num
  while (i >= 0){
    console.log(i--);
  }
};