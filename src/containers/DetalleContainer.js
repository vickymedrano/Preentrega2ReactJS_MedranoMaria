

import React from "react";


const DetalleContainer = ( {product} ) =>{

    return (
        <>
        <h1>En reparacion</h1>

        <div>
          <h3></h3>
          <p> </p>
          <img alt={product.title} style={{width:'70%'}} />
         </div>
        
        </>
    );

};



export default DetalleContainer;