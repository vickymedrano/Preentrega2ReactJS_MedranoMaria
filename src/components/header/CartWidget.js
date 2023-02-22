import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Contador from "./Contador";

const CartWidget = (  {Contador} ) =>{

    return (
        <>
    <AddShoppingCartIcon color="primary" fontSize="large" />

    <span id="contador"> {Contador}  </span>
    
    
    </>
    );

};

export default CartWidget;
