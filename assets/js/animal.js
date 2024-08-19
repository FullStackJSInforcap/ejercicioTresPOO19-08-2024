export default class Animal{

    #idAnimal;
    #descripcion;

    constructor(idAnimal, descripcion){
        this.#idAnimal = idAnimal;
        this.#descripcion = descripcion;
    }

    get idAnimal(){
        return this.#idAnimal;
    }

    set idAnimal(idAnimal){
        this.#idAnimal = idAnimal;
    }

    get descripcion(){
        return this.#descripcion;
    }

    set descripcion(descripcion){
        this.#descripcion = descripcion;
    }

    desplazarse(){
        return `El animal ${this.#idAnimal} se está desplazando`;
    }

    alimentarse(){
        console.log('Alimentándose');
    }

}