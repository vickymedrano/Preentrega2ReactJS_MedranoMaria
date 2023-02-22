import React from "react";
import {NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    
    { id: 1, name: "Electronica" , ruta: "category/electronics" },
    { id: 2, name: "Joyas" , ruta: "category/jewelery" },
    { id: 3, name: "Ropa" , ruta: "category/men's clothing" },
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (

          <NavLink key={category.id} style={styles.categorias} to=  {category.ruta}>
            {category.name}

          </NavLink>

        );
      })}

    </nav>
  );
};


export const styles = {
  categorias: {
    margin: 10,
    color: "black",
   },
};

export default NavCategories;
