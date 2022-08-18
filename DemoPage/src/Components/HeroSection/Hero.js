import React from 'react'
import "./Hero.css"
import Grid from '@mui/material/Grid';
import HeroCard1 from './HeroCards/HeroCard1';
import HeroCard2 from './HeroCards/HeroCard2';
import Navbar from '../Navbar/Navbar';

function Hero() {
    var HeroImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLJaIEu0J0wGk4piixFiylKtvCJSPKw-Ncw&usqp=CAU";

    return (
        <div className='Hero' style={{ backgroundImage: `url(${HeroImage})` }}>
            <Navbar />
            <div className='HeroContent'>
                <div className='container '>
                    <Grid container spacing={2} className="d-flex mx-auto Herosplit">
                        <Grid item md={6} xs={12} className="mx-auto d-flex flex-column justify-content-center" style={{  color: "white" }}>
                            <h3 className='Title1'>DEFYBALL</h3>
                            <h3 className='Title2'>MARKETPLACE</h3>
                        </Grid>

                        <Grid item md={6} xs={12} className="mx-auto d-flex justify-content-center" >
                            <HeroCard2 />
                            <HeroCard1 />

                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className='container' style={{ marginTop: "-180px" }}>
                <div className='CardDetails' style={{ background: "#454b4d", width: "290px", paddingInline: "20px" }}>
                    <div className="cardtextContainer">
                        <p className='HeaderdetailsText1'>40K </p>
                        <p className='HeaderdetailsText2'>Artwork</p>
                    </div>

                    <div className="cardtextContainer">
                        <p className='HeaderdetailsText1'>40K </p>
                        <p className='HeaderdetailsText2'>Auction</p>
                    </div>

                    <div className="cardtextContainer">
                        <p className='HeaderdetailsText1'>40K </p>
                        <p className='HeaderdetailsText2'>Sold</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero