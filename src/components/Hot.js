import React from "react";
const Hot = () => {
    return ( 
        <section id="sections" class="m-auto py-5 third-sections d-flex ">
        <div class="hot d-flex justify-content-around mx-auto my-5">
            <div class="1 m-3 w-50">
                <h1 class=" text-lef" >Hot <img src="/fire.svg" alt=""/></h1>
                <h1 class="">deals for you</h1>
                <p className="pt-3">Online shopping for retail sales direct to consumers</p>
            </div>
            <div class="2 m-3">
                <img class="mx-auto" src="/image 528.png" alt="" />
                <h3 className="pt-5">1.5% cashback</h3>
                <p className="pt-3">Online shopping for retail sales direct to consumers</p>
            </div>
            <div class="3 m-3">
                <img class="mx-auto" src="/image 528.png" alt="" />
                <h3 className="pt-5">30-day terms</h3>
                <p className="pt-3">Online shopping for retail sales direct to consumers</p>
            </div>
            <div class="4 m-3">
                <img class="mx-auto" src="/image 528.png" alt="" />
                <h3 className="pt-5">Save Money</h3>
                <p className="pt-3">Online shopping for retail sales direct to consumers</p>
            </div>
        </div>
        <style jsx>
            {`
            .hot{
                // background-color: rgb(41, 255, 13);
                width: 80%;
            }
            #sections{
                text-align: left !important;
            }

            #sections h1{
                font-size:45px;
                color: var(--primary-text-color);
                font-family: var(--Noto-Seri);
                font-weight: 700;

            }
            #sections p{
                color: var(--primary-text-color-for-p);
                font-family: var(--Poppins);
                font-size:14px;
            }
            #sections h3{
                color:#3D3D3F
            }
            `}
        </style>
    </section>
     );
}
 
export default Hot;