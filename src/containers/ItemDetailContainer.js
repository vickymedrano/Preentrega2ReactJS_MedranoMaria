import React from "react";
import Item from "./Item";

export const ItemDetailContainer = ({ products }) => {
  return (
   
    <div style={style.container}>
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
      
    </div>
    
 
  );
};
export default ItemDetailContainer;

const style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'space-between'
  },
};
