---
layout: landing
title: What We Do
description: Everything from cancer treatment to cosmetics, we've got you covered.
image: assets/images/pic11.jpg
nav-menu: true
---


<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
    <div class="inner">
        <header class="major">
            <h1>Our Services</h1>
        </header>

<!-- Content -->
<h2 id="content">Comprehensive Dermatological Care</h2>
<p>At University Dermatology, we offer a wide range of services to meet your dermatological needs. Click on a service to learn more.</p>

<div class="row">
    <div class="6u 12u$(small)">
        <ul class="service-list">
            <li onclick="showService('skin-cancer-screening')">Skin Cancer Screening</li>
            <li onclick="showService('acne-treatment')">Acne Treatment</li>
            <li onclick="showService('cosmetic-dermatology')">Cosmetic Dermatology</li>
            <li onclick="showService('pediatric-dermatology')">Pediatric Dermatology</li>
            <li onclick="showService('psoriasis-treatment')">Psoriasis Treatment</li>
            <li onclick="showService('laser-hair-removal')">Laser Hair Removal</li>
            <li onclick="showService('rosacea-treatment')">Rosacea Treatment</li>
            <li onclick="showService('dermatologic-surgery')">Dermatologic Surgery</li>
        </ul>
    </div>
    <div class="6u$ 12u$(small)">
        <div id="service-details">
            <!-- Default content or instructions -->
            <h3>Select a service to learn more</h3>
        </div>
    </div>
</div>

<!-- Hidden service details -->
<div id="service-data" style="display: none;">
    <div id="skin-cancer-screening">
        <h3>Skin Cancer Screening</h3>
        <p>Early detection is key to effectively treating skin cancer. Our comprehensive skin cancer screening process helps identify any suspicious lesions or growths at an early stage, ensuring timely and appropriate treatment.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Skin Cancer Screening" /></span>
    </div>
    <div id="acne-treatment">
        <h3>Acne Treatment</h3>
        <p>Our personalized acne treatment plans are designed to address the root causes of acne and provide lasting results. We offer a variety of treatments, including topical and oral medications, chemical peels, and laser therapy.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Acne Treatment" /></span>
    </div>
    <div id="cosmetic-dermatology">
        <h3>Cosmetic Dermatology</h3>
        <p>Enhance your natural beauty with our range of cosmetic dermatology services. From Botox and fillers to laser treatments and microneedling, we offer advanced procedures to help you look and feel your best.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Cosmetic Dermatology" /></span>
    </div>
    <div id="pediatric-dermatology">
        <h3>Pediatric Dermatology</h3>
        <p>We provide specialized dermatological care for children, addressing common skin issues such as eczema, warts, and birthmarks. Our team is skilled in handling the unique needs of our younger patients with care and compassion.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Pediatric Dermatology" /></span>
    </div>
    <div id="psoriasis-treatment">
        <h3>Psoriasis Treatment</h3>
        <p>Our psoriasis treatment options are designed to manage and alleviate the symptoms of psoriasis, improving your quality of life. We offer both topical and systemic treatments tailored to your specific needs.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Psoriasis Treatment" /></span>
    </div>
    <div id="laser-hair-removal">
        <h3>Laser Hair Removal</h3>
        <p>Say goodbye to unwanted hair with our effective laser hair removal treatments. Suitable for various skin types, our laser technology provides a long-lasting solution for smooth, hair-free skin.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Laser Hair Removal" /></span>
    </div>
    <div id="rosacea-treatment">
        <h3>Rosacea Treatment</h3>
        <p>Our rosacea treatment plans are tailored to reduce redness, inflammation, and visible blood vessels. We offer a range of options, including topical medications, laser therapy, and lifestyle recommendations.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Rosacea Treatment" /></span>
    </div>
    <div id="dermatologic-surgery">
        <h3>Dermatologic Surgery</h3>
        <p>For more complex skin issues, our dermatologic surgery services provide precise and effective solutions. We handle a variety of procedures, including mole removal, skin biopsies, and excision of skin cancers.</p>
        <span class="image fit"><img src="{% link assets/images/pic01.jpg %}" alt="Dermatologic Surgery" /></span>
    </div>
</div>

</div>
</section>

</div>

<script>
function showService(serviceId) {
    // Hide all service details
    var services = document.querySelectorAll('#service-data > div');
    services.forEach(function(service) {
        service.style.display = 'none';
    });

    // Show selected service
    var selectedService = document.getElementById(serviceId);
    if (selectedService) {
        document.getElementById('service-details').innerHTML = selectedService.innerHTML;
    }
}
</script>