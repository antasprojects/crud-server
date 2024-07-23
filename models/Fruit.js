const fruits = require("../fruits.json")




class Fruit {
    constructor(fruit) {
        {
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
        }
    }

    static showAll() {

        return fruits.map((fruit => new Fruit(fruit)));


    }


    static show(name) {

        let fruit;
        for (let i = 0; i < fruits.length; i++){
            if (fruits[i]["name"].toLowerCase() == name) {
                fruit = (fruits[i]);
            }
        }

        if (fruit != undefined) {
            return new Fruit(fruit)
        } else {
            throw "The fruit doesn't exist."
        }

    }

    static create(data) {

        const newFruit = data

        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase());


        if (fruit) {
            throw "The fruit already exists.";
        } else {
            newFruit["id"] = fruits.length + 1;
            fruits.push(newFruit);
      
            return new Fruit(newFruit)
        }
    }

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        
        if (updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)

        } else {
            throw "Fruit not found!!!!!!"
        }
        
    }

    destroy() {
        const toDeleteIndex = fruits.findIndex(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        
        if (toDeleteIndex) {

            fruits.splice(toDeleteIndex, 1)
            
            return 

        } else {
            throw "Fruit not found!!!!!!"
        }
        
    }
}


module.exports = Fruit