var getJSON = function(url, successHandler, errorHandler) {
	var xhr = new XMLHttpRequest()
	xhr.open('get', url, true);
	xhr.responseType = 'json';
	xhr.onreadystatechange = function() {
		var status;
		var data;
		// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				successHandler && successHandler(xhr.response);
			} else {
				errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
};

getJSON('https://www.skynewsarabia.com/rest/v2/sidebar/article.json', function(data) {
	console.log(data);


	
}, function(status) {
	console.log(data);
});