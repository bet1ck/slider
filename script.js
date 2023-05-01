let prev = document.querySelector(".slide__btn-prev");
let next = document.querySelector(".slide__btn-next");
const slide = document.querySelector(".slide__block_link");

let position = 0;

next.onclick = () => {
if(position>=2250){
      position=0;
      slide.style.left = -position + "px";
    }else{
      position=position + 750;
      slide.style.left = -position + "px";
    }
  console.log(position,"вперед");
};


prev.onclick = () => {
if(position==0){
      position=2250;
      slide.style.left = -position + "px";
    }else{
      position=position - 750;
      slide.style.left = -position + "px";
    }
  console.log(position,"назад");
};
