var cookie = 0;
var tort = 0;
var secAdd = 0;
var farm1lvl = 0;

const counter = document.querySelector('#counter');
const counter2 = document.querySelector('#counter2');
const opisanie = document.querySelector('#opisanie');

function add(){
	cookie += 1;
}

function farm1() {
	if (cookie > 99) {
		secAdd += 1;
		cookie -= 100;
		farm1lvl += 1;
	}
}

//function fps(){

//}

let fpsCookie = setInterval(() => counter.textContent = cookie);
let fpsTort = setInterval(() => counter2.textContent = 'ТОРТОВ = ' + tort);
let farm = setInterval(() => cookie += secAdd, 1000);
let fpsopisanie = setInterval(() => opisanie.textContent = farm1lvl + ' печенек/сек');