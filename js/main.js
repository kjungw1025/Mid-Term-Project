/*===== MENU SHOW =====*/
//https://goddino.tistory.com/129?category=902116 토글 적용법
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', ()=> {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  // Active link 각각 메뉴 목록 선택시 하단바가 이동
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//-----------------------------------------------------------------------Header----------------------------------
