import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/foodGrid';
import { pizzaRed } from '../Styles/colors';
import { title } from '../Styles/title';
import { formatPrice } from '../Data/foodData';
import { QuantityInput } from './quantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';

export const Dialog = styled.div`
width: 500px;
background-color: white;
position: fixed;
top: 75px;
z-index: 11;
max-height: calc(100% - 100px);
left: calc(50% - 250px);
display: flex;
flex-direction: column;

@media(max-width: 702px){ 
    width: 100%; 
    left: 0px; 
    z-index: 12; 
  }
`;

export const DialogContent = styled.div`
overflow: auto;
min-height:100px;
padding: 0px 10px;
padding-bottom: 90px;


`
const DialogIngredients = styled.div`
display: flex;
display-align: left;
height: 100%;
width: 100%;
top: 0px;
color: green;
font-size: 15px;
`

export const DialogFooter = styled.div`
box-shadow: 0px -2px 10px 0px grey;
height: 60px;
display: flex;
justify-content: center;

`
export const ConfirmButton = styled(title)`
margin: 10px;
color: white;
height: 20px;
border-radius: 5px;
padding: 10px;
text-align: center;
width: 200px;
cursor: pointer;
background-color: ${pizzaRed};
`

export const DialogShadow = styled.div`
position:fixed;
height: 100%;
width: 100%;
top: 0px;
background-color:black;
opacity: 0.7;
z-index: 11;
`;

const DialogBanner = styled.div`
min-height: 200px;
margin-botton: 20px;
${({img}) => `background-image: url(${img});`}
background-position: center;
background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
top: 100px;
font-size: 30px;
padding: 5px 40px;
`
const pricePerTopping = 0.5;
// Increase or decrease the price according to order
export function getPrice(order){
    return(
    order.quantity * 
    (order.price + 
        order.toppings.filter(t => t.checked).length * pricePerTopping )
    );
}

// hasToppings
function hasToppings(food){
        return food.section === 'Pizza';
    }

 function FoodDialogContainer({openFood, setOpenFood, setOrders, orders}) {
     // initialised the hook and pass the parameters
    const quantity = useQuantity(openFood && openFood.quantity);
    //toppings
    const topping = useToppings(openFood.toppings)
      // Editing orders 
      const isEditing = openFood.index > -1;
  
// helper function for closing dialog container
    function close(){
        setOpenFood();
    }
    // order container
     const order = {
         ...openFood,
         quantity: quantity.value,
         toppings: topping.toppings
         }   
    
    
      function editOrder(newOrder){
          const newOrders = [...orders]
          newOrders[openFood.index] = order;
          setOrders(newOrders);
          close();
      }

    function addToOrder(){
        setOrders([...orders, order]);
        close();
    }

    return (
        <>
        <DialogShadow onClick={close}/> 
                <Dialog>
                    <DialogBanner  img= {openFood.img}> 
                         <DialogBannerName>{openFood.name}</DialogBannerName>
                    </DialogBanner>
                    <DialogContent>
                    <DialogIngredients> <h3>Ingredients:</h3>{" "}{openFood.ingredients} </DialogIngredients>
                    <br/>
                    <QuantityInput quantity = {quantity} />  
                    {hasToppings(openFood) && (
                        <>
                    <h4>Would you like toppings?</h4>
                    <Toppings {...topping} />
                    </>
                )}
                    </DialogContent>

                    <DialogFooter>
                        <ConfirmButton onClick={ isEditing ? editOrder: addToOrder}
                        > 
                        {isEditing ? `Update order: `:` Add to order:`}
                        {formatPrice(getPrice(order))}
                        </ConfirmButton>
                    </DialogFooter>
                </Dialog>   
              
        </>
      
   );
}


export function FoodDialog(props){
    if(!props.openFood) return null;
    return <FoodDialogContainer {...props}/>
}