var sharedLocalStorage = new SharedLocalStorage([
	'http://main.hasibdesk.com',
	'http://flex.hasibdesk.com',
	'http://docent.hasibdesk.com',
]);

var addValueClick = () => {
	const key = document.getElementById('lsKey').value;
	const value = document.getElementById('lsVal').value;
	sharedLocalStorage.setValue(key, value);
	alert('added');
};

var deleteValueClick = () => {
	const key = document.getElementById('lsKey').value;
	sharedLocalStorage.deleteValue(key);
	alert('deleted');
};

var readValueClick = () => {
	const key = document.getElementById('lsKey').value;
	alert('value: ' + sharedLocalStorage.getValue(key));
};
