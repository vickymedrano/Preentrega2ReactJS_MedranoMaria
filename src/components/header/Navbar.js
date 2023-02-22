import React from "react";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <header style={styles.container}>

      <Link style={styles.imagenes} to="/">
        <img style={styles.imagenes} src="../images/maquetado.jpg" alt="logo" />
      </Link>

      <h1>Medrano's Shopp</h1> 
        
      <h2> Bienvenido {name}</h2>

      
      <NavCategories />
      

<Link to= "/cart">
      <CartWidget />
</Link>     

      
    </header>
  );
};

export default Navbar;
