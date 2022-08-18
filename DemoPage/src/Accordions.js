import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Accordions.css"

function Accordions() {
    const [SearchHeader, setSearchHeader] = useState("")
    const [searchResult, setsearchResult] = useState("")

    const handleAccordions = (value) => {

        setSearchHeader((value.AccHeader));
        setsearchResult((value.AccData));

    };

    return (
        <div className='container d-flex mt-5 pt-5'>

            <div className='w-50 mt-5' style={{ border: "2px solid black" }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* ------------------------------------------------------- */}

                        {
                            AccData.map((value) => {
                                return (
                                    <>
                                        <Typography
                                            onClick={() => handleAccordions(value)}
                                            sx={{
                                                paddingBlock: "5px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            {value.AccHeader}
                                        </Typography>

                                    </>
                                )
                            })
                        }

                        {/* -------------------------------------------------------- */}
                    </AccordionDetails>
                </Accordion>

            </div>

            <div className='w-50 mt-5 p-3' style={{ background: "grey" }}>
                <h1 style={{ color: "white" }}> {SearchHeader}</h1>
                <h1 style={{ color: "white" }}> {searchResult}</h1>
            </div>
        </div>
    )
}

export default Accordions


const AccData = [
    {
        id: 1,
        AccHeader: "header 1",
        AccData: "Data 1"
    },

    {
        id: 2,
        AccHeader: "header 2",
        AccData: "Data 2"
    },

    {
        id: 3,
        AccHeader: "header 3",
        AccData: "Data 3"
    }
]