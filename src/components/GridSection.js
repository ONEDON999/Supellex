const GridSection = () => {
    return ( 
    <div className="mx-auto section">
        <div className="mx-auto mb-5">
        <div className="d-flex justify-content-between">
            <div className="aboutUs">
                <h1>About Us</h1>
                <p className="fs-5">At Besnik Consultancy, we take pride in our values – service, integrity, and excellence.</p>
            </div>
            <div className="push pt-3">
                <button>
                <div className="shadow p-3 px-5 mb-5 bg-white rounded">Learn more</div>
                </button>
                
                {/* <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div> */}
            </div>
        </div>
        </div>
        <section id="content">
        <div className="one">
            <h1>1.</h1>
            <h3 className="mt-3 mb-2">Who We Are</h3>
            <p>You get a 2-week free trial to kick the Smarty tries. We want you to.</p>
        </div>
        <div className="two">
            <h1>2.</h1>
            <h3 className="mt-3 mb-2">What Do We Do</h3>
            <p>We give you a free course that guides you through the process.</p>
        </div>
        <div className="three">
            <img src="/Rectangle 4078.png" alt="" />
            
            
        </div>
        <div className="fourth">
            <img src="/Rectangle 4075.png" alt="" />
        </div>
        <div className="five">
            <h1>3.</h1>
            <h3 className="mt-3 mb-2">How Do We Help</h3>
            <p>Use our multimedia lecturers, videos, and coaching sessions.</p>
        </div>
        <div className="six">
            <h1>4.</h1>
            <h3 className="mt-3 mb-2">Create success story</h3>
            <p>Use our multimedia lecturers, videos, and coaching sessions.</p>
        </div>
        <div className="seven">
            <img src="/Rectangle 4076.png" alt="" />
        </div>
        <div className="eight">
            <img src="/Rectangle 4077.png" alt="" />
        </div>
        
        </section> 
        <style jsx>
            {`

            #content{
                display: grid;
                margin: 0 auto;
                margin-top: 67px !important;
                grid-template-columns: repeat(40, 1fr);
                grid-template-rows: repeat(17);
            
            }
            .one{
                grid-column: 1/10;
                grid-row: 1/7;
            }
            .two{
                grid-column: 13/21;
                grid-row: 1/7;
            }
            .three{
                grid-column: 24/33;
                grid-row: 3/8;
            }
            .fourth{
                grid-column: 34/41;
                grid-row: 1/10;
            }
            .five{
                grid-column: 1/10;
                grid-row: 10/15;
            }
            .six{
                grid-column: 13/21;
                grid-row: 10/15;
            }
            .seven{
                grid-column: 24/33;
                grid-row: 9/18;
            }
            .eight{
                grid-column: 34/41;
                grid-row: 11/17;
                background-size: cover;
                background-repeat: no-repeat;
            }
            .section h1{
                font-size:50px;
                color: var(--primary-text-color);
                font-family: var(--Noto-Seri);
                font-weight: 700;
            }
            .section .one h1,.section .two h1,.section .five h1,.section .six h1{
                font-size:60px;
                color: var(--primary-text-color);
                font-family: var(--Poppins);
                font-weight: 700;
            }
            .section .one h3,.section .two h3,.section .five h3,.section .six h3{
                font-size:25px;
                font-family: var(--Poppins);
                font-weight: 600;
            }
            .section .one p,.section .two p,.section .five p,.section .six p{
                font-family: var(--Poppins);
            }
            .section h3{
                color: var(--primary-text-color);
            }
            .section p{
                color: var(--primary-text-color-for-p);
                font-family: var(--Poppins);
                font-weight: 400;
            }
            .push{
                margin-right: 30px !important;
            }
            .aboutUs{
                width:40%
            }
            .shadow{
                background-color:#F4F6F6 !important;
            }
            button{background-color:white}
            `}
        </style>
    </div>
);
}
 
export default GridSection;