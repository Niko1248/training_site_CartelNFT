var acc = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordion__body = this.nextElementSibling;
    if (accordion__body.style.maxHeight){
		accordion__body.style.maxHeight = null;
    } else {
		accordion__body.style.maxHeight = accordion__body.scrollHeight + "px";
    } 
  });
}

(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50){
			header.classList.add('header_active');
		} else{
			header.classList.remove('header_active')
		}
	};
}());


// Burger menu

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__nav-close')
	const menuLinks = document.querySelectorAll('.header__link')
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	});
	if (window.innerWidth <= 767) {
		for (let i = 0; i < menuLinks.length; i += 1) {
			menuLinks[i].addEventListener('click', () => {
				menu.classList.remove('header__nav_active');
			});
		}	
	}
}());