<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    include "includes/top-scripts.php"
    ?>
</head>

<body>
    <?php
    include "includes/header.php"
    ?>
    <!-- Main Content Starts -->
    <section id="about-main">
        <div class="sec-overlay">
            <div class="container">
                <div class="about-heading-wrap d-flex flex-column justify-content-center align-items-center">
                    <span>Contact Us</span>
                    <h1><b>Get In Touch</b></h1>
                </div>
            </div>
        </div>
    </section>

    <section id="contact-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-wrapper d-flex flex-column justify-content-center align-items-center">
                        <i class="fas fa-mobile-alt contact-icon py-2"></i>
                        <h5 class="pt-2">Call Us</h5>
                        <p class="main-text"> +823-4565-13456 </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-wrapper d-flex flex-column justify-content-center align-items-center">
                        <i class="fas fa-mail-bulk contact-icon py-2"></i>
                        <h5 class="pt-2">Email Us</h5>
                        <p class="main-text"> contact@mail.com </p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-wrapper d-flex flex-column justify-content-center align-items-center">
                        <i class="fas fa-map-marker-alt contact-icon px-2"></i>
                        <h5 class="pt-2">Location</h5>
                        <p class="main-text"> North Main Street,Brooklyn Australia </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact-us-sec">
        <div class="container">
            <div class="heading-wrapper text-center py-5">
                <h2 class="main-head"><b>Contact Us</b></h2>
                <hr class="hr-style">
                <p class="main-text">Laboriosam exercitationem molestias beatae eos pariatur, similique, <br> excepturi mollitia sit perferendis maiores ratione aliquam?</p>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <input type="text" class="form-control input-bg py-4" id="usr" placeholder="Your Full Name">
                    </div>
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control input-bg py-4" id="usr" placeholder="Your Email address">
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control input-bg py-4" id="usr" placeholder="Your Query Topic">
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control input-bg py-4" id="usr" placeholder="Your Phone Number">
                </div>
                <div class="col-lg-12">
                    <div class="form-group my-3">
                        <textarea class="form-control input-bg" rows="8" id="comment" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <button type="button" class="msg-btn mx-3 my-3">Send Message</button>
            </div>
        </div>
    </section>

    <section id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13282.347423063315!2d73.05232244999999!3d33.667865400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1643702366578!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </section>


    <!-- Main Content Ends -->
    <?php
    include "includes/footer.php"
    ?>

    <?php
    include "includes/bottom-scripts.php"
    ?>
</body>

</html>