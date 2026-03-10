let e;
let e1;

function generate() {
	e = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
	e1 = e * 6 + 204;
	document.getElementById("e").innerText = e;
}
function ot() {
	const otvet = Number(document.getElementById("otvet").value);
	let text = document.getElementById("text");
	if (otvet === e1) {
		Show('3');
		dost('Вы открыли дверь!');
	}
	else {
		text = "Неправильно, ответ неверный!";
		document.getElementById("text").innerHTML = text;
	}
}

function dost(dop) {
	let dos = document.getElementById('dos');
    dos.innerText += "\n" + dop;
}

function resh() {
	let input0 = document.getElementById("input0").value.toLowerCase().trim();
	let text1 = document.getElementById("text1");
	let correctAnswer = 'эхо';
	if (input0 === correctAnswer) {
		Show('4');
		dost('Вы разгадали загадку!')
	}
	else if (input0 === '3101') {
		Show('21');
		dost('Вы активировали чит-код!');
	}
	else {
		text1 = 'Неправильно!';
		document.getElementById('text1').innerHTML = text1;
	}
}

function vop() {
	const otvet1 = document.getElementById("otvet1").value.toLowerCase().trim();
	if (otvet1 === 'яма' || otvet1 === 'дыра') {
		Show('7');
		dost('Правильное решение задачи!');
	} 
	else {
		document.getElementById("text2").innerHTML = 'Неправильно!';
	}
}

let timeInterval;
let time = 5;

const timeElement = document.getElementById('time');

function startCoutDown(tt) {
	time = tt;
	timeElement.innerText = time;

	timeInterval = setInterval(() => {
		time--;
		timeElement.innerText = time;

		if (time <= 0) {
			clearInterval(timeInterval);
			
		}
	}, 1000);
}

function but() {
	if (time > 0) {
		clearInterval(timeInterval);
		Show('12');
		dost('Вы успели нажать кнопку!');
	}
	else {
		document.getElementById('text4').innerText = 'Вы не успели нажать кнопку, Game Over';
	}
}


function but1(choise, config) {
	const InputElement = document.getElementById(config);
	if (choise === true) {
		if (time > 0) {
			clearInterval(timeInterval);
		    Show('14');
		    dost('Побег от капибары');
	    }
	    else {
		    InputElement.innerText = 'Game Over! Он вас догнал';
		    console.log('привет');
	    }
	}
	else {
		InputElement.innerText = 'Тут тупик';
	}  
}

function but2() {
	if (time > 0) {
		clearInterval(timeInterval);
		Show('22');
		dost('Вы успели нажать кнопку!');
	}
	else {
		document.getElementById('text13').innerText = 'Вы не успели нажать кнопку, Game Over';
	}
}

function reshh() {
	const X = document.getElementById("x").value;
	const tex = document.getElementById("otvett");
	if (X === '5') {
		Show('23');
		dost('Вы разблокировали дверь!');
	} else {
		tex.innerText = 'Неправильно!';
	}
}


function Show(element) {
	const blocks = document.querySelectorAll(".block");
	blocks.forEach(el => el.classList.add("hidden"));
	const targetBlock = document.getElementById(element);
	if (targetBlock) {
		targetBlock.classList.remove('hidden');
	}
	if (element === '2') {
        generate();
    }
    if (element === '11') {
    	startCoutDown(5);
    }
    if (element == '13') {
    	startCoutDown(5);
    }
    if (element == '14') {
    	startCoutDown(5);
    }
    if (element == '15') {
    	startCoutDown(5);
    }
    if (element == '16') {
    	startCoutDown(5);
    }
    if (element == '17') {
    	startCoutDown(5);
    }
    if (element == '18') {
    	startCoutDown(5);
    }
    if (element == '19') {
    	startCoutDown(5);
    }
    if (element == '20') {
    	startCoutDown(5);
    }
    if (element == '21') {
    	startCoutDown(5);
    }
}