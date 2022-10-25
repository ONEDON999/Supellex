import React from "react";

const HeroSection = () => {
    return ( 
        <div className="hero mx-auto" id="hero">
        <div className="row">
            <div className="d-flex">
                <div className="col-md-3">
                    <div className=" mt-5" id="don1">
                        <div className="dot-cover" id="don2">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don3">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don4">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don5">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don6">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don7">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don8">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="dot-cover" id="don9">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="col-md-9" id="don10">
                    <div className="" id="don11" >
                        <div className="p-5 blur-right"> 
                            <p className="hero-p fs-1 fw-bolder" id="don12">We Help You Make Mordern Interior.</p>
                            <p className="fs-6" id="don13">We will help you to make an elegant
                                and luxurious interior designed by
                                professional interior designer.</p>
                        </div>
                    </div>
                    <div id="don14" className="p-5">
                    <img src="/Vector 3.svg" alt="" height={30}/>
                    </div>
                </div> 
            </div>
            
        </div>
       <style jxs>
        {`
        #hero{
            width:91%;
            margin-bottom: 111px !important;
        }
        .dot-cover{
            display: flex;
        }
        .dot {
            z-index: 999;
            height: 4px;
            width: 4px;
            background-color: #8C593B;
            border-radius: 50%;
            display: inline-block;
            margin: 5px !important;
        }
        .hero-p{
            line-height: normal;
        }
        .blur-right{
            backdrop-filter: blur(70px);
            background-color:transparent;
        }
        #don1{
            text-align:center; 
            position: relative;
        }
        #don2{
            position:absolute; 
            left: 30%;
        }
        #don3{
            position:absolute; 
            left:30%; 
            top:13px
        }
        #don4{
            position:absolute; left:30%; top:26px
        }
        #don5{
            position:absolute; left:30%; top:39px
        }
        #don6{
            position:absolute; left:30%; top:52px
        }
        #don7{
            position:absolute; left:30%; top:65px
        }
        #don8{
            position:absolute; left:30%; top:78px
        }
        #don9{
            position:absolute; left:30%; top:91px
        }
        #don10{
            position: relative; background-image: url('/living_rom.jpg'); background-size: cover; 
            height:550px;
            width:850px;
        }
        #don11{
            position:absolute; top:20%; left: -34%; height: 350px; width: 400px;
            background-color:transparent; 
        }
        #don14{
            position: absolute;
            top: 80%;
            left:88%;
            backdrop-filter: blur(60px);
            background-color:transparent; 
        }
        #don12{
            color: #8C593B;
            background-color:transparent;
            font-family: var(--Noto-Seri);
        }
        #don13{
            background-color:transparent;
            font-family: var(--Poppins);
        }
        `}
       </style>
    </div>
     );
}
 
export default HeroSection;