const AboutUs = () => {
    return ( 
        
        <div className="mx-auto" id="section">
            <div id="back" className="pb-5">
        <div className="down mx-auto py-5">
            <h1 className="our pt-5 pb-2">What our happy client say</h1>
            <p className="p-3 px-5 pb-5 file mx-auto">File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.</p>
        </div>
        <div className="d-flex mx-auto" id="pictext">
            <div className="w-50">
                <img src="/Client.png" alt="" />
            </div>
            <div className="w-50">
                <h3 className="m-3" id="supellex">supellex</h3>
                <p className="fs-3 m-3 data">File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.</p>
                <h4 className="m-3 diamond">Larry Diamond</h4>
                <h5 className="m-3 chief">Chief Executive Officer</h5>
                <div className="d-flex cir mx-auto justify-content-between">
                    <a href="#" className="icon shadow">
                    <img src="/arrow-left-short.svg" width="50" height="50" alt=""/>
                    </a>
                    <a href="#" className="icon shadow">
                    <img src="/arrow-right-short.svg" width="50" height="50" alt=""/>
                    
                    </a>
                    
                </div>
            </div>
        </div>
        <style jxs>
            {`
           .data{
            font-family: var(--Poppins);
            font-style: italic;
            font-size: 23px !important;
           }
           .diamond{
            font-weight: 600;
            font-family: var(--Poppins);
           }
           .chief{
            font-size: 15px !important;
            font-family: var(--Poppins);
           }
            #section{
            background-image: url('/Testimonial.png');
            width: 90%;
            justify-content: center;
            background-size: cover;
            background-repeat: no-repeat;
            margin-bottom: 5% !important;
        }
        #back{
            
        }
        .down{
            padding: 50px;
            width: 40%;
            margin: auto;
            text-align: center;
        }
        #pictext{
            width: 70%;
            margin: auto;
            
        }
        .our{
            font-size: 45px !important;
            font-weight: 600;
            color:var(--primary-text-color);
            font-family: var(--Noto-Seri);
        }
        .file{
            width:90%
            
        }
        h3#supellex.m-3{
            color: var(--primary-text-color);
        }

        .down p{
            font-size:13px !important;
            font-family: var(--Poppins);
        }

        .icon{
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background-color:white;
            margin:auto;
        }
        .cir {
            width: 30%;
            margin-left: 16px !important;
        }
        button{
            background-color: white;
        }
        `}
        </style>
    </div>
    </div>
     );
}
 
export default AboutUs;