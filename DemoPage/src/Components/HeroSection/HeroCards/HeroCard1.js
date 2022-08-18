import React, { useState } from 'react'
import "./HeroCards.css"

function HeroCard1() {

    const [imgSource, setimgSource] = useState("https://imagedelivery.net/EsE8y2TBl-v8SjGH-OFnEQ/41278920-337d-4a01-c95b-41d53a5a2800/public")
    return (
        <div >
            <div className='HeroCard1Container'>
                <div className='card1Content'>
                    <img className='card1img' src={imgSource} />
                    <div className='CardDetails'>
                        <img className='CardProfileimg' src="" />
                        <div className="cardtextContainer">
                            <p className='cardtext1'>Creator </p>
                            <p className='cardtext2'>John Doe </p>
                        </div>

                        <div className="cardtextContainer">
                            <p className='cardtext1'>CurrentBid </p>
                            <p className='cardtext2'>1 ETH </p>
                        </div>

                        <div className="cardtextContainer">
                            <p className='cardtext1'>End in </p>
                            <p className='cardtext2'>1min 20s </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard1