import Grid from '@mui/material/Grid';
import React from 'react'
import TopNFTCard from './TopNFTCard'
import "./Topnfts"

function Topnfts() {
    return (
        <div className='container' style={{paddingBottom:"80px"}}>

            <h3 className='TopnftText'>
                Defy Ball Top Nfts
            </h3>


            <Grid container className='justify-content-center' style={{ gap: "20px" }}>
                <Grid item sm={12} md={3.8} > <TopNFTCard /> </Grid>
                <Grid item sm={12} md={3.8} > <TopNFTCard /> </Grid>
                <Grid item sm={12} md={3.8} > <TopNFTCard /> </Grid>
                <Grid item sm={12} md={3.8} > <TopNFTCard /> </Grid>
                <Grid item sm={12} md={3.8} > <TopNFTCard /> </Grid>
                <Grid item sm={12} md={3.8} > <TopNFTCard /> </Grid>
            </Grid>


        </div>
    )
}

export default Topnfts