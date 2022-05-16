import React from "react";
import { Dialog, DialogContent, DialogShadow, DialogFooter,ConfirmButton } from "../FoodDialog/foodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
    return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
    <DialogContent>
        <h2> 🚚 Your order is on the way!</h2>
        <p>
        You have been emailed conformation for your order. Thank you for choosing order system.
        </p>
    </DialogContent>
        <DialogFooter>
        <ConfirmButton onClick={() => {
            setOrders([]);
            setOpenOrderDialog();
        }}>  I'm still hungry</ConfirmButton>
        </DialogFooter>
    </Dialog>
    </> : <div />

}