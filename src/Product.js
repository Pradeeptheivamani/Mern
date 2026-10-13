import React from 'react'
import shoe from './asset/shoe1.jpeg'
import './Product.css'


const Product = ({ productObj }) => {


    return (
        <>
        <div>
            <h1> Nexus Footwares</h1>
        </div>
        <div style={{ display: "flex" }}>
            
            {productObj.map((item) => {
                return (
                    <>
                    
                        <div className="containerCard">
                            {<img src={item.img} className="imageShoe" />}
                           {/*<img src={productObj.img} className='imageShoe'/>*/}
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>
                             
                        </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Product