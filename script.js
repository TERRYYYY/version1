/* Scrolling circular text */

// Function for scrolling circular text
const text = document.getElementById('text');

// Variable to make the text circular
const rotate = new CircleType(text).radius(50);

//Event to rotate when scrolling up and down
window.addEventListener('scroll', function(){
text.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
});


/* Change Background Color */
// Function to change background color when scrolling
function changeBackground(){
    if(window.scrollY > window.innerHeight / 2){
            document.body.classList.add('bg-color');
    }else{
            document.body.classList.remove('bg-color');
        }
};

window.addEventListener('scroll', changeBackground);


$(function() {
    $(".preload").fadeOut(2000, function() {
        $(".content-first").fadeIn(1000);        
    });
});