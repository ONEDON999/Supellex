import React from "react";

const ClientsAndMembers = () => {
    return ( 
        <div className="m-auto py-3 third-section d-flex" id="warning">
        <div className="align-self-center m-auto d-flex flex-column same" id="warning">
            <div className="mx-auto my-3" id="warning"><h2>TRUSTED BY OVER 1K+ COMPANIES</h2></div>
        
            <div className="d-flex justify-content-between" id="same">
                <div id="same" className="py-2 align-self-center d-flex fs-3">
                    <img src="/Microsoft.png" alt="" />
                </div>
                <div id="same" className="py-2 align-self-center fs-3">
                    <img src="/Entrepreneur.png" alt="" />
                </div>
                <div id="same" className="py-2 align-self-center fs-1">
                    <img src="/Fortune.png" alt="" />
                </div>
                <div id="same" className="py-2 align-self-center fs-3">
                    <img src="/Business web.png" alt="" />
                </div>
                <div id="same" className="py-2 align-self-center fs-3">
                    <img src="/Mashable.png" alt="" />
                </div>
            </div>
        </div> 
        <style jsx>
        {`
        .third-section{
            margin-left:15px !important;
            
        }
        .con{
            font-size:8px;
            // color:var(--third-section-text);
        }
        #business{
            font-size:20px;
            color:var(--third-section-text);
            background-color:var(--third-section-bacground)
        }
        #same p{
            color:var(--third-section-text);
            background-color:var(--third-section-bacground)
        }
        .same{
            width:70%
        }
        #warning{
            background-color:var(--third-section-bacground);
            // font-family: var(--Poppins);
            // font-size:25px;
            // font-weight: 700;
        }
        #Fortune{
            font-family: var(--Noto-Seri)
        }
        #warning h2{
           
            font-family: var(--Poppins);
            font-size:25px;
            font-weight: 700;
        }
        #same{
            background-color:var(--third-section-bacground);
            font-family: var(--Noto-Seri);
            font-weight: 700;
        }
        `}
        </style>
    </div>
     );
}
 
export default ClientsAndMembers;