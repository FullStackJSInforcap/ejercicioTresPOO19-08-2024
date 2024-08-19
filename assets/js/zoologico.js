export default class Zoologico{

    #idZoologico;
    #nombreZoologico;
    #animales;

    constructor(idZoologico, nombreZoologico, animales = []){
        this.#idZoologico = idZoologico;
        this.#nombreZoologico = nombreZoologico;
        this.#animales = animales;
    }

    get idZoologico(){
        return this.#idZoologico;
    }

    set idZoologico(idZoologico){
        this.#idZoologico = idZoologico;
    }

    get nombreZoologico(){
        return this.#nombreZoologico;
    }

    set nombreZoologico(nombreZoologico){
        this.#nombreZoologico = nombreZoologico;
    }

    get animales(){
        return this.#animales;
    }

    set animales(animales){
        this.#animales = animales;
    }

    agregarAnimal(animal){
        this.animales.push(animal);
    }

    listarAnimales(){
        this.animales.forEach(animal => {
            console.log(animal);
        });
    }

    buscarAnimal(animal){
        let animalBuscado = this.animales.find((animalTemporal) => {
            return animalTemporal.idAnimal === animal.idAnimal;
        });
        console.log(animalBuscado);
    }

    quitarAnimalFormaUno(animal){
        const animalesFiltrados = this.animales.filter((animalTemporal) => {
            return animalTemporal.idAnimal != animal.idAnimal;
        });
        this.animales = animalesFiltrados;
    }

    quitarAnimalFormaDos(animal){
        const indice = this.animales.findIndex((animalTemporal) => {
            return animalTemporal.idAnimal === animal.idAnimal;
        });
        this.animales.splice(indice, 1);
    }

}