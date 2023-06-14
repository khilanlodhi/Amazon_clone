const leftbtn=document.querySelector(".l-btn");
const rightbtn=document.querySelector(".r-btn");

rightbtn.addEventListener("click",function(event){
    console.log("done")
  const conent=document.querySelector('.product-slide');
  conent.scrollLeft +=1100;
  event.preventDefault();

});
leftbtn.addEventListener("click",function(event){
    console.log("done")
  const conent=document.querySelector('.product-slide');
  conent.scrollLeft -=1100;
  event.preventDefault();
});

const leftbtn1=document.querySelector(".btn-1b");
const rightbtn1=document.querySelector(".btn-1a");

rightbtn1.addEventListener("click",function(event){
    console.log("done")
  const conent=document.querySelector('.product-slide-1');
  conent.scrollLeft +=1100;
  event.preventDefault();

});
leftbtn1.addEventListener("click",function(event){
    console.log("done")
  const conent=document.querySelector('.product-slide-1');
  conent.scrollLeft -=1100;
  event.preventDefault();
});

const leftbtn2=document.querySelector(".btn-2b");
const rightbtn2=document.querySelector(".btn-2a");

rightbtn2.addEventListener("click",function(event){
    console.log("done")
  const conent=document.querySelector('.product-slide2');
  conent.scrollLeft +=1100;
  event.preventDefault();

});
leftbtn2.addEventListener("click",function(event){
    console.log("done")
  const conent=document.querySelector('.product-slide2');
  conent.scrollLeft -=1100;
  event.preventDefault();
});

const backtop=document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
})

const sidebar=document.querySelector(".sidebar");
const xmark=document.querySelector(".fa-xmark");
const second1=document.querySelector(".second-1");
const black=document.querySelector(".black")
const container=document.querySelector(".container");

second1.addEventListener("click",()=>{
  sidebar.classList.add("active");
  xmark.classList.add("active");
  black.classList.add("active")
  document.body.classList.add("stop-scroll");
})

black.addEventListener("click",()=>{
  sidebar.classList.remove("active");
  xmark.classList.remove("active");
  black.classList.remove("active")
  document.body.classList.remove("stop-scroll");
})
xmark.addEventListener("click",()=>{
  sidebar.classList.remove("active");
  xmark.classList.remove("active");
  black.classList.remove("active")
  document.body.classList.remove("stop-scroll");
})


const sign=document.querySelector(".sign");
const container1=document.querySelector(".container");
const hdnsign=document.querySelector(".hdn-sign");


sign.addEventListener("click",()=>{
  hdnsign.classList.add("active");
  document.body.classList.add("stop-scroll");
})
container1.addEventListener("click",()=>{
  hdnsign.classList.remove("active");
  document.body.classList.remove("stop-scroll");
})
const right=document.querySelector(".right");
const lang=document.querySelector(".language");
const container2=document.querySelector(".container");
right.addEventListener("click", ()=>{
  lang.classList.add("active");
  document.body.classList.add("stop-scroll");
})
container2.addEventListener("click", ()=>{
  lang.classList.remove("active");
  document.body.classList.remove("stop-scroll");
})



