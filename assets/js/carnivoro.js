import Animal from "./animal.js";

export default class Carnivoro extends Animal{

    #tipoComida;

    constructor(idAnimal, descripcion, tipoComida){
        super(idAnimal, descripcion);
        this.#tipoComida = tipoComida;
    }

    get tipoComida(){
        return this.#tipoComida;
    }

    set tipoComida(tipoComida){
        this.#tipoComida = tipoComida;
    }

    alimentarse(){
        console.log('Alimentándose comiendo carne');
    }

}