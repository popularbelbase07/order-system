import { useEffect } from "react";

export function useTitle({openFood, orders}){

    useEffect(() =>{
        if(openFood){
            //document.title = openFood.name
            document.title = "Order-system"

        } else{
           // document.title = orders.length === 0 ? ` What is for dinner ?` : `[${orders.length}] items in your order! `;
        }      

    })
}