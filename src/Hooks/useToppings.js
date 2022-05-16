//import React from "react";
import { useState } from "react";

export function useToppings(defaultToppings){
    //If the hooks has allready passing the argument or the new function is passed
const [toppings, setToppings] = useState(defaultToppings || getDefaultToppings())

// check specific toppings
function checkToppings(index){
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings)
}
return {
    checkToppings,
    toppings

}
}
const toppingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Pepers",
    "Pinapple",
    "Ham",
    "Spinach"
    
];

function getDefaultToppings(){
    return toppingsList.map(topping  => ({
        name: topping,
        checked: false
    })

    )}
