function init(){
    const conImg = document.querySelector('.slide_img');

    let animal, ulList='';

    bthree = new XMLHttpRequest();
    bthree.open('get','./js/b3_animal.json');
    bthree.send(null);
    bthree.onload = function(){

        animal = JSON.parse(bthree.responseText)
        
        animal.list.forEach(function(v,k){
            ulList +=`<a>
                        <img src="${v.img}">
                        <span>${v.name}<br>
                        ${v.enname}</span>
                    </a>`
        })
        conImg.innerHTML = ulList;
        slide222()
    }
}
window.onload = init;


/*******************  첫페이지 스크롤  **********************/

const elArt = document.querySelectorAll('.del')

let elHei;
let winHei = window.innerHeight;

window.addEventListener('scroll',function(){

    for(let i=0; i<elArt.length; i++){
        elHei = elArt[i].offsetTop;

        if(elHei-winHei+250  <= window.scrollY){
            elArt[i].classList.remove(`del`)
            elArt[i].classList.add(`main${i+3}`)
        }
    }
});

/*******************  메인슬라이드  **********************/
$(".slider").slick({
    arrows:false, 
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500,
    fade:true
  });

  
//   let loop;
//   function interval(){    
//       loop = setInterval(function(){
//           if(idx < image.length-4){
//             idx++;
//           }else{
//             idx=0;
//           }
//           slide();
//       },2000);  
//   }  
//   interval();

//   const elSlide = document.querySelector('.slide')
//   elSlide.addEventListener('mouseenter',function(){   
//       clearInterval(loop);
//   });
//   elSlide.addEventListener('mouseleave',function(){   
//       interval();
//   });



/******************* 생물 소개 이미지 슬라이드 버튼 **********************/
function slide222(){
    const elBtn = document.querySelectorAll('.btn a');
    const image = document.querySelectorAll('.slide_img a')
    const conImg = document.querySelector('.slide_img');
        
    let idx=0;
    for(let i=0; i<elBtn.length; i++){
        elBtn[i].addEventListener('click',function(){
            if(i==1){
                if(idx < image.length-4) idx ++;
            }else{
                if(idx > 0 ) idx --;
            }
            slide();
        });
    }
      function slide(){           
        conImg.style=`transform:translateX(${'-320'*idx}px)`
    }

}
