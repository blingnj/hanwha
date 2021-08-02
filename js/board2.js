function init(){
/******************* 구조활동 게시판  **********************/
    const elUl = document.querySelector('.rescue')
    const b2Btn = document.querySelector('.bt_more1')

    let btwo, res, list='';
    
    btwo = new XMLHttpRequest();
    btwo.open('get','./js/b2_rescue.json');
    btwo.send(null);
    btwo.onload = function(){

        res = JSON.parse(btwo.responseText)
        // console.log(res.work)

        res.rescue.forEach(function(v,k){

            list += `<li><div class="case_img">
                <a href="b2-rescue.html"><img src="${v.photo}"></a></div>
                <div class="case_con"><a href="#">
                        <h3>${v.name}</h3>
                        <p>${v.spot}</p>
                        <p>${v.date}</p>
                    </a></div></li>`

            if(k<6){
                elUl.innerHTML = list;
            }else{
                b2Btn.addEventListener('click',function(){
                elUl.innerHTML = list
                })
            }
        })
    }

/******************* 보존활동 게시판  **********************/
    const elUl2 = document.querySelector('.conserve')
    const b2Btn2 = document.querySelector('.bt_more2')

    let con, btwo2, conList='';

    btwo2 = new XMLHttpRequest();
    btwo2.open('get','./js/b2_conserve.json');
    btwo2.send(null)
    btwo2.onload = function(){

        con = JSON.parse(btwo2.responseText)
        
        con.conserve.forEach(function(v,k){
            conList += `<li><div class="conserve_img">
            <a href="b2-conserve.html"><img src="${v.photo}">
            </a></div>
            <div class="conserve_con"><a href="#">
            <h3>${v.tit}</h3>
            <p>${v.con}</p>
            </a></div></li>`

            if(k<6){
                elUl2.innerHTML = conList;
            }else{
                b2Btn2.addEventListener('click',function(){
                    elUl2.innerHTML = conList;
                })
            }
        })




    }
/******************* 법률정보  **********************/
    const b2Btn3 = document.querySelectorAll('.b2_3 p a');
    const b2_law = document.querySelectorAll('.law_aft');

    let num=0;
    for(let i=0; i<b2Btn3.length; i++){
        b2Btn3[i].addEventListener('click',function(){
            b2Btn3[num].classList.remove('active');
            b2_law[num].classList.remove('active');

            b2Btn3[i].classList.add('active');
            b2_law[i].classList.add('active');
            num = i;  
        })
    }

/****************** 서브네비 **********************/
const comHeader = document.querySelector('.top_common').offsetHeight;
const comNav = document.querySelectorAll('.com_nav li');
const elArt = document.querySelectorAll('article');
const winH = window.innerHeight/1.5

let num2=0;
for(let i=0; i<comNav.length; i++){
    comNav[i].addEventListener('click',function(){
        comNav[num2].classList.remove('active')
        comNav[i].classList.add('active')

        window.scrollTo({
            top:elArt[i].offsetTop-comHeader,
           behavior:"smooth"});

        num2=i;
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

}
window.onload = init; 
