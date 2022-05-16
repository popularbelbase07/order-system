import { useState } from "react";


export function useOrders(){

    const [orders, setOrders] = useState([]);

    return{
        // Initializing the hook and returning the property of that hook in an object
        orders, 
        setOrders

    }
    
}