import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Link, NavLink,Routes } from "react-router-dom";
import ProductsTable from "./components/ProductTables";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";
import TrashTables from "./components/TrashTables";

function App() {
    return (
        <div >
            <Router >
                <NavBar />
                <div className="row">
                      <div className="col-sm-10 col-xm-12 mx-auto mt-4 mb-4">
                              <Routes>
                                  <Route path="/" element={<ProductsTable/>} />
                                  <Route path="/addproduct" element={<AddProducts/>} />
                                  <Route path="/trashsim" element={<TrashTables/>} />
                                  <Route path="/updateproduct" element={<UpdateProduct/>} />
                              </Routes>
                      </div>
                  </div>
            </Router>
        </div>
    );
}

export default App;
