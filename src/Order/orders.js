import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../Data/foodData';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/foodDialog';
import { getPrice } from '../FoodDialog/foodDialog';

// Create database
// const database = window.firebase.database();


const OrderStyled = styled.div`
position: fixed;
right: 0px;
top: 48px;
width: 340px;
background-color: white;
height: calc(100% - 48px);
z-index: 10;
box-shadow: 4px 0px 5px 4px grey;
display:flex;
flex-direction: column;

@media(max-width: 702px){ 
    position: relative; 
    width: 100%; 
  }

`
const OrderContent = styled(DialogContent)`
padding: 20px;
height: 100%;
font-size: 15px;
margin-block:10px;
background-color: lightgray;
font-weight: bolder;

`
// Render the food in order container
const OrderContainer = styled.div`
padding: 10px 0px;
border-bottom: 2px solid green;
${({ editable}) => editable ? `
&:hover {
    cursor: pointer;
    background-color: #e7e7e7;
    }
`
:`
pointer-events: none;
`}

`;

const OrderItem= styled.div`
padding:10px 0px;
display: grid;
grid-template-columns: 20px 150px 20px 60px;
justify-content: space-between;
`

const OrderFooter = styled(DialogContent)`
padding:0px;
height: 100%;

`
/*
// Sending the order to the firebase realtime database
function sendOrder(orders, {email, displayName}){
     var newOrderRef = database.ref('orders').push();
     const newOrders = orders.map(order => {
         return Object.keys(order).reduce((accomulator, orderKey) => {
             if(!order[orderKey]){
             return accomulator;
         }
         if(orderKey === "toppings"){
             return {
                 ...accomulator,
                 [orderKey]: order[orderKey]
                 .filter(({ checked }) => checked)
                 .map(({ name }) => name)
             };
            }
            return {
                ...accomulator,
                [orderKey]: order[orderKey]
            };
         }, {} );
        });
         newOrderRef.set({
             order:newOrders,
             email,
             displayName       
     });

}
*/

/*

export function Order({ orders, setOrders, setOpenFood, Login, loggedIn, setOpenOrderDialog }){
    // total of the pickedup products
    // first argument is ( access the callback) and second argument is accomulator
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);

    }, 0)

    const DetailItem = styled.div`
    color:grey;
    font-size: 10px;

    `

    // tax calculation
    const tax = subtotal*0.24;
    const total = subtotal+tax;

    // Delete the order
const deleteItem = index => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
}
 
    return (
    <OrderStyled>
        { orders.length === 0 ? (
             <OrderContent> Your order is looking pretty empty. </OrderContent> 
            )  : (
             <OrderContent>
             {" "}
              <OrderContainer>Your orders:{"  "}{orders.length}  </OrderContainer>{" "}
              {orders.map((order, index) =>(
                  <OrderContainer editable >
                    <OrderItem
                    onClick={() => {
                        setOpenFood({...order, index})
                    }}
                    >
                        <div>{order.quantity}</div> 
                        <div>{order.name}</div>
                        <div 
                        style={{cursor: 'pointer'}}
                        onClick={ e => { 
                            e.stopPropagation(); 
                            deleteItem(index)
                            }}
                            >
                            🗑️</div>
                        <div>{formatPrice(getPrice(order))}</div>
                  </OrderItem>

                  <DetailItem>
                  <h3>
                      {
                          order.toppings
                          .filter(t => t.checked)
                          .map(topping => topping.name)
                          .join(",")

                      }
                      </h3>
                    </DetailItem>
                  </OrderContainer>
              ))}
             
              <OrderContainer>
                    <OrderItem>
                        <div />
                        <div>Sub-Total</div>
                        <div>{formatPrice(subtotal)}</div>
                    </OrderItem>
                    <OrderItem>
                        <div />
                        <div>Tax</div>
                        <div>{formatPrice(tax)}</div>
                    </OrderItem>
                   
                    <OrderItem>                   
                        <div />
                        <div>Total</div>                                               
                        <div>{formatPrice(total)}</div>                        
                    </OrderItem>
                    
                    </OrderContainer>
              </OrderContent>
            )}
        <DialogFooter>
        { orders.length > 0 && 
            <OrderFooter>
                <ConfirmButton onClick={() => {
                    //alert("Checkout confirm")
                    if(loggedIn){
                    setOpenOrderDialog(true);
                    sendOrder(orders, loggedIn) 
                    }
                    else{
                        Login();
                    }
                }}> Checkout</ConfirmButton>
            </OrderFooter> }
        </DialogFooter>
       
    </OrderStyled>
    );
            
}
*/



export function Order({ orders, setOrders, setOpenFood, Login, loggedIn, setOpenOrderDialog }){
    // total of the pickedup products
    // first argument is ( access the callback) and second argument is accomulator
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);

    }, 0)

    const DetailItem = styled.div`
    color:grey;
    font-size: 10px;

    `

    // tax calculation
    const tax = subtotal*0.24;
    const total = subtotal+tax;

    // Delete the order
const deleteItem = index => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
}
 
    return (
    <OrderStyled>
        { orders.length === 0 ? (
             <OrderContent> Your order is looking pretty empty. </OrderContent> 
            )  : (
             <OrderContent>
             {" "}
              <OrderContainer>Your orders:{"  "}{orders.length}  </OrderContainer>{" "}
              {orders.map((order, index) =>(
                  <OrderContainer editable >
                    <OrderItem
                    onClick={() => {
                        setOpenFood({...order, index})
                    }}
                    >
                        <div>{order.quantity}</div> 
                        <div>{order.name}</div>
                        <div 
                        style={{cursor: 'pointer'}}
                        onClick={ e => { 
                            e.stopPropagation(); 
                            deleteItem(index)
                            }}
                            >
                            🗑️</div>
                        <div>{formatPrice(getPrice(order))}</div>
                  </OrderItem>

                  <DetailItem>
                  <h3>
                      {
                          order.toppings
                          .filter(t => t.checked)
                          .map(topping => topping.name)
                          .join(",")

                      }
                      </h3>
                    </DetailItem>
                  </OrderContainer>
              ))}
             
              <OrderContainer>
                    <OrderItem>
                        <div />
                        <div>Sub-Total</div>
                        <div>{formatPrice(subtotal)}</div>
                    </OrderItem>
                    <OrderItem>
                        <div />
                        <div>Tax</div>
                        <div>{formatPrice(tax)}</div>
                    </OrderItem>
                   
                    <OrderItem>                   
                        <div />
                        <div>Total</div>                                               
                        <div>{formatPrice(total)}</div>                        
                    </OrderItem>
                    
                    </OrderContainer>
              </OrderContent>
            )}
        <DialogFooter>
            <OrderFooter>
                <ConfirmButton onClick={() => {
                    alert("Checkout confirm")}}> Checkout
                    </ConfirmButton>
            </OrderFooter>
        </DialogFooter>
       
    </OrderStyled>
    );
            
}