import Animal from "./animal.js";
import Carnivoro from "./carnivoro.js";
import Gaviota from "./gaviota.js";
import Homnivoro from "./homnivoro.js";
import Leon from "./leon.js";
import Tigre from "./tigre.js";
import Zoologico from "./zoologico.js";

const leonUno = new Leon('1', 'león', 'carne', '50');
const leonDos = new Leon('2', 'león', 'carne', '50');
const leonTres = new Leon('3', 'león', 'carne', '50');
const tigreUno = new Tigre('4', 'Tigre', 'carne', '50');
const tigreDos = new Tigre('5', 'Tigre', 'carne', '50');
const tigreTres = new Tigre('6', 'Tigre', 'carne', '50');
const gaviota = new Gaviota('7', 'Gaviota', 'huevos', '80' );

const arregloAnimales = [leonUno, leonDos, tigreUno];

const zoologico = new Zoologico('1', 'nombre zoologico', arregloAnimales);
console.log('Listar');
zoologico.listarAnimales();
zoologico.agregarAnimal(leonTres);
console.log('Listar');
zoologico.listarAnimales();
console.log('Buscar tigre');
zoologico.buscarAnimal(tigreUno);
console.log('Buscar leon uno');
zoologico.buscarAnimal(leonUno);
zoologico.quitarAnimalFormaUno(leonUno);
console.log('Listar luego de eliminar');
zoologico.listarAnimales();
zoologico.quitarAnimalFormaDos(leonDos);
console.log('Listar luego de eliminar');
zoologico.listarAnimales();