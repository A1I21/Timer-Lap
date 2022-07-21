const timerdiv = document.getElementById('timer');
const startbtn = document.getElementById('start-btn');

let didstart = false;
let timer;

const startBtnF = (event) => {
	if (didstart) {
		clearInterval(timer);
		timerdiv.innerText = '0';
		startbtn.innerText = 'Start';
		didstart = false;

		// document.body.style.background = ' #ffcccb';
		document.getElementById('start-btn').style.backgroundColor = '#7dd800';
	} else {
		startTimer();
		startbtn.innerText = 'Stop';
		didstart = true;

		document.getElementById('start-btn').style.backgroundColor = '#ffcccb';
		// document.body.style.background = '#7dd800';
	}
};

function startTimer() {
	const dateRun = new Date().valueOf() + 1000;

	const dateNow = new Date().valueOf() + 1000;
	const newTimer = ((dateNow - dateRun) / 1000).toFixed(0);
	timerdiv.innerText = newTimer;

	timer = setInterval(() => {
		const dateNow = new Date().valueOf() + 1000;
		const newTimer = ((dateNow - dateRun) / 1000).toFixed(0);
		timerdiv.innerText = newTimer;
	}, 500);
}
