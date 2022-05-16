import { useState } from "react";


export function useOpenFood(){

    const [openFood, setOpenFood] = useState();

    return{
        // Initializing the hook and returning the property of that hook in an object
        openFood, 
        setOpenFood

    }
    
}