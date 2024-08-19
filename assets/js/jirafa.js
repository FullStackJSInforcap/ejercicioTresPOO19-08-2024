import Herbivoro from "./herbivoro.js";

export default class Jirafa extends Herbivoro{

    #velocidad

    constructor(idAnimal, descripcion, tipoComida, velocidad){
        super(idAnimal, descripcion, tipoComida);
        this.#velocidad = velocidad;
    }

    get velocidad(){
        return this.#velocidad;
    }

    set velocidad(velocidad){
        this.#velocidad = velocidad;
    }

    desplazarse(){
        console.log('Desplazándose corriendo');
    }

}