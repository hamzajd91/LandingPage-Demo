import React from 'react'
import Logopng from "../Navbar/LogoPng.png"
import "./Footer.css"


function Footer() {
    return (
        <div>

            <footer class="new_footer_area bg_color">

                <div class="new_footer_top">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-2 col-sm-12">
                                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s"
                                    style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Deflyball</h3>
                                    <img src={Logopng} alt="Logo" style={{ height: "120px", width: "120px" }} />

                                </div>
                            </div>

                            <div class="col-lg-2 col-sm-12">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s"
                                    style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Learn More</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Gameplay</a></li>
                                        <li><a href="#">Road Map</a></li>
                                        <li><a href="#">Superverse</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div class="col-lg-2 col-sm-12">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s"
                                    style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Learn More</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="#">Character</a></li>
                                        <li><a href="#">Ingame Assets</a></li>
                                        <li><a href="#">Buy/ Sell</a></li>
                                        <li><a href="#">NFT Staking</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-12">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s"
                                    style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Quick Links</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a href="">Whitepaper</a></li>
                                        <li><a href=""  target="_blank">Pitch Deck</a></li>
                                        <li><a href="#team">Markeplace</a></li>
                                        <li><a href="#team">Smart Contract</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s"
                                    style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                    <h3 class="f-title f_600 t_color f_size_18">Subscribe Us</h3>
                                    <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true"
                                        _lpchecked="1">
                                        <input type="text" name="EMAIL" class="form-control footerinput memail mb-4" placeholder="Email" />
                                        <button class="btn btn-info" style={{ margin: "5px 0px 15px 0px", padding: "10px 44px" }}>SUBSCRIBE
                                            <i class="fas fa-paper-plane"></i></button>
                                        <p class="mchimp-errmessage" style={{ display: "none" }}></p>
                                        <p class="mchimp-sucmessage" style={{ display: "none" }}></p>
                                    </form>
                                  
                                </div>
                            </div>

                            <div class="col-lg-1 col-sm-12"></div>
                            
                        </div>
                    </div>
                    <div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <p class="mb-0 f_400 text-center">Copyright © 2021 DeFly Ball - All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer