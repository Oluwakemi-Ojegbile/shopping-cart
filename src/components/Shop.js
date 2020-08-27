import React from 'react';
import Products from './Products'
import SideBar from '../components/SideBar';

const products = []

const Shop = () => {
    return  <div>
                <h1 className="app_title"> SHOPPING LIST</h1>
                <SideBar />
                <div>
                    <Products products={products} />
                </div>
            </div>
}

export default Shop;