import { showWeekDays, hideWeekDays } from './animations';

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
