/*
    Heres what all these attributes/instance variable do exactly:
    
    type:  The type of food (Food, Drink, etc)
    name:  The name of the food ("Pizza" for example)
    value: How much hunger the pet restores from eating the food
    eaten: Tells if the food has already been consumed (Usually changed by the eat method)
*/

class Food{

    // this establishes that there will be private instance variables
    #type;
    #name;
    
    constructor(type, name, value) {
        this.#type  = type  || "None";
        this.#name  = name  || "NewFood";
        this.value = value || 0;
        this.eaten = false;
    }

    
    setType(newType)  { this.#type  = newType  }
    setName(newName)  { this.#name  = newName  }
    setValue(newValue){ this.value = newValue }
    getType()         { return this.#type  }
    getName()         { return this.#name  }
    getValue()        { return this.value }
    isEaten()         { return this.eaten }

    //makes the pet eat the food, returns the food's value or 0 if it's already eaten
    eat() { 
        if (this.eaten) {
            return 0;
        }
        this.eaten = true;
        return this.value;
    }

    toString() {
        let output = "";
        output += this.#name + ": \n";
        output += "Type: " + this.#type + ", \n";
        output += "Value: " + this.value + ", \n";
        output += "Already Eaten: " + (!this.eaten && "No" || "Yes") + ", \n";
        return output;
    }
  

}

