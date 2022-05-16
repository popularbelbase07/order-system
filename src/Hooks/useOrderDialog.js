import { useState } from "react";
// set the boolean values set the flag to openFood
export function useOrderDialog(){
    const [openOrderDialog, setOpenOrderDialog] = useState();
    return {
        openOrderDialog,
        setOpenOrderDialog
    };
}