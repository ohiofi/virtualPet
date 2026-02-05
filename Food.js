/*
    Heres what all these variables do exactly:
    
    Type:  The type of food (Food, Drink, etc)
    Name:  The name of the food ("Pizza" for example)
    Value: How much hunger the pet restores from eating the food
    Eaten: Tells if the food has already been consumed (Usually changed by the Eat method)
*/

//Hopefully this is enough with the information that i have
function Food(type, name, value) {
    this.Type  = type  || "None"
    this.Name  = name  || "NewFood" //quick pretend this is readable
    this.Value = value || 0 
    this.Eaten = false

    //wow this is so easily readable and im not completely misunderstanding the entire concept of code readability
    this.SetType  = function(newType)  { this.Type  = newType  }
    this.SetName  = function(newName)  { this.Name  = newName  }
    this.SetValue = function(newValue) { this.Value = newValue }
    this.GetType  = function()         { return this.Type  }
    this.GetName  = function()         { return this.Name  }
    this.GetValue = function()         { return this.Value }
    this.IsEaten  = function()         { return this.Eaten }

    //makes the pet eat the food, returns the food's value or 0 if it's already eaten
    this.Eat = function() { //oh god please help me this better not all be in here
        if (this.Eaten) {
            return 0
        }
        this.Eaten = true
        return this.Value
    }

    this.toString = function() {
        let output = ""

        output += this.Name + ": \n"
        output += "Type: " + this.Type + ", \n"
        output += "Value: " + this.Value + ", \n"
        output += "Already Eaten: " + (!this.Eaten && "No" || "Yes") + ", \n"
        
        return output
    }
  
    return this //okay its starting to make sense (pray that this is actually how you do objects in this god forsaken language)
}