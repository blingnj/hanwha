/****************** 서브네비 **********************/
const comHeader = document.querySelector('.top_common').offsetHeight;
const comNav = document.querySelectorAll('.com_nav li');
const elArt = document.querySelectorAll('article')
const winH = window.innerHeight/1.5

let num=0;
for(let i=0; i<comNav.length; i++){
    comNav[i].addEventListener('click',function(){


        comNav[num].classList.remove('active')
        comNav[i].classList.add('active')

        window.scrollTo({
        top:elArt[i].offsetTop-comHeader,
        behavior:"smooth"});

        num=i;
    });
    
    window.addEventListener('scroll',function(){
        if(scrollY>elArt[0].offsetTop-winH){
            comNav[1].classList.remove('active') 
            comNav[2].classList.remove('active') 

            comNav[0].classList.add('active')
        }
        if(scrollY>elArt[1].offsetTop-winH){
            comNav[2].classList.remove('active') 
            comNav[0].classList.remove('active') 

            comNav[1].classList.add('active')
        }
        if(scrollY>elArt[2].offsetTop-winH){
            comNav[0].classList.remove('active') 
            comNav[1].classList.remove('active') 

            comNav[2].classList.add('active')
        } 
    })
}

//*********************센터보기// 슬라이드 다운&업***************/
// let x;
// const elLi= document.querySelectorAll('.logo li')
// const elOpen = document.querySelectorAll('.open')
// const openAll = document.querySelectorAll('.openall')
// for(let u=0; u<elOpen.length; u++){
//     elLi[u].addEventListener('click',function(){
//         elOpen[u].classList.toggle('active')
//         openAll[u].classList.toggle('active')

//         x=u;
//     })
// }

$('.open').hide()
$('.logo li').on('click',function(){
    if( $(this).find('.open').hasClass('active')){
        $(this).find('.open').removeClass('active').stop().slideUp();
        $(this).removeClass('active');
        return;
    }
    $('.logo li').find('.open').removeClass('active').stop().slideUp();
    $('.logo li').removeClass('active');
    $(this).find('.open').addClass('active').stop().slideDown();
    $(this).addClass('active');
});
