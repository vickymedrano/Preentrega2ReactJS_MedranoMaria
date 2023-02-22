import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "../src/containers/Carrito";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import DetalleContainer from "./containers/DetalleContainer";

const App = () => {

  const user = "Nicolas";

  return (
    <>
     
      <BrowserRouter>
      
          <Navbar name={user} />

          <Routes>

            <Route path={"/"} element = {<ItemListContainer/>}/> 
            
            <Route path={"/category/:id"} element = {<ItemListContainer/>}/> 

            <Route path={"/item/:id"} element = {<ItemDetailContainer/>}/> 
           
            <Route path={"/carrito"} element = {<Carrito/>}/> 

            

            
          </Routes> 

          

     </BrowserRouter>

    </>
  );
};

export default App;




