import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import {useEffect} from "react";


import SingleProduct from "../SingleProduct";
import {setProducts} from "../../redux/actions";

const Home = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const products = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(products.data));
    };

    useEffect(() => {
       fetchProducts();
    }, []);
    console.log("Products : ", products);
   
    return (
        <div className = "ui grid container">
            <SingleProduct/>
        </div>
    )
}

export default Home
