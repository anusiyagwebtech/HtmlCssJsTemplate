//Immediately invoked function expression - IIFE
//It is anonymous function.


//Immediately Invoked function,  array, classList.contains(), array.foreach, ``, count variable
(function () {
    const pictures = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5",
        "img6"
    ]
   
   
    const imgContainer = document.querySelector('.img-container');

    const buttons = document.querySelectorAll('.btn');

    let counter = 0;

    buttons.forEach(function (button) {
       button.addEventListener("click", function (params) {
        if (button.classList.contains('btn-left')) {
          counter--;
          if (counter < 0) {
            counter = pictures.length - 1;
          }    
        imgContainer.style.background = `url(assets/${pictures[counter]}.jpg)`;

        }

        if (button.classList.contains('btn-right')) {
            counter++;
            if(counter > pictures.length-1) counter = 0;
        imgContainer.style.background = `url(assets/${pictures[counter]}.jpg)`;

        } 
       
       })    
    })
   
   

})();
