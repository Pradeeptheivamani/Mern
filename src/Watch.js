import React from 'react'
import './Product.css'

function Watch({watchObj}) {
  return (
    <>
    <div>
            <h1> Nexus World</h1>
        </div>
    <div>Watch</div>
    <div style={{ display: "flex" }}>
    {watchObj.map((i)=>{
        return(
            <>
            <div className="containerCard">
                            {<img src={i.img} className="imageShoe" />}
                           {/*<img src={productObj.img} className='imageShoe'/>*/}
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${i.price}</h4> &nbsp;
                                <strike className="strikeShoe">${i.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>
                             
                        </div>
            </>
        )
    })}
    </div>
    </>

  )
}

export default Watch