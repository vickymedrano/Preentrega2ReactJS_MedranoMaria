import React, { useEffect, useState } from "react";
import Itemcount from "../components/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams ();
  const URL = id? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`;
  




  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await fetch (URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();
  }, [id]);

  const onAdd = (count) => {
    console.log(`el usuario selecciono ${count} `);
  };

  return (
    <>
      

      {!error ? (
        <>
          {products.length ? (
            <ItemDetailContainer products={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
      
    </>
  );
};

export default ItemListContainer;
