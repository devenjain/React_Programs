import logo from './logo.svg';
import './App.css';
import Footer from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { EmployeeList } from './MyComponents/EmployeeList';
import { useState } from 'react';
import { Employee } from './MyComponents/Employee';
import { AddEmpForm } from './MyComponents/AddEmpForm';
import { MainHeader } from './MyComponents/MainHeader';
import { Route } from 'react-router-dom';
import { Welcome } from './Packeges/Welcome';
import { ProductDetail } from './Packeges/ProductDetail';
import { Product } from './Packeges/Product';

function App() {

  return (
    <div>
      
      <MainHeader />
      
      <Route path="/welcome" >
        <Welcome />
      </Route>

      <Route path="/product" >
        <Product />
      </Route>

      <Route path="/productDetail/:pId/:pName" >
        <ProductDetail />
      </Route>

    </div>
  )

}

export default App;
