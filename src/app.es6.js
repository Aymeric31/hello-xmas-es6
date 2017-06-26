document.getElementById('clickMe').addEventListener('click',() =>{
	let Nom = {name: document.getElementById("content").value
};
document.getElementById('receiver').innerHTML = `Bonjour ${Nom.name}`;
if(document.getElementById('content').value == ''){
	document.getElementById('receiver').innerHTML = 'Bonjour Père Noël';
}
});