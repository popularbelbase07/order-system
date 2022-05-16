import { useState } from "react";
// set the boolean values
export function useOrderDialog(){
    const [openOrderDialog, setOpenOrderDialog] = useState();
    return {
        openOrderDialog,
        setOpenOrderDialog
    };
}