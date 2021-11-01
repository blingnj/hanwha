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

// $('.open').hide()
let openHei=0;
$('.logo li').on('click',function(){
    openHei = $(this).find('.open-r').height();
    if( $(this).find('.open').hasClass('active')){
        $(this).find('.open').removeClass('active').height(0); 
        $(this).removeClass('active');
        return;   
    }
   
    $('.logo li').find('.open').removeClass('active').height(0);
    $('.logo li').removeClass('active')
    $(this).find('.open').addClass('active').height(openHei);
    $(this).addClass('active')
   
});



// const popBtn = document.querySelectorAll('.open-r div a:nth-child(2)')
// const popImg = document.querySelectorAll('.popimg a')

// for(let i=0; i<popImg.length; i++){
//     popBtn[i].addEventListener('click',function(){
//         popImg[i].classList.add('active')
//     })
// }
////----------------------------------------------------------지도api------------------
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function setCenter() {            
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
    
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
}

function panTo() {
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
    
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);            
}        

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);