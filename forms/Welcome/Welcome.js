let names = ['Mary', 'Bob', 'Cindy'];

btnShowMessage.onclick=function(){
 console.log(`My best friend is ${names[1]}.`)
 lblMessage.textContent = `I really enjoy ${names[1]}.`;
}
