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
   
    let count = 0;
    const imgContainer = document.querySelector('.img-container');

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('btn-left')) {    
                if (count == 0) count = pictures.length;          
                count--;
                console.log(count);
               
            }
            else {
                console.log(count);
                
                count++;
                if (count == pictures.length ) {
                    count = 0;
                }
            }
          imgContainer.style.setProperty('--bg', `assets/${pictures[count]}.jpg`); 
          imgContainer.style.background =  `url(assets/${pictures[count]}.jpg)`; 

        })
       
    })

   

})();
