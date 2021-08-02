function init(){
/******************* 보호생물 목록 **********************/

    const conUl = document.querySelector('.con_list');
    const b3 = document.querySelector('.b3_2 div');
    let animal,list='',ulList='';

    bthree = new XMLHttpRequest();
    bthree.open('get','./js/b3_animal.json');
    bthree.send(null);
    bthree.onload = function(){

        animal = JSON.parse(bthree.responseText)
        
        
        animal.list.forEach(function(v,k){
            ulList +=`<li>${v.name}</li>`
            list += `<figure class="animal">
            <div class="con_lef"> <small>${v.sort}</small>
            <h3>${v.name}</h3><p>${v.exp}</p>
            </div>
            <div class="con_rig"><img src="${v.img}"></div></figure>`
        })
        conUl.innerHTML = ulList;
        b3.innerHTML = list;

        conUl.children[0].classList.add('active');
        b3.children[0].classList.add('active');

        const aniList = document.querySelectorAll('.animal');
        const conList = document.querySelectorAll('.con_list li');
   
        let num=0;
        for(let i=0; i<conList.length; i++){
        conList[i].addEventListener('click',function(){
            
            conList[num].classList.remove('active');
            aniList[num].classList.remove('active');
    
                conList[i].classList.add('active');
                aniList[i].classList.add('active');
                num = i;  
            })
        }
/******************* 생물 학습 게시판  **********************/

        const stdTable = document.querySelector('.study tbody')
        let stdList='';
        animal.study.forEach(function(g,h){
            stdList +=  `<tr>
            <td>${g.yyyymm}<b>${g.dd}</b></td>
            <td><img src="${g.photo}">
                <a><p>${g.exp}</p></a></td>
            <td><a>${g.title}</a></td>
        </tr>`
        })
        stdTable.innerHTML = stdList;
       



    }
/****************** 서브네비 **********************/
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
window.onload = init;