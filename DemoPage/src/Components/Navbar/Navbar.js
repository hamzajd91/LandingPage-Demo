import React from 'react'
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import LogoPng from "./LogoPng.png"
import "./Navbar.css"
function Navbar() {
  return (


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
      <a class="navbar-brand" href="#">
        <img className='logo' src={LogoPng}/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav ml-auto" style={{gap:"20px"}}>
          <li class="nav-item active">
            <a class="nav-link" href="#">DEFY BALL NFTS <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MY NFTS</a>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a style={{pointer:"default"}} class="nav-link disabled" href="#">STADIUMS</a>
            <LockIcon style={{fontSize:"15"}}/>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a style={{pointer:"default"}} class="nav-link disabled" href="#">ACCESSORIES</a>
            <LockIcon style={{fontSize:"15"}}/>
          </li>
          <li>
          <Button variant="outlined" className='NavButton'>Connect Wallet</Button>
          </li>
        </ul>

      </div>
    </nav>

  )
}

export default Navbar