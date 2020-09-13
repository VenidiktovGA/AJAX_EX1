import { sendingGetJS } from './ajax.js'

let send = document.getElementById("sendGetJS");

send.addEventListener('click', wrappersendingGetJS);

function wrappersendingGetJS (){
	sendingGetJS('http://ajax_ex1:8090/ajax.php/?name=Gena');
}
