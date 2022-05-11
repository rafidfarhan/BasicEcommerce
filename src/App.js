import React from  "react";
import {useState} from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import './App.css';
import MyNav from "./components/navigation";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";

const App = () => {

  //const [searchTerm, setSearchTerm] = useState('');

  

  return (
      <Router>
        {/* <MyNav/> */}
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/product/:productId" exact component = {ProductDetails}/>
        </Switch>
      </Router>
      
  

  );
}

export default App;
