import {
	showWeekDays,
	hideWeekDays,
	showSidebar,
	hideSidebar,
} from './animations';

// ***************
// Animacije - Nedelje i dani
// ***************

const firstWeekBtn = document.querySelector('#firstWeek');
const firstWeekDays = [...document.querySelectorAll('.firstWeekDays')];

const secondWeekBtn = document.querySelector('#secondWeek');
const secondWeekDays = [...document.querySelectorAll('.secondWeekDays')];

if (firstWeekBtn) {
	firstWeekBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (firstWeekBtn.classList.contains('activeWeek')) {
			hideWeekDays(firstWeekDays);
			firstWeekBtn.classList.remove('activeWeek');
		} else {
			showWeekDays(firstWeekDays);
			firstWeekBtn.classList.add('activeWeek');
		}
	});
}

if (secondWeekBtn) {
	secondWeekBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (secondWeekBtn.classList.contains('activeWeek')) {
			hideWeekDays(secondWeekDays);
			secondWeekBtn.classList.remove('activeWeek');
		} else {
			showWeekDays(secondWeekDays);
			secondWeekBtn.classList.add('activeWeek');
		}
	});
}

// ***************
// Funkcionalnost mobilnog menija
// ***************
const mobileMenuBtn = document.querySelector('.header__burger');
const closeMobileMenuBtn = document.querySelector('.header__mobileCloseBtn');

if (mobileMenuBtn) {
	mobileMenuBtn.addEventListener('click', (e) => {
		e.preventDefault();
		showSidebar();
	});
}

if (closeMobileMenuBtn) {
	closeMobileMenuBtn.addEventListener('click', (e) => {
		e.preventDefault();
		hideSidebar();
	});
}
