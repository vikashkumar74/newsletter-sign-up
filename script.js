// vaild email section

var emailInput=document.querySelector('#email-input');
var errorMsg=document.querySelector('.error-msg');
function validation(){
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMsg.innerHTML='valid email required '
        emailInput.style.borderColor='red'
      

    return false
    }
    else{
        emailInput.style.borderColor='hsl(231, 7%, 60%)'
        errorMsg.innerHTML=' '
    }
}
// subscribed button

document.querySelector('#emailbtn').addEventListener('click',function(){

    document.querySelector('.box').style.display = 'none';
    document.querySelector('.box2').style.display = 'flex';


})
// dismiss button section
document.querySelector('.dismiss-btn').addEventListener('click',function(){

    document.querySelector('.box').style.display = 'flex';
    document.querySelector('.box2').style.display = 'none';


})