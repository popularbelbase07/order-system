import React from "react";
import styled from 'styled-components';
import { foods } from "../Data/foodData";
import { Food, FoodGrid, FoodLabel} from "./foodGrid";
import { formatPrice } from "../Data/foodData";


const MenuStyled = styled.div`
height: 1000px;
margin: 0px 400px 50px 20px;

@media(max-width: 702px){ 
    width: 100%; 
    margin: 0px; 
  }

`

export function Menu ({setOpenFood}){

return(
    <MenuStyled>
    {Object.entries(foods).map(([sectionName, foods]) =>( 

        <>
            <h1>{sectionName}</h1>
            <FoodGrid>
                { foods.map(food => ( 
                    <Food img = {food.img} 
                    onClick= {() => {
                     setOpenFood(food);
                     }}
                     >
                    <FoodLabel> 
                    <div>{food.name}</div>
                    <div>{formatPrice(food.price)}</div>
                    </FoodLabel>
                    </Food>
                ))}
            </FoodGrid>
        </>              
    ))}
    </MenuStyled>

);

}