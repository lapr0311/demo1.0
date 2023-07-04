




async function obtenerImagenes() {
  
	let imagenes = [{url:'https://falabella.scene7.com/is/image/Falabella/gsc_119345127_2312936_1?wid=1500&hei=1500&qlt=70'},{url:'https://falabella.scene7.com/is/image/Falabella/16730677_1?wid=1500&hei=1500&qlt=70'},{url:'https://falabella.scene7.com/is/image/Falabella/16686685_1?wid=1500&hei=1500&qlt=70'},{url:'https://falabella.scene7.com/is/image/Falabella/16480632_1?wid=1500&hei=1500&qlt=70'},{url:'https://falabella.scene7.com/is/image/Falabella/16480566_1?wid=1500&hei=1500&qlt=70'},{url:'https://falabella.scene7.com/is/image/Falabella/117129301_1?wid=1500&hei=1500&qlt=70'}];
	try {
		let json = JSON.stringify(imagenes);

		return json;
	} catch (error) {
		console.log(error);
	}
}
async function getImagePath(){
const imagen = await obtenerImagenes()
const objNuevo = JSON.parse(imagen);
for (var i = 0; i < objNuevo.length; i++) {
document.getElementById(`imagen${i+1}`).src=objNuevo[i].url; 
}
return 


}
