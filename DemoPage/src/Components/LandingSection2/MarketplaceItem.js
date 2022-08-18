import { withTheme } from '@emotion/react'
import React, { useState } from 'react'
import "./Landingsection2.css"

function MarketplaceItem( props) {

    const [Locked, setLocked] = useState( props.isLocked)

  return (
    <div style={{marginTop:"100px"}}>
        <div className={`${Locked ? "ItemBase LockedItem" : "ItemBase UnlockedItem "}`}>
            <img className= "marketItem" src={props.MarketImage}/>
        </div>
        
        <p className='MarketitemTitle'> {props.Title} </p>
    </div>
  )
}

export default MarketplaceItem