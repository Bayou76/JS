let i =0;

while(i<=16) {
    i++
    let li = document.createElement('li');
	li.innerHTML = Math.pow(i,2) ;
	document.getElementById('liste1').appendChild(li);
    
}
