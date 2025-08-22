import React, { useState } from "react";
// // import products from '../data.js'
// import Navbar from "./Component/Navbar.jsx";
import Card from "./Component/Cards.jsx";

const Dashboard = ({ products }) => {
  const [productsState, setProductsState] = useState(products);
  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((product, index) => (
          <div keys={index}>
            <div className="badge bg-secondary">
                {product.category}
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          {productsState.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" 
            keys={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;