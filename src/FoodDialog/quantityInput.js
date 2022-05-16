import React from "react";
import styled from "styled-components";
import { title } from "../Styles/title";
import { pizzaRed } from "../Styles/colors";


const QuantityInputStyle = styled.input`
font-size:  18px;
width: 30px;
text-align: center;
border:none;
oytline: none;
`
const IncrementContainer = styled(title)`
display:flex;
height: 24px;

`
// Incremental and decremental button in food dialog container
const IncrementButton = styled.div`
width: 23px;
color: ${pizzaRed};
font-size: 20px;
text-align: center;
cursor: pointer;
line-height: 23px;
margin: 0px 10px;
border: 2px solid ${pizzaRed};
${({ disabled }) =>
disabled &&
`
opacity: 0.5;
pointer-events: none;
    `}
&:hover {
  background-color: #ffe3e3;
}
`;

export function QuantityInput({quantity}){

    return <IncrementContainer>
                
                    <div>Quantity:</div>

                    <IncrementButton  onClick = {() =>{
                       quantity.setValue(quantity.value - 1) 
                    }}
                    disabled={quantity.value === 1}> - 
                    </IncrementButton>

                    <QuantityInputStyle {...quantity}/>

                    <IncrementButton onClick = {() =>{
                        quantity.setValue(quantity.value + 1)
                    }}> +
                    </IncrementButton>
            </IncrementContainer>

}