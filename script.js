const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = e.target.id
    })
 });



//using switch method
/*
 buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target);
        const color = e.target.id;
        switch (color) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
        
            default:
                break;
        }
    })
 });
*/

//using if loop
/* 
  buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
       if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
       }
    })
 });

*/