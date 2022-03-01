const searchEl = document.querySelector('.search');  //클래스가 이거인걸 찾아서 변수에 할당함
const searchInputEl = searchEl.querySelector('input');//document 는 html태그라고 봐도 무방하다

searchEl.addEventListener('click',function() {

        searchInputEl.focus();      //돋보기 누르면 인풋에 포커스

});     //이벤트 추가

searchInputEl.addEventListener('focus',
    function(){
            searchEl.classList.add('focused');  // input이 포커스 되면 focused를 클래스리스트에 추갛ㅁ   
            searchInputEl.setAttribute('placeHolder','통합검색');   //html 속성 값 placeHolde값 변경
    }
);
searchInputEl.addEventListener('blur',
    function(){
            searchEl.classList.remove("focuse");
            searchInputEl.setAttribute('placeHolder','');
    }
)   //여기서 추가하는 classList는 위에서 찾은 html 태그안에 그대로 추가됨
    // ex - <div class="search focused" 이런식으로 추가되고 지울 수 있음

const badgeEl = document.querySelector('header .badges');
//window는 브라우저에 하나의 탭을 의미한다
//하나의 창이고 브라우저에 명령들을 가지고 있따 우리가 보고있는 화면이라고 보면도미
window.addEventListener('scroll', 
    _.throttle(function(){
            console.log(window.scrollY);
            if(window.scrollY > 500){         //scroll 위치
                      //사라짐
                      gsap.to(badgeEl, .6 , {
                                opacity: 0 ,     //투명도가 0으로 0.6초에 걸쳐 실행
                                display: 'none'         //투명도가 0이 되면 display none 실행
                      });        //gsap은 애니메이션처리 gsap.to(요소,지속시간,옵션)-옵션은 css 속성
            }else {     
                 //보임
                        gsap.to(badgeEl, .6 ,{
                                opacity: 1,
                                display: 'block'
                        })
            }

    },300)//0.3초 단위로 부하를 주어서 함수가 계속 실행되는 걸 방지하기 위해 
                //lodash에서 제공하는 throttle을 사용하여 막음
                //결국 일정시간동안 한 번씩 지속되게 하였다
);
//_.throttle이라는 메소드를 실행한다 그 이 함수에 첫번쨰 인수로 실행될 함수
//그리고 두 번째 인수로는 몇 초에 한 번씩 실행될지 결정할 시간을 적는다 1000이 1초
//window 객체는 html이 실행되고 있는 화면을 의미함
//scroll은 이벤트 리스너중 하나로 화면이 스크롤 되면 함수 실행

const fadeEls = document.querySelectorAll('.visual .fade-in');"파라미터로 주어진 값과 일치하는 클래스를 모두 찾아 변수에 할당"
fadeEls.forEach(function(fadeEl,index){       //여기에 있는 파라미터는 처음부터 찾는 fadeEls중 하나의 요소이다 두번째 파라미터는 index로 반복되는 횟수를 나타냄
        gsap.to(fadeEl,1,{
                delay:(index+1)* .7,       //delay는 gsap옵션이고 이 시간 뒤에 애니메이션 실행
                opacity: 1              //index는 0부터 시작한다 첫 번째는 0.7 1.4 2.1이런식으로 반복된다

        })
});      //html에서 찾은 fade-in 요소 개수만큼 forEach파라미터로 받은 인수가 실행(함수)


//new Swiper(클래스선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
        direction:'vertical',    //direction 방향 옵션 설정
        autoplay:true,              //autoplay는 자동재생여부
        loop:true                       //loop는 반복재생여부
});

new Swiper('.promotion .swiper-container',{
        direction:'horizontal',          //디폴트 값으로 호리존탈들어감
        slidesPerView:3,        //한번에 보여줄 슬라이드 개수
        spaceBetween: 10,       //슬라이드 사이 여백 10px 씩 뛰어짐
        centeredSlides:true,    //1번 슬라이드가 가운데 보이기
        loop:true,
        autoplay:{
                delay:3000     //3초를 의미함
        },
        pagination:{
                el : '.promotion .swiper-pagination',
                clickable:true
        },
        navigation: {
                prevEl : '.promotion .swiper-prev',
                nextEl : '.promotion .swiper-next'
        }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
//const는 변환 ㄴ let은 변환가능
promotionToggleBtn.addEventListener('click',function(){
                isHidePromotion = !isHidePromotion;     //처음 누르면 트루가 대입된다
                if(isHidePromotion){
                        //숨김처리
                        promotionEl.classList.add('hide');
                }else{
                        //보임처리
                        promotionEl.classList.remove('hide');
                        //클래스를 더하고 빼면서 css에서 제어하는 것이 좋다 
                }
});



function floatingObject(selector,delay,size){
        gsap.to(selector,random(1.5,2.5),{
                y: size,           /*y축으로 얼마만큼 움지=ㄱ이면서 애니메이션효과처리하냐 */
                x: random(0,500),
                repeat: -1 ,             //몇 번 반복할 것인지 -1로 지정하면 무한반복이다
                yoyo:true ,          //한번 재생한 애니메이션을 다시 반대로 되돌림
                ease:Power1.easeInOut,   //ease를 통해 우리가 원하는 방식으로 조절이 간으하다
                delay:random(0,delay)        //1초 멈추고 다시 애니메이션 실행
        });     
}
function random(min,max){
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


floatingObject('.floating',1,15);     //   gsap요소 부분에 css 선택자가 와도 된다
floatingObject('.floating2',.5,15);     
floatingObject('.floating3',1.5,20);    



const spyEls = document.querySelectorAll('section.scroll-spy');
        spyEls.forEach(function(spyEl){
        new ScrollMagic
        .Scene({
              triggerElement:spyEl,     //라이브러리를 통해 감시하고 있는 대상이 지정된다 보여짐 여부를 감시할 요소지정
              triggerHook:.8            //뷰포트(화면) 에서 맨위(시작)은 0이고 맨아래(끝)은 1이다       0.8부분에 hook(갈고리)를 검 감시하는 요소가 0.8을 지나면 어떤 것이 trigger가 실행된다

        })
        .setClassToggle(spyEl,'show')    //토글할 요소와 토글할 클래스 이름을 지정한다       
        .addTo(new ScrollMagic.Controller())      //ScrollMagic에 필요한 컨트롤러를 addTo로 추가한다      //setClassToggle()   -html 클래스 설정    //Scene은 스코롤 매직이라는 라이브러리를 통해서 특정 요소를 감시하는 요소를 지정해주는 메소드이다
})