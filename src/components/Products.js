const Products = () => {
    return ( 
        <section className="mx-auto pt-5" id="st1">
        <div>
            <div class="d-flex justify-content-between">
                <h1 class="m-4" id="st2">Products</h1>
                <p class="m-4 my-auto" >See All<span class="mx-3 bg-black bg-opacity-10 pe-3"><a href=""><i class="bi bi-arrow-right" id="st3"></i></a></span></p>
            </div>
            <nav class="navbar navbar-expand-lg bg-white py-5">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav" id="navbar-nav">
                      <a class="nav-link active" aria-current="page" href="#">All</a>
                      <a class="nav-link" href="#">Bed</a>
                      <a class="nav-link" href="#">Sofa</a>
                      <a class="nav-link" href="#">Chair</a>
                      <a class="nav-link" href="#">Light</a>
                    </div>
                  </div>
                </div>
            </nav>
            <div>
                <div class="justify-content-evenly">
                    <div class="row">
                        <div class="col-md-4 mx-3 my-3 position-relative" id="st4">
                            <div class="p-5" id="st5">
                                <p class="fs-5">Hand Base Lamp</p>
                                <p>$35.00<span class="mx-4 opacity-50" id="st6">$55.00</span></p>
                            </div>
                            <div  class="position-absolute" id="st7">
                                <img src="/products/Image1.png"/>
                            </div>   
                            <a class="position-absolute rounded-circle" id="st8"><i class="bi bi-cart text-white"></i></a>                         
                        </div>
                        <div class="col-md-4 mx-3 my-3 position-relative" id="st4">
                            <div class="p-5" id="st5">
                                <p class="fs-5">Vintage Chair</p>
                                <p>$65.00<span class="mx-4 opacity-50" id="st6">$95.00</span></p>
                            </div>
                            <div class="position-absolute" id="st11">
                            <img src="/products/Image2.png"/>
                            </div>   
                            <a class="position-absolute rounded-circle" id="st8"><i class="bi bi-cart text-white"></i></a>                         
                        </div>
                        <div class="col-md-4 mx-3 my-3 position-relative" id="st4">
                            <div class="p-5" id="st5">
                                <p class="fs-5">Lamp tool</p>
                                <p>$5.00<span class="mx-4 opacity-50" id="st6">$45.00</span></p>
                            </div>
                            <div class="position-absolute" id="st16">
                            <img src="/products/Image3.png"/>
                            </div>   
                            <a class="position-absolute rounded-circle" id="st8"><i class="bi bi-cart text-white"></i></a>                         
                        </div>
                        <div class="col-md-4 mx-3 my-3 position-relative" id="st4">
                            <div class="p-5" id="st5">
                                <p class="fs-5">Stylish Chair</p>
                                <p>$45.00<span class="mx-4 opacity-50" id="st6">$55.00</span></p>
                            </div>
                            <div class="position-absolute" id="st21">
                            <img src="/products/Image4.png"/>
                            </div>   
                            <a class="position-absolute rounded-circle" id="st8"><i class="bi bi-cart text-white"></i></a>                         
                        </div>
                        <div class="col-md-4 mx-3 my-3 position-relative" id="st4">
                            <div class="p-5" id="st5">
                                <p class="fs-5">Vintage Chair</p>
                                <p>$65.00<span class="mx-4 opacity-50" id="st6">$95.00</span></p>
                            </div>
                            <div class="position-absolute" id="st16">
                            <img src="/products/Image5.png"/>
                            </div>   
                            <a class="position-absolute rounded-circle" id="st8"><i class="bi bi-cart text-white"></i></a>                         
                        </div>
                        <div class="col-md-4 mx-3 my-3 position-relative" id="st4">
                            <div class="p-5" id="st5">
                                <p class="fs-5">Stackable Chair</p>
                                <p>$87.00<span class="mx-4 opacity-50" id="st6">$97.00</span></p>
                            </div>
                            <div class="position-absolute" id="st31">
                            <img src="/products/Image6.png"/>
                            </div>   
                            <a class="position-absolute rounded-circle" id="st8"><i class="bi bi-cart text-white"></i></a>                         
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <style jsx>{
            `
            #navbar-nav{width: 30%;display: flex;justify-content: space-between;font-family: var(--Poppins);}
            #st1{height: auto;width:80%}
            #st2{color: #8C593B;font-family: var(--Noto-Seri);font-weight: 600;}
            #st3{color:#8C593B;}
            #st4{height:602px; width:312px; font-family: var(--Poppins);}
            #st5{height: 305px; background-color: #f1f1f1;}
            #st6{text-align: center;}
            #st7{top: 30%; left: 30%; height: 297px; width:221px;}
            #st8{top: -15px; right: 25px; padding: 7px !important; padding-inline: 12px !important; background-color: #D6C4B8; text-align: center ;}
            #st11{top: 30%; left: 18%; height: 297px; width:221px;}
            #st16{top: 30%; left: 25%; height: 297px; width:221px;}
            #st21{top: 30%; left: 15%; height: 297px; width:221px;}
            #st31{top: 30%; left: 15%; height: 297px; width:221px;}
            `
        }</style>
    </section>
     );
}
 
export default Products;