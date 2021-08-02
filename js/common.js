$(function(){
    $('header').load('inc.html header > div',tog );
    $('footer').load('inc.html footer > article');
        
    function tog(){
        tab()
        $('.menu_trigger').on('click',function(){
            $('.sub_tri').toggleClass('active')

        })

/*********************** 탭 클릭시 해당 페이지 이동 **************************/ 
    function tab(){

        const mainNav = document.querySelectorAll('.main_nav> li')
        const subNav = document.querySelectorAll('.menu > li')

        mainNav.forEach(function(a,i){
            a.addEventListener('click',function(e){
                localStorage.pageName = i;
            });
        })

        subNav.forEach(function(s,v){

            s.addEventListener('click',function(e){
                localStorage.subName = v;
            });
        })


        switch(localStorage.pageName){
            case '0' : ; 
            break;
            case '1' : ; 
            break;
            case '2' : ; 
            break;
            case '3' : ;
             break;
        }

        switch(localStorage.subName){
            case '0' : sub1() ; 
            break;
            case '1' : ; 
            break;
            case '2' : ; 
            break;
            case '3' : ;
             break;
        }
        function sub1(){
            const comHeader = document.querySelector('.top_common').offsetHeight;
            const comNav = document.querySelectorAll('.com_nav li');
            const elArt = document.querySelectorAll('article')
            
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
            }
        }
    }
}   

/****************** 스크롤 탑버튼 **********************/

    const elTop = document.querySelector('aside');
    window.addEventListener('scroll',function(){
        if(window.innerHeight < window.scrollY + 700){
            elTop.classList.add('active');
        }else{
            elTop.classList.remove('active');
        };
    });
    const elCon = document.querySelectorAll('main');
    const elHeader = document.querySelector('header').offsetHeight;

    elTop.addEventListener('click',function(e){
        e.preventDefault();

        window.scrollTo({
            top:elCon.offsetTop-elHeader,
            behavior:"smooth"
        });
    })
});



