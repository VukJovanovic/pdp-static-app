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

// ***************
// animacije mobilnog menija
// ***************

const sidebarMenu = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebarOverlay');
const sidebarNavigation = document.querySelector('.sidebar__navigation');
const closeSidebarBtn = document.querySelector('.header__mobileCloseBtn');
const openSidebarBtn = document.querySelector('.header__burger');

const showSidebar = () => {
	TweenMax.to(sidebarMenu, 0.6, {
		width: '70vw',
	});
	TweenMax.to(sidebarOverlay, 0.6, {
		width: '30vw',
	});
	TweenMax.to(openSidebarBtn, 0.4, {
		display: 'none',
		opacity: 0,
		x: '5px',
	});
	TweenMax.to(closeSidebarBtn, 0.4, {
		display: 'block',
		opacity: 1,
		x: '0px',
		delay: 0.5,
	});
	TweenMax.to(sidebarNavigation, 0.6, {
		opacity: 1,
		delay: 0.6,
	});
};

const hideSidebar = () => {
	TweenMax.to(sidebarNavigation, 0.3, {
		opacity: 0,
	});
	TweenMax.to(sidebarMenu, 0.6, {
		width: '0',
		delay: 0.2,
	});
	TweenMax.to(sidebarOverlay, 0.6, {
		width: '0',
		delay: 0.2,
	});
	TweenMax.to(closeSidebarBtn, 0.4, {
		display: 'none',
		opacity: 0,
		x: '5px',
		delay: 0.1,
	});
	TweenMax.to(openSidebarBtn, 0.4, {
		display: 'block',
		opacity: 1,
		x: '0px',
		delay: 0.5,
	});
};

export {showSidebar, hideSidebar };
