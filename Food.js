/*
    Heres what all these variables do exactly:
    
    Type:  The type of food (Food, Drink, etc)
    Name:  The name of the food ("Pizza" for example)
    Value: How much hunger the pet restores from eating the food
    Eaten: Tells if the food has already been consumed (Usually changed by the Eat method)
*/

//Hopefully this is enough with the information that i have
class Food{
    constructor(type, name, value) {
        this.Type  = type  || "None"
        this.Name  = name  || "NewFood" //quick pretend this is readable
        this.Value = value || 0 
        this.Eaten = false
    }

    //wow this is so easily readable and im not completely misunderstanding the entire concept of code readability
    setType  = function(newType)  { this.Type  = newType  }
    setName  = function(newName)  { this.Name  = newName  }
    setValue = function(newValue) { this.Value = newValue }
    getType  = function()         { return this.Type  }
    getName  = function()         { return this.Name  }
    getValue = function()         { return this.Value }
    isEaten  = function()         { return this.Eaten }

    //makes the pet eat the food, returns the food's value or 0 if it's already eaten
    eat() { //oh god please help me this better not all be in here
        if (this.Eaten) {
            return 0
        }
        this.Eaten = true
        return this.Value
    }

    toString() {
        let output = ""

        output += this.Name + ": \n"
        output += "Type: " + this.Type + ", \n"
        output += "Value: " + this.Value + ", \n"
        output += "Already Eaten: " + (!this.Eaten && "No" || "Yes") + ", \n"
        
        return output
    }
  

}
