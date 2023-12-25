
let menuBtn = document.querySelector('.menu__icon');
let menu = document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

function sayHello(){
	alert(`Hello!`)
}
// sayHello()

// let number = 9;

// function youSayGoodBye() {

// 	alert('Good Bye!');

// 	function andISayHello(){
// 		alert('Hello!');
// 	}

// 	return andISayHello;
// }

// let something = youSayGoodBye();

// something();



function stopWatch() {
	let startTime = Date.now();

	function getDelay() {
		let elapsedTime = Date.now() - startTime;
		alert(elapsedTime);
	}

	return getDelay;
}

let timer = stopWatch();

for (let i = 0; i < 1000000; i++) {
	let foo = Math.random() * 10000;
}

timer();