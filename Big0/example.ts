import {range} from '../Arrays/range';

function suma_de_n(n: number): number{
	// Partida
	var partida = Date.now();

	// Corre la funcion
	var suma:number = 0;
	for(let i of range(0, n)){
		suma += i
	}
	
	var fin = Date.now();

	console.log(partida,fin);
	

	return suma
}

console.log(suma_de_n(10));