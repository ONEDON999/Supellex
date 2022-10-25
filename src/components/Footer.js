const Footer = () => {
    return ( 
        <footer>
        <div class="w-100 p-2 p-lg-5" id="moz1">
            <div class="d-flex p-md-5">
                <div class="col-sm-5 col-md-8"><h1 class="text-white">Start your business today<br/> for $0+ state fees.</h1></div>
                <div class="d-flex col-sm-7 col-md-4 mt-4">
                    <a href="#" class="btns p-1 p-lg-2 m-2" id="moz2">Get Started</a>
                    <a href="#" class="btns p-1 p-lg-2 text-white m-2" id="moz3">Contact Sales</a>
                </div>
            </div>
            <hr class="px-md-5 hr text-white" />

            <div class="d-flex justify-content-between p-5 text-white" id="k1">
                <div class="col-md-2 m-1" id="k2">
                    <a class="text-white" id="k2">supellex</a>
                    <p class="mt-3" id="k2"> Optix seamlessly connects your members with the community, resources</p>
                    <div id="moz4 k2" class="text-white">
                        <span class="mx-2"><i class="bi bi-facebook"></i></span>
                        <span class="mx-2"><i class="bi bi-twitter"></i></span>
                        <span class="mx-2"><i class="bi bi-instagram"></i></span>
                        <span class="mx-2"><i class="bi bi-pinterest"></i></span>                        
                    </div>
                    
                </div>
                <div class="col-md-2 m-1" id="k2"><p>Entity types</p>
                    <p>Knowledge base</p>
                    <p>Security</p>
                    <p>Privacy Policy</p>
                    <p>Partners</p>
                    <p>About us</p>
                    <p>FAQs</p>
                </div>
                <div class="col-md-2 m-1" id="k2"><p>Services</p>
                    <p>Contact Us</p>
                    <p>Press</p>
                    <p>Payrool</p>
                    <p>Library</p>
                    <p>Blog</p>
                    <p>Help Center</p>
                </div>
                <div class="col-md-2 m-1" id="k2"><p>Resource</p>
                    <p>Pricing</p>
                    <p>FAQs</p>
                    <p>Contact Support</p>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                </div>
                <div class="col-md-2 m-1" id="k2"><p>Support</p>
                    <p>Contact</p>
                    <p>Affiliates</p>
                    <p>Sitemap</p>
                    <p>Cancelation Policy</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
        <style jxs>
            {`
              .btns{
                border-radius: 18px;
                padding: 2px;
                background-color: #fff;
                margin: 10px;
                height: 38px;
                max-height: 52px;
                text-decoration: none;
            }
            #moz1{
                background-color: #8C593B; height: 30%;
            }
            #moz2{
                color:#BF8A6B;
            }
            #moz3{
                background-color: #BF8A6B;
            }
            #moz4{
                display: inline-block;
            }
            div.d-flex.p-md-5,h1.text-white,div.d-flex.col-sm-7.col-md-4.mt-4{
                background-color: var(--footer-color)
            }
            #k1,#k2{
                background-color: var(--footer-color)
            }
            `}
        </style>
    </footer>
     );
}
 
export default Footer;