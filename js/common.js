$(function(){
    $('header').load('inc.html header > div',tog);
    $('footer').load('inc.html footer > article');
        
    function tog(){
        $('.menu_trigger').on('click',function(){
            $('.sub_tri').toggleClass('active')
        })
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

