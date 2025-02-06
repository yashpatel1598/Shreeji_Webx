class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <div class="container-fluid footer py-5 my-6 mb-0 wow bounceInUp" data-wow-delay="0.1s" style="background-color: #35A7A0;">
            <div class="container">
                <div class="row d-flex justify-content-between align-items-start flex-wrap">
                 

                     <!-- first Column  -->
                    <div class="col-lg-3 col-md-4 col-sm-12 mb-4">
                        <div class="footer-item text-start">
                            <h4 class="mb-4" style="color: white; text-transform: uppercase; letter-spacing: 5px;">Shreeji<span class="text-dark">webEx</span></h4>
                            <div class="d-flex justify-content-start">
                                <p class="lh-lg mb-4" style="color: white;">Welcome to Shreeji WebEx, your trusted partner in navigating the digital landscape. We are a full-service digital marketing agency dedicated to driving growth and success for businesses of all sizes.</p>
                                 </div>
                        </div>
                    </div>

                    <!-- Second Column (Service Links) -->
                    <div class="col-lg-2 col-md-6 col-sm-12 mb-4">
                        <div class="footer-item text-start">
                            <h4 class="mb-4" style="color: white;">Service</h4>
                            <div class="d-flex flex-column align-items-start">
                                <a class="mb-2" href="index.html" style="color: white; text-decoration: none;"><i class="fa fa-check me-2"></i>Home</a>
                                <a class="mb-2" href="Digital_marketing.html" style="color: white; text-decoration: none;"><i class="fa fa-check me-2"></i>Service</a>
                                <a class="mb-2" href="book.html" style="color: white; text-decoration: none;"><i class="fa fa-check me-2"></i>Meeting Booking</a>
                                <a class="mb-2" href="contact.html" style="color: white;text-decoration: none;"><i class="fa fa-check me-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <!-- Third Column (Contact Info) -->
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="footer-item text-start">
                            <h4 class="mb-4" style="color: white;">Contact Us</h4>
                            <p style="color: white;"><i class="fa fa-map-marker-alt me-2"></i>30-31 Gokul park-3, Utarn, Surat, Gujarat -394105</p>
                            <p style="color: white;"><i class="fa fa-phone-alt me-2"></i>+91 9512890864</p>
                            <p style="color: white;"><i class="fas fa-envelope me-2"></i>support@shreejiwebex.com</p>
                            <p style="color: white;"><i class="fa fa-clock me-2"></i>24/7 Hours Service</p>
                        </div>
                    </div>

                    <!-- Fourth Column (Social Media Links) -->
                    <div class="col-lg-2 col-md-4 col-sm-12 mb-4">
                        <div class="footer-item text-start">
                            <h4 class="mb-4" style="color: white;">Social Media</h4>
                            <div class="d-flex justify-content-start">
                                <a class="btn btn-sm-square me-2 rounded-circle d-flex align-items-center justify-content-center" href="#" style="background-color: white;"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square me-2 rounded-circle d-flex align-items-center justify-content-center" href="#" style="background-color: white;"><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-sm-square rounded-circle d-flex align-items-center justify-content-center" href="#" style="background-color: white;"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


class SpecialContactUs extends HTMLElement {
    connectedCallback(){
        this,this.innerHTML = `

    <div class="text-center  wow bounceInUp" style="margin-top: 50px;" data-wow-delay="0.1s">
        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border rounded-pill px-4 py-1 mb-3"
            style="border-color: #35A7A0;">Contact Us</small>
    </div>

    <div class="container-contact">
        <!-- Left Column -->

        <div class="left-column-contact wow bounceInUp" data-wow-delay="0.1s">
            <h2 style="font-size: 40px;">Have a project in mind?</h2>
            <h3 style="font-size: 20px;"> Let’s get to work</h3>
        </div>

        <!-- Right Column -->
        <div class="right-column-contact">
            <div class="contact-us-wrapper">
                <a href="contact.html"> <!-- Link to index.html -->
                    <div class="contact-us-circle wow bounceInUp" data-wow-delay="0.1s">
                        <span>Contact Us</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    `
    }
}


customElements.define('special-footer', SpecialFooter);
customElements.define('special-contactus', SpecialContactUs);
