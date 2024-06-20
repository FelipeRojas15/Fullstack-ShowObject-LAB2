async function consultar(obj, i){
var data = {};
try {
	const rta = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (!rta.ok){
		throw new Error('Red error:' + rta.status );
		
	}
	const datos = await rta.json();
	console.log(rta.status+"..." + JSON.stringify(datos));
	
	for (let c in datos){
		
		if (i.value == datos[c].id){
			
			mostrarDatos(datos[c]);
			
			
			
		//i.value = datos[x].id;
		}
		
	}
	

	}catch (error){
		console.log('Error:', error);
	}


}


function mostrarDatos(datos) {
	const tbody = document.getElementById('lista');
	tbody.innerHTML = '';
			
	const tr = document.createElement('tr');
	for (let d in datos){
		
		const tdId = document.createElement('td');
		tdId.textContent = datos[d];
		tr.appendChild(tdId); // Añadir la celda al tr
		
		tbody.appendChild(tr);

	};
 

}




function validar(){
	console.log("Hola Laboratorio");
	var i = document.getElementById("usuario");
	let c = i.value;
	console.log("-->" + c);
	p = document.getElementsByTagName("p");
	consultar(p[1], i);

	return(true);
}