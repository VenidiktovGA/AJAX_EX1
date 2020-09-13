
export function sendingGetJS(url) {
	var httpRequest = new XMLHttpRequest();

	let arrayState = ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'];

	httpRequest.onreadystatechange = function () {

		console.group('XMLHttpRequest:');
		/*Смотрим readyState запроса*/
		console.log(`readyState - ${this.readyState} (${arrayState[this.readyState]})`);
		/*console.log(httpRequest);*/
		/*Статус запроса*/
		console.log(`Статус запроса - ${this.status} ${this.statusText}`);
		/*Если все хорошо то показываем ответ на запрос*/
		if (this.readyState == 4 && this.status == 200) {
			responsRequest(`Ответ: responseType - ${this.responseType} responseText ${this.responseText}`);
		}
		console.groupEnd();
	};

	function responsRequest(date) {
		console.log(date);
	}

	httpRequest.open('GET', url, true);
	httpRequest.send();
}

