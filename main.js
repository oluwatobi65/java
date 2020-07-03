//select DOM ELEMENT
const time=document.getElementById('time')
const greeting=document.getElementById('greeting')
const name=document.getElementById('name')
const focus=document.getElementById('focus')

//set AM or Pm
const showamPm = true;

//Show Time

function showTime(){
	let today= new Date()
		hour= today.getHours()
		min= today.getMinutes()
		sec = today.getSeconds()


 // set PM or Am
 const amPm= hour>=12 ? 'PM' : 'AM'

 // 12hr format
 hour=  hour % 12 || 12;

 // Output Time

 time.innerHTML= `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showamPm ? amPm : ''}`;

 setTimeout(showTime, 1000);
}

// add zero
function addZero(n){
	return(parseInt(n, 10) <10 ? '0': '') + n;
}
// Run

// set backgrounds and greeting

function setBgGreet(){
	let today= new Date(),
		hour = today.getHours();

	if (hour < 12) {
		// morning
		document.body.style.backgroundImage="url(morning.jpg)";
		greeting.textContent= 'Good morning';
		document.body.style.backgroundSize='Cover';

	} else if (hour < 20) {
		// afternoon
		document.body.style.backgroundImage="url(afternoon.jpg)";
		greeting.textContent= 'Good afternoon';
		document.body.style.backgroundSize='Cover';
	} else{ // evening
		document.body.style.backgroundImage="url(night.jpg)";
		greeting.textContent= 'Good Evening';
		document.body.style.color= 'white';
		document.body.style.backgroundSize='Cover';

	}
}
//Get Name
function getName(){
	if (localStorage.getItem('name')=== null) {
		name.textContent='{Enter name}';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}


// set Name
function setName(e){
	if (e.type==='keypress') {
		// make sure enter is pressed
		if (e.which == 13 || e.keycode == 13) {
			localStorage.setItem('name', e.target.InnerText);
			name.blur();
		}

	} else{
		localStorage.setItem('name', e.target.innerText);
	}
}

//Get focus
function getFocus(){
	if (localStorage.getItem('focus')=== null) {
		focus.textContent='{Enter focus}';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}

//set focus
function setFocus(e){
	if (e.type==='keypress') {
		// make sure enter is pressed
		if (e.which == 13 || e.keycode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}

	} else{
		localStorage.setItem('focus', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();