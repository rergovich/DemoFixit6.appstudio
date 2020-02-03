let names = ['Mary', 'Bob', 'Cindy'];

btnShowMessage.onclick=function(){
 console.log(`My best friend is ${names[1]}.`)
 alert(`The first person in the array is ${names[0]}.`);
 lblMessage.textContent = `I really enjoy ${names[1]}.`;
}
