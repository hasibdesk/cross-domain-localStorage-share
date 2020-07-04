var sharedLocalStorage = new SharedLocalStorage(['http://domain1.com', 'http://domain2.com', 'http://domain3.com']);

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
