import React from 'react'
import "./Topnfts.css"

function TopNFTCard() {
    return (
        <div className='TopCardContainer'>
            <img className='TopNFTimg' />

            <div className="cardtextContainer">
                <p className='Productcardtext1'>Creator </p>
                <p className='Productcardtext2'>John Doe </p>
            </div>
        </div>
    )
}

export default TopNFTCard