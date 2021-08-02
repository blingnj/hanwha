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
            comNav[0].classList.add('active')
        }
        if(scrollY>elArt[1].offsetTop-winH){
            comNav[0].classList.remove('active') 

            comNav[1].classList.add('active')
        }
    })
}

/******************* 클릭시 카드 회전 **********************/

const elli = document.querySelectorAll('.board_01 li');
const elflip = document.querySelectorAll('.flip');


for(let i=0; i<elli.length; i++){
    elli[i].addEventListener('click',function(){
        elflip[i].classList.toggle('active');
    })
}

/******************* JSON **********************/
function init(){

    const elTable = document.querySelector('.search2 tbody')
    const elUp = document.querySelector('.res-pop div')
    const pgNum = document.querySelectorAll('pg_num li')

    let table, tb, img, list ='', up='';

    table = new XMLHttpRequest();
    table.open('get','./js/b1_table.json');
    table.send(null);
    table.onload = function(){

        tb = JSON.parse(table.responseText)


        tb.search.forEach(function(v,k){     
            list += `<tr>
                <td>${v.date}</td><td>${v.title}</td>
                <td>${v.center}</td><td>${v.researcher}</td>
            </tr>` 
            if(k<10){elTable.innerHTML = list;}
            // else{
            //     for(let i=0; i<pgNum.length; i++){
            //         pgNum[i].addEventListener('click',function(){
            //             if(k>=10 && k <20){
            //             elTable.innerHTML = list;
            //             }   
            //         })
            //     }
        });



     
/******************* 팝업창 **********************/

        const elTitle = document.querySelectorAll('.search2 tbody tr td:nth-child(2)');
        const elPop = document.querySelector('.res-pop');
        const elNav = document.querySelector('.res-pop nav');
        const btBefore = document.querySelector('.popbtn a:nth-child(1)');
        const btAfter = document.querySelector('.popbtn a:nth-child(2)');
        const body = document.querySelector('body');
        
        for(let k=0; k<elTitle.length; k++){
            elTitle[k].addEventListener('click',function(){
                elPop.classList.add('active');
                body.classList.add('active');
                dataChange(k)
                
                idx=k;
            });
        } 
            btBefore.addEventListener('click',function(){
                --idx
                dataChange(idx)
            })
            btAfter.addEventListener('click',function(){
                ++idx
                dataChange(idx)
            })
            elNav.addEventListener('click',function(){
                elPop.classList.remove('active')
                body.classList.remove('active');
            })
        
        function dataChange(k){
            img = tb.search[k].img;
            up = `<img src="${img}">`; 
            elUp.innerHTML = up;
        }



/******************* 검색 **********************/

        // const elInput = document.querySelector('.ex2 input[type=search]'),
        //         elBtn = document.querySelector('.search1 li button'),
        //         elTd = document.querySelectorAll('.search2 tbody tr td)');

        // elBtn.addEventListener('click',function(){
            

        // })

        //검색//

    }
}
window.onload = init;
