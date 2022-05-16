import React  from "react";
import styled from 'styled-components'

const ToppingGrids = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

@media(max-width: 702px){ 
    grid-template-columns: 1fr 1fr;
  }

`
const Checkboxlabel = styled.label`
cursor: pointer;

`
const ToppingCheckBox = styled.input`
margin-right: 10px;
cursor: pointer;
`


export function Toppings({toppings, checkToppings}){
return (
    <ToppingGrids>
        {toppings.map((topping, i) => (<Checkboxlabel>
                <ToppingCheckBox
                    type="checkbox"
                    checked= {topping.checked}
                    onClick={() => {
                   // console.log("TOPPINGS")
                   checkToppings(i);
                    }}
                />
                    {topping.name}
                </Checkboxlabel> ))}
    </ToppingGrids>
    )

}
