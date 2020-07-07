import React from 'react'
import {Outlet} from 'react-router-dom'
export const Product = () => {


    return (
        <div>
           Product description
           <hr/>
           <div>
           <Outlet></Outlet>
           
           </div>
        </div>
    )
}
