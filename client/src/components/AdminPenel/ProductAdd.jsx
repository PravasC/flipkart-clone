import React, { useState } from 'react';
import AddCategorySec from './AddCategorySec';
import AddProductSec from './AddProductSec';
import './ProductAdd.css';

function ProductAdd() {

    const [penelShow, setpenelShow] = useState(1);

    return (
        <>
            <div className="MainAdminPenelWrapper">
                <h3 className="pt-3 pb-3">::WellCome To Addmin Penel::</h3>
                <div className="ALL__PRDUCT__BAR">
                    <button className={penelShow === 1 ? "buttonOne ActiveButton" : "buttonOne"} onClick={() => setpenelShow(1)}>Add Prduct</button>
                    <button className={penelShow === 2 ? "buttonTwo ActiveButton" : "buttonTwo"} onClick={() => setpenelShow(2)}>Add Catagory Or Sub Catagory</button>
                    <button className={penelShow === 3 ? "buttonThree ActiveButton" : "buttonThree"} onClick={() => setpenelShow(3)}>All Users</button>
                </div>
                <div className="ALL__PRODUCT__PENEL">
                    {
                    penelShow === 1?
                    <div className="AddProduct">
                        <AddProductSec />
                    </div>
                    :null
                    }
                    {
                    penelShow === 2?
                    <div className="AddCatagory">
                        <AddCategorySec />
                    </div>
                    :null
                    }
                    {
                    penelShow === 3?
                    <div className="AddUsers">
                        This Is User Section
                    </div>
                    :null
                    }
                </div>
            </div>
        </>
    )
}

export default ProductAdd
