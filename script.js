// Change navbar when scrolling

window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Show/Hide questions
const faqs =document.querySelectorAll('.faq')

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open');

		// change icon
		const icon = faq.querySelector('.faq_icon i');
		if(icon.className === 'uil uil-plus'){
			icon.className = 'uil uil-minus'
		}else{
			icon.className = 'uil uil-plus'
		}
	})
})

// show and hide nav-menu
const menu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
	menu.style.display = 'flex';
	closeBtn.style.display = 'inline-block';
	openBtn.style.display = 'none';
});

const closeNav = () => {
	menu.style.display = 'none';
	closeBtn.style.display = 'none';
	openBtn.style.display = 'inline-block';
}

// closeBtn.addEventListener('click', closeNav);

closeBtn.addEventListener('click', () => {
	menu.style.display = 'none';
	closeBtn.style.display = 'none';
	openBtn.style.display = 'flex';
});






