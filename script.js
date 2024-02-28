//your JS code here. If required.
window.addEventListener('resize',function(){
	const width = window.innerWidth;
	const height = window.innerHeight;
	const size = document.querySelector('#sizeInfo');
	size.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
});