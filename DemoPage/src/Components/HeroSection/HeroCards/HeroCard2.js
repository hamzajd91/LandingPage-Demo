import React, { useState } from 'react'
import "./HeroCards.css"

function HeroCard2() {

    const [imgSource, setimgSource] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-HhGQMBaDdsYHg7WT27r_aZMxUuNvnkZcPlgHpOBwhKYbnkdfXNUb1T0xO_JiesrkR0&usqp=CAU")
    return (
        <div >
            <div className='HeroCard2Container'>
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

export default HeroCard2