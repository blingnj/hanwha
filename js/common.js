$(function(){
    $('header').load('inc.html header > div',tog );
    $('footer').load('inc.html footer > article');
        
    function tog(){
        tab()
        $('.menu_trigger').on('click',function(){
            $('.sub_tri').toggleClass('active')

        })
    }

/*********************** 탭 클릭시 해당 페이지 이동 **************************/ 
    function tab(){

        const mainNav = document.querySelectorAll('.main_nav > li')
        const subNav = [];

        mainNav.forEach(function(a,i){
            subNav.push(mainNav[i].querySelectorAll('.menu > li'));
            a.addEventListener('click',function(e){
                localStorage.pageName = i;
            });
        })
        
        subNav.forEach(function(s,v){
            s.forEach(function(li,key){
                li.addEventListener('click',function(e){
                    // e.stopPropagation();
                    localStorage.subName = key;
                });
            })            
        })

        function changeUrl(){
            try{
                //에러가 없을때만 동작
                mainNav[localStorage.pageName].classList.add('active');
                mainNav[localStorage.pageName].querySelectorAll('.menu > li')[localStorage.subName].classList.add('active');

                const comHeader = document.querySelector('.top_common').offsetHeight;
                const elArt = document.querySelectorAll('article');
                
                setTimeout(function(){
                    window.scrollTo({
                        top:elArt[localStorage.subName].offsetTop-comHeader,
                        behavior:"smooth"
                    });
                },100)
            }catch{
                //에러 발생시 동작
                localStorage.pageName = 'a';
                localStorage.subName = 0;
            }
        } changeUrl();
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



