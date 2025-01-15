/* project 스와이퍼 */
var mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,



});
var mainSwiper2 = new Swiper(".mainSwiper2", {
  slidesPerView: 'auto',
  spaceBetween: 20,


});
var mainSwiper3 = new Swiper(".mainSwiper3", {
  slidesPerView: 'auto',
  spaceBetween: 20,



});

/* skills  */
const menuItems = document.querySelectorAll('.menu-item');
const contentBoxes = document.querySelectorAll('.content-box');

// 초기 활성화 상태 설정
document.querySelector('.menu-item[data-content="js"]').classList.add('active');
document.querySelector('.content-box#js').classList.add('active');

// 이벤트 리스너 추가
menuItems.forEach(item => {
  // 마우스를 올렸을 때
  item.addEventListener('mouseover', () => {
    const contentId = item.getAttribute('data-content');

    // 왼쪽 메뉴 활성화 상태 변경
    menuItems.forEach(menu => {
      if (menu.getAttribute('data-content') === contentId) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    });

    // 오른쪽 콘텐츠 활성화 상태 변경
    contentBoxes.forEach(box => {
      if (box.id === contentId) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  });

  // 마우스를 떼었을 때
  item.addEventListener('mouseleave', () => {
    // 모든 메뉴의 활성화 상태 제거
    menuItems.forEach(menu => {
      menu.classList.remove('active');
    });

    // 모든 콘텐츠의 활성화 상태 제거
    contentBoxes.forEach(box => {
      box.classList.remove('active');
    });

    // 기본 활성화 메뉴와 콘텐츠를 다시 설정
    document.querySelector('.menu-item[data-content="js"]').classList.add('active');
    document.querySelector('.content-box#js').classList.add('active');
  });
});

/* 랜지 투명도 조절 */
const rangeInput = document.getElementById('ex-in');
const introSection = document.querySelector('.intro');

rangeInput.addEventListener('input', () => {
  // range 값에 따라 background-color의 투명도(a 값) 조절
  const opacityValue = rangeInput.value; // range 값 (0 ~ 1)
  introSection.style.backgroundColor = `rgba(255, 125, 78, ${opacityValue})`;
});

const text = `UI/UXデザイナーであり
Webエンジニア、
ユンダギョンです。`;

const typingEffect = (elementId, text, speed) => {
  const element = document.getElementById(elementId);
  let index = 0;

  const type = () => {
    if (index < text.length) {
      element.innerHTML += text[index] === "\n" ? "<br>" : text[index];
      index++;
      setTimeout(type, speed);
    }
  };

  type();
};

typingEffect("typing-effect", text, 100); // 100ms 간격으로 타이핑



/* desc 텍스트 애니메이션 */
const textElements = gsap.utils.toArray('#desc .desc-text');
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 90%',
      end: 'center 75%',
      scrub: true,
    },
  });
});

/* 스크롤 애니메이션 */
//모든 div 선택
let element = document.querySelectorAll('.animation',);

//화면에서 스크롤이 생겼을 때 발생하는 함수
window.addEventListener('scroll', function(){
  //스크롤 위치값 저장
  let scrollPosition = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  // 각 애니메이션 요소 반복
  element.forEach(element => {
    let elementPosition = element.offsetTop;
    if(scrollPosition > elementPosition - windowHeight + 500){
      element.classList.add('animate');
    }else{
      element.classList.remove('animate');
    }
  })
})
let element2 = document.querySelectorAll('.animation-intro',);

//화면에서 스크롤이 생겼을 때 발생하는 함수
window.addEventListener('scroll', function(){
  //스크롤 위치값 저장
  let scrollPosition = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  // 각 애니메이션 요소 반복
  element2.forEach(element2 => {
    let elementPosition = element2.offsetTop;
    if(scrollPosition > elementPosition - windowHeight + 300){
      element2.classList.add('animate');
    }else{
      element2.classList.remove('animate');
    }
  })
})

/* 이메일 복사 */
document.addEventListener("DOMContentLoaded", () => {
  const emailElement = document.getElementById("email");

  emailElement.addEventListener("dblclick", () => {
    // 클립보드에 텍스트 복사
    navigator.clipboard.writeText(emailElement.textContent).then(() => {
      // "Copied!" 상자 생성
      const copiedBox = document.createElement("div");
      copiedBox.id = "copied-box";
      copiedBox.textContent = "Copied!";
      document.body.appendChild(copiedBox);

      // 상자의 위치 설정
      const rect = emailElement.getBoundingClientRect();
      copiedBox.style.display = "block";

      // 2초 후 상자 제거
      setTimeout(() => {
        copiedBox.remove();
      }, 2000);
    });
  });
});
