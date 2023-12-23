//Dragging
const carousel = document.querySelector('.carousel');
const wrapper = document.querySelector('.wrapper');

let isDragging, startX,startscrollLeft;
isDragging = false;
const dragStart = (e)=>{
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startscrollLeft = carousel.scrollLeft;
}

const dragging = (e)=>{
    if(!isDragging)return;
    carousel.scrollLeft = startscrollLeft - (e.pageX - startX);
}
const dragstop = (e)=>{
    isDragging = false;
    carousel.classList.remove('dragging');
}
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragstop);

//Left arrow right arrow click
const firstCardWidth = document.querySelector('.card').offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildren = [...carousel.children];   // infinite
let cardPerView = Math.round(carousel.offsetWidth/firstCardWidth);// infinite
carouselChildren.slice(-cardPerView).reverse().forEach((card)=>{
    carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});
carouselChildren.slice(0,cardPerView).forEach((card)=>{
    carousel.insertAdjacentHTML("beforeend",card.outerHTML);
});
let timeout;

arrowBtns.forEach((btn)=>{
 btn.addEventListener("click", ()=>{
   carousel.scrollLeft += (btn.id === "left") ? -firstCardWidth: firstCardWidth;
})   
});
const infiniteScroll = ()=>{
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");

    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

    };

    clearInterval(timeout);
    if(!wrapper.matches(":hover")) autoPlay();
}
carousel.addEventListener('scroll', infiniteScroll);
// auto play
const autoPlay = ()=>{
    if (window.innerWidth < 800 ) return;
    timeout = setInterval(()=>carousel.scrollLeft += firstCardWidth,2500);
    
}
autoPlay();

wrapper.addEventListener('mouseenter', clearInterval(timeout));
wrapper.addEventListener('mouseleave', autoPlay);

