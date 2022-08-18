import React, { useState } from 'react'
import Button from '@mui/material/Button';
import "./Landingsection2.css"
import MarketplaceItem from './MarketplaceItem';

function Landingsection2() {
    const [MarketImage, setMarketImage] = useState("https://imagedelivery.net/EsE8y2TBl-v8SjGH-OFnEQ/c0203b0a-3392-4fb5-3d3a-7a8141607a00/public")


    return (
        <div className='py-5 container Sec2Container'>
            <Button className='MarketButton' variant="outlined">Market place</Button>

            <div className='MarketplaceItems mt-4'>
                {MarketItemList.map((item) => {

                    return (<MarketplaceItem
                        MarketImage={item.Image}
                        isLocked={item.Locked}
                        Title={item.Title} />)

                })}
                {/* <MarketplaceItem MarketImage ={MarketImage}/> */}
            </div>
        </div>
    )
}

export default Landingsection2

const MarketItemList = [
    {
        id: 1,
        Title:"Super Dogs",
        Image: "https://imagedelivery.net/EsE8y2TBl-v8SjGH-OFnEQ/c0203b0a-3392-4fb5-3d3a-7a8141607a00/public",
        Locked: false
    },

    {
        id: 2,
        Title:"Food Kits",
        Image: "https://imagedelivery.net/EsE8y2TBl-v8SjGH-OFnEQ/4d2d0679-447b-44ce-0133-8d2a2bb16400/public",
        Locked: false
    },

    {
        id: 3,
        Title:"Stadiums",
        Image: "https://imagedelivery.net/EsE8y2TBl-v8SjGH-OFnEQ/c0203b0a-3392-4fb5-3d3a-7a8141607a00/public",
        Locked: true
    },

    {
        id: 4,
        Title:"Accessories",
        Image: "https://imagedelivery.net/EsE8y2TBl-v8SjGH-OFnEQ/4d2d0679-447b-44ce-0133-8d2a2bb16400/public",
        Locked: true
    }

]