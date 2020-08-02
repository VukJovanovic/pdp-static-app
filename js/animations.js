const showWeekDays = (days) => {
	TweenMax.to(days[0].parentNode, 0.8, {
		padding: '1.5rem',
		height: 'auto',
	});
	let delay = 0.5;
	days.forEach((day) => {
		TweenMax.to(day, 0.6, {
			y: '10px',
			opacity: 1,
			delay,
		});
		delay += 0.2;
	});
};

const hideWeekDays = (days) => {
	let delay = 0;
	days.forEach((day) => {
		TweenMax.to(day, 0.6, {
			y: '-50px',
			opacity: 0,
			delay,
		});
		delay += 0.2;
	});
	TweenMax.to(days[0].parentNode, 0.4, {
		padding: '0rem 1.5rem',
		height: 0,
		delay,
	});
};

export { showWeekDays, hideWeekDays };
