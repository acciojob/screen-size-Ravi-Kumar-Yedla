//your JS code here. If required.
window.addEventListener('resize',function(){
	const width = window.innerWidth;
	const height = window.innerHeight;
	const size =document.getElementById('sizeInfo');
	if(size){
	size.innerHTML = `<h1>Width: ${width}px and Height: ${height}px</h1>`;
	}
	});