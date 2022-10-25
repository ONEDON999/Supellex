import React from "react";
import '../css/Navbar.css'
import '../css/global-styles.css'
// import '../css/navbar.css'
// eslint-disable-next-line
const Navbar = () => {
    return (  
        <div className="m-auto py-3 section">
        <div className="nav ">
            <div className="nav1 align-self-center">supellex</div>
            <div className="nav2 d-flex justify-content-around">
                <div className="home p-2 fs-5"><a id="a" href="/top">Home</a></div>
                <div className="home p-2 fs-5"><a id="a" href="/top">About</a></div>
                <div className="home p-2 fs-5"><a id="a" href="/top">Features</a></div>
                <div className="home p-2 fs-5"><a id="a" href="/top">Contact</a></div>
            </div>
            <div className="nav3 align-self-center d-flex">
                 
                 
                 <div className=" d-flex mx-3">
                    <img src="/search.svg" alt="Bootstrap" width="20" height="20"/>
                
                 </div>
                 <div className="d-flex">
                    <img src="/bars-staggered-solid.svg" width="20" height="20" alt=""/>
                 </div>

                </div>
        </div>
        <style jsx>{
            
        }</style>
    </div>

    );
}
 
export default Navbar;